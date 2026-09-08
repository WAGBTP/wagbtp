import * as React from 'react'
import { render } from '@react-email/render'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { TEMPLATES } from './registry'

// Server-only : lit RESEND_API_KEY. Ne jamais importer depuis un composant client.
// Envoi 100% autonome via l'API HTTP de Resend (aucune dépendance externe).

const DEFAULT_SITE_NAME = 'WAG BTP'
const DEFAULT_FROM_EMAIL = 'contact@wagbtp.fr'

type MailConfig = {
  apiKey: string
  siteName: string
  fromEmail: string
}

function parseEnvFile(contents: string) {
  const values: Record<string, string> = {}

  for (const rawLine of contents.split(/\r?\n/)) {
    const line = rawLine.trim()
    if (!line || line.startsWith('#')) continue

    const separator = line.indexOf('=')
    if (separator < 1) continue

    const key = line.slice(0, separator).trim()
    let value = line.slice(separator + 1).trim()
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1)
    }
    values[key] = value
  }

  return values
}

async function loadMailConfig(): Promise<MailConfig> {
  let apiKey = process.env['RESEND_API_KEY']
  let siteName = process.env['MAIL_FROM_NAME']
  let fromEmail = process.env['MAIL_FROM_EMAIL']

  // Hostinger remplace hbuilds/current à chaque déploiement. Si les variables
  // ne sont pas configurées dans hPanel, charge le fichier privé persistant
  // placé à ~/domains/wagbtp.fr/.env, hors du répertoire de chaque version.
  // Passenger peut masquer HOME : les chemins relatifs couvrent donc aussi
  // le répertoire hbuilds/current/nodejs réellement utilisé en production.
  if (!apiKey) {
    const home = process.env['HOME']
    const user = process.env['USER'] || process.env['LOGNAME']
    const cwd = process.cwd()
    const candidates = [
      ...(home ? [path.join(home, 'domains/wagbtp.fr/.env')] : []),
      ...(user ? [path.join('/home', user, 'domains/wagbtp.fr/.env')] : []),
      path.resolve(cwd, '../../../../.env'),
      path.resolve(cwd, '../../../.env'),
      path.resolve(cwd, '../../.env'),
      path.resolve(cwd, '../.env'),
    ]

    for (const candidate of [...new Set(candidates)]) {
      try {
        const values = parseEnvFile(await readFile(candidate, 'utf8'))
        if (!values['RESEND_API_KEY']) continue
        apiKey = values['RESEND_API_KEY']
        siteName ??= values['MAIL_FROM_NAME']
        fromEmail ??= values['MAIL_FROM_EMAIL']
        break
      } catch {
        // Essaie le chemin Hostinger suivant sans journaliser de secret.
      }
    }
  }

  if (!apiKey) {
    throw new Error(
      "RESEND_API_KEY n'est pas configurée dans Hostinger ni dans ~/domains/wagbtp.fr/.env",
    )
  }

  return {
    apiKey,
    siteName: siteName || DEFAULT_SITE_NAME,
    fromEmail: fromEmail || DEFAULT_FROM_EMAIL,
  }
}

export type SendTemplateEmailResult = { sent: true } | { sent: false; reason: string }

export interface SendTemplateEmailOptions {
  templateData?: Record<string, any>
  /** Évite les doublons si le même envoi est rejoué. */
  idempotencyKey?: string
  replyTo?: string
}

export async function sendTemplateEmail(
  templateName: string,
  to: string,
  options: SendTemplateEmailOptions = {}
): Promise<SendTemplateEmailResult> {
  const { apiKey, siteName, fromEmail } = await loadMailConfig()

  const template = TEMPLATES[templateName]
  if (!template) {
    throw new Error(
      `Template '${templateName}' introuvable. Disponibles : ${Object.keys(TEMPLATES).join(', ')}`
    )
  }

  const recipient = template.to || to
  if (!recipient) {
    throw new Error('Destinataire manquant')
  }

  const templateData = options.templateData ?? {}
  const element = React.createElement(template.component, templateData)
  const html = await render(element)
  const text = await render(element, { plainText: true })
  const subject =
    typeof template.subject === 'function' ? template.subject(templateData) : template.subject

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
      ...(options.idempotencyKey ? { 'Idempotency-Key': options.idempotencyKey } : {}),
    },
    body: JSON.stringify({
      from: `${siteName} <${fromEmail}>`,
      to: [recipient],
      subject,
      html,
      text,
      tags: [{ name: 'template', value: templateName.replace(/[^a-zA-Z0-9_-]/g, '_') }],
      ...(options.replyTo ? { reply_to: options.replyTo } : {}),
    }),
  })

  if (!response.ok) {
    const body = await response.text()
    console.error(`Resend a refusé l'envoi [${response.status}]: ${body}`)
    throw new Error(`Envoi e-mail échoué [${response.status}]: ${body}`)
  }

  return { sent: true }
}
