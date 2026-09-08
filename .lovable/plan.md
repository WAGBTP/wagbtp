# Plan : faire fonctionner les e-mails sur Hostinger

## Objectif
Le site WAG-BTP envoie deux e-mails lors d'une demande de devis :
1. Une notification interne à `wagbtp@gmail.com`
2. Un accusé de réception au demandeur

Ces envois passent par l'API Resend. En local/preview Lovable, la variable `RESEND_API_KEY` est injectée. Une fois le site hébergé sur Hostinger (via GitHub), il faut configurer ces variables dans le panneau Hostinger.

## Étapes à suivre dans Hostinger

### 1. Récupérer la clé API Resend
- Se connecter à https://resend.com
- Aller dans **API Keys** → **Create API Key**
- Choisir le type **Sending access**
- Donner un nom explicite, par exemple `WAG-BTP Hostinger`
- Copier la clé (elle commence par `re_`)

### 2. Vérifier le domaine d'envoi dans Resend
- Dans Resend, aller dans **Domains** → **Add domain**
- Saisir `wagbtp.fr`
- Suivre les instructions DNS fournies par Resend (enregistrements DKIM, SPF, etc.)
- Attendre que le statut passe en **Verified**
- Sans cette vérification, Resend peut refuser d'envoyer depuis `contact@wagbtp.fr`

### 3. Ajouter les variables d'environnement dans Hostinger
Selon l'offre Hostinger :

**Si vous utilisez hPanel (hébergement mutualisé Cloud/Pro avec Node.js) :**
- Connectez-vous à hPanel
- Allez dans **Websites** → sélectionnez votre site
- Cliquez sur **Advanced** → **Node.js**
- Dans la section **Environment Variables**, ajoutez les trois variables :

```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxx
MAIL_FROM_NAME=WAG BTP
MAIL_FROM_EMAIL=contact@wagbtp.fr
```

**Si vous utilisez un VPS Hostinger :**
- Connectez-vous en SSH au serveur
- Éditez le fichier d'environnement du service Node.js (souvent `.env` à la racine du projet ou dans `/etc/systemd/system/votre-service.service`)
- Ajoutez les variables ci-dessus
- Recharger le service : `sudo systemctl restart votre-service`

### 4. Redémarrer l'application
- Dans hPanel, cliquez sur **Restart** dans la section Node.js
- Ou, en VPS, exécutez `pm2 restart all` ou `systemctl restart votre-service`

### 5. Vérifier le déploiement du code
- S'assurer que la dernière version du code est bien déployée depuis GitHub
- Hostinger déploie automatiquement si GitHub Actions ou le déploiement Git est configuré
- Sinon, pousser manuellement la dernière version

### 6. Tester le formulaire
- Aller sur la page `/contact`
- Remplir et envoyer une demande de devis
- Vérifier que `wagbtp@gmail.com` reçoit la notification
- Vérifier que l'adresse e-mail saisie dans le formulaire reçoit l'accusé de réception

## Résumé des variables obligatoires

| Variable | Valeur attendue | Rôle |
|---|---|---|
| `RESEND_API_KEY` | `re_...` | Authentification auprès de Resend |
| `MAIL_FROM_NAME` | `WAG BTP` | Nom affiché comme expéditeur |
| `MAIL_FROM_EMAIL` | `contact@wagbtp.fr` | Adresse d'envoi (doit être vérifiée chez Resend) |

## Points de vigilance
- L'adresse `wagbtp@gmail.com` reste la destinataire interne et le reply-to ; elle n'a pas besoin d'être configurée chez Resend.
- Si `wagbtp.fr` n'est pas vérifié dans Resend, les envois échoueront ou partiront en spam.
- Ne jamais mettre `RESEND_API_KEY` dans le code source ou dans un fichier commité sur GitHub.
