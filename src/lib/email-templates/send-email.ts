import * as React from 'react'
import { render } from '@react-email/render'
import { TEMPLATES } from './registry'

// Server-only : lit RESEND_API_KEY. Ne jamais importer depuis un composant client.
// Envoi 100% autonome via l'API HTTP de Resend (aucune dépendance externe).

const SITE_NAME = process.env['MAIL_FROM_NAME'] ?? 'WAG BTP'
// Adresse d'expédition : domaine vérifié chez Resend. La réception reste sur wagbtp@gmail.com.
const FROM_EMAIL = process.env['MAIL_FROM_EMAIL'] ?? 'contact@wagbtp.fr'

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
  const apiKey = process.env['RESEND_API_KEY']
  if (!apiKey) {
    throw new Error("RESEND_API_KEY n'est pas configurée")
  }

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
      from: `${SITE_NAME} <${FROM_EMAIL}>`,
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
