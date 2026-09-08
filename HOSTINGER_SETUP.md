# Mise en route des e-mails sur Hostinger — WAG-BTP

Ce document explique comment faire fonctionner l'envoi des e-mails une fois le site déployé sur Hostinger.

## Principe

Le formulaire de contact envoie deux e-mails via l'API Resend :

1. **Notification interne** → `wagbtp@gmail.com`
2. **Accusé de réception** → l'adresse saisie par le demandeur

L'expéditeur affiché est : `WAG BTP <contact@wagbtp.fr>`.

## 1. Créer une clé API dans Resend

1. Aller sur https://resend.com
2. Se connecter au compte Resend de WAG-BTP
3. Aller dans **API Keys** → **Create API Key**
4. Choisir le type **Sending access**
5. Nommer la clé, par exemple `WAG-BTP Hostinger`
6. Copier la clé (elle commence par `re_`)

## 2. Vérifier le domaine `wagbtp.fr` dans Resend

1. Dans Resend, aller dans **Domains** → **Add domain**
2. Saisir `wagbtp.fr`
3. Resend fournit des enregistrements DNS à ajouter chez Hostinger (DKIM, SPF, etc.)
4. Ajouter ces enregistrements DNS dans le panneau Hostinger
5. Revenir dans Resend et cliquer sur **Verify**
6. Attendre que le statut passe en **Verified**

> **Important** : sans cette vérification, Resend refusera d'envoyer des e-mails depuis `contact@wagbtp.fr`.

## 3. Configurer les variables d'environnement dans Hostinger

### Si vous utilisez hPanel (hébergement mutualisé avec Node.js)

1. Connectez-vous à hPanel
2. Allez dans **Websites** → cliquez sur le site WAG-BTP
3. Cliquez sur **Advanced** → **Node.js**
4. Trouvez la section **Environment Variables**
5. Ajoutez les trois variables suivantes :

```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxx
MAIL_FROM_NAME=WAG BTP
MAIL_FROM_EMAIL=contact@wagbtp.fr
```

6. Enregistrez les variables
7. Cliquez sur **Restart** pour redémarrer l'application Node.js

### Si vous utilisez un VPS Hostinger

1. Connectez-vous au serveur en SSH
2. Éditez le fichier d'environnement du projet (souvent `.env` à la racine)
3. Ajoutez :

```bash
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxx
MAIL_FROM_NAME="WAG BTP"
MAIL_FROM_EMAIL=contact@wagbtp.fr
```

4. Rechargez le service, par exemple :

```bash
sudo systemctl restart wagbtp
# ou
pm2 restart all
```

## 4. Vérifier le déploiement du code

Assurez-vous que la dernière version du dépôt GitHub est bien déployée sur Hostinger :

- Si GitHub Actions est configuré : poussez sur la branche principale
- Si le déploiement Git est configuré dans hPanel : cliquez sur **Deploy**

## 5. Tester le formulaire

1. Ouvrir le site en production
2. Aller sur la page **Contact**
3. Remplir et envoyer une demande de devis
4. Vérifier que `wagbtp@gmail.com` reçoit la notification
5. Vérifier que l'adresse saisie dans le formulaire reçoit l'accusé de réception

## Variables récapitulatives

| Variable | Exemple | Obligatoire | Rôle |
|---|---|---|---|
| `RESEND_API_KEY` | `re_...` | Oui | Authentification Resend |
| `MAIL_FROM_NAME` | `WAG BTP` | Non (défaut : WAG BTP) | Nom de l'expéditeur |
| `MAIL_FROM_EMAIL` | `contact@wagbtp.fr` | Non (défaut : contact@wagbtp.fr) | Adresse d'expédition |

## Sécurité

- Ne jamais écrire `RESEND_API_KEY` dans le code source
- Ne jamais committer un fichier `.env` contenant la vraie clé
- Hostinger stocke ces variables de manière sécurisée côté serveur

## Problèmes courants

| Symptôme | Cause probable | Solution |
|---|---|---|
| "RESEND_API_KEY n'est pas configurée" | Variable manquante dans Hostinger | Ajouter `RESEND_API_KEY` et redémarrer |
| Envoi refusé par Resend | Domaine `wagbtp.fr` non vérifié | Vérifier le domaine dans Resend |
| E-mail dans les spam | Authentification DKIM/SPF manquante | Vérifier les enregistrements DNS |
