# Deployment Guide for Clixite.be (Hostinger VPS)

Ce guide explique comment déployer **clixite.be** (application Next.js 16) vers un VPS Hostinger en utilisant **Node.js 20 + PM2 + Nginx** avec déploiement automatique via **GitHub Actions**.

---

## 📋 Vue d'ensemble

- **Domaine**: clixite.be (pointe vers le VPS)
- **IP VPS**: 72.62.239.176
- **Stack**: Next.js 16, Node.js 20, PM2 (cluster mode), Nginx (reverse proxy)
- **Langues**: Trilingue FR/NL/EN (next-intl)
- **Repository**: https://github.com/NicolasSimon/clixite.be

---

## 1. Prérequis serveur VPS

Le VPS doit avoir installé:

- Ubuntu 24.04 (ou 22.04)
- Node.js **v20**
- npm
- PM2 (process manager)
- Nginx (reverse proxy)
- Git
- Certbot + nginx plugin (pour SSL)

### 1.1 Installation des dépendances (Ubuntu/Debian)

```bash
# Mise à jour du système
sudo apt update && sudo apt upgrade -y

# Installation des outils de base
sudo apt install -y git nginx certbot python3-certbot-nginx curl

# Installation de Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Vérification des versions
node --version  # devrait afficher v20.x.x
npm --version

# Installation de PM2 globalement
sudo npm install -g pm2

# Vérification PM2
pm2 --version
```

---

## 2. Déploiement initial (première fois)

### 2.1 Se connecter au VPS

```bash
ssh votre_user@72.62.239.176
```

### 2.2 Créer la structure de répertoires

```bash
# Naviguer vers le répertoire web
cd /var/www

# Cloner le repository
sudo git clone https://github.com/NicolasSimon/clixite.be.git clixite.be

# Définir les permissions
sudo chown -R $USER:$USER clixite.be
cd clixite.be
```

### 2.3 Installer et builder l'application

```bash
# Installer les dépendances
npm ci

# Builder l'application Next.js
npm run build

# Démarrer avec PM2 (utilise ecosystem.config.js)
pm2 start ecosystem.config.js

# Sauvegarder la config PM2
pm2 save

# Configurer PM2 pour démarrer au boot
pm2 startup
# Exécuter la commande affichée par pm2 startup (sudo ...)
```

> ℹ️ **Note**: Le fichier `ecosystem.config.js` configure PM2 en mode cluster avec `instances: 'max'` pour utiliser tous les cœurs disponibles.

---

## 3. Configuration Nginx

### 3.1 Déployer la configuration Nginx

Le fichier `nginx.conf` à la racine du projet contient la configuration optimisée. Il faut le copier sur le serveur:

```bash
# Sur le VPS, depuis /var/www/clixite.be
sudo cp nginx.conf /etc/nginx/sites-available/clixite.be

# Créer un lien symbolique pour activer le site
sudo ln -s /etc/nginx/sites-available/clixite.be /etc/nginx/sites-enabled/clixite.be

# Supprimer le site par défaut si présent
sudo rm -f /etc/nginx/sites-enabled/default

# Vérifier la configuration
sudo nginx -t

# Recharger Nginx
sudo systemctl reload nginx
```

### 3.2 Configuration Nginx expliquée

Le fichier `nginx.conf` inclut:
- ✅ Redirection HTTP → HTTPS
- ✅ Reverse proxy vers Next.js (port 3000)
- ✅ Compression gzip pour les assets
- ✅ Caching optimisé pour les fichiers statiques Next.js
- ✅ Headers de sécurité (X-Frame-Options, X-Content-Type-Options, etc.)
- ✅ Configuration SSL-ready

---

## 4. Configuration SSL (HTTPS)

Une fois que le site fonctionne en HTTP, configurer SSL avec Let's Encrypt:

```bash
# Obtenir le certificat SSL et configurer Nginx automatiquement
sudo certbot --nginx -d clixite.be -d www.clixite.be

# Suivre les instructions interactives:
# 1. Entrer votre email
# 2. Accepter les conditions d'utilisation
# 3. Choisir de rediriger HTTP → HTTPS (option 2)
```

Certbot va:
1. Obtenir les certificats SSL
2. Mettre à jour `/etc/nginx/sites-available/clixite.be`
3. Activer le renouvellement automatique des certificats

### 4.1 Vérifier le renouvellement automatique

```bash
# Tester le renouvellement (dry-run)
sudo certbot renew --dry-run
```

---

## 5. GitHub Actions (Déploiement automatique)

### 5.1 Configuration des secrets GitHub

Le workflow GitHub Actions (`.github/workflows/deploy.yml`) nécessite les secrets suivants:

1. Aller sur **GitHub** → **Repository** → **Settings** → **Secrets and variables** → **Actions**
2. Cliquer sur **New repository secret** et ajouter:

| Nom du secret | Valeur | Description |
|---------------|--------|-------------|
| `HOST` | `72.62.239.176` | Adresse IP du VPS |
| `USERNAME` | `votre_user` | Utilisateur SSH du VPS (ex: `root`, `ubuntu`, `nicolas`) |
| `SSH_PORT` | `22` | Port SSH (22 par défaut, à changer si modifié) |
| `SSH_KEY` | `[contenu de la clé privée]` | Contenu complet de `~/.ssh/id_rsa` ou équivalent |

### 5.2 Générer une clé SSH (si nécessaire)

Si vous n'avez pas de clé SSH configurée:

#### Sur votre machine locale:

```bash
# Générer une paire de clés SSH
ssh-keygen -t ed25519 -C "deploy@clixite.be"
# Appuyer sur Entrée pour accepter l'emplacement par défaut
# Optionnel: Définir une passphrase (laisser vide pour GitHub Actions)

# Afficher la clé publique
cat ~/.ssh/id_ed25519.pub
```

#### Sur le VPS:

```bash
# Ajouter la clé publique aux clés autorisées
echo "ssh-ed25519 AAAA..." >> ~/.ssh/authorized_keys

# Définir les permissions correctes
chmod 600 ~/.ssh/authorized_keys
chmod 700 ~/.ssh
```

#### Dans GitHub:

```bash
# Afficher la clé privée pour la copier dans GitHub Secrets
cat ~/.ssh/id_ed25519
# Copier TOUT le contenu (de -----BEGIN à -----END)
```

### 5.3 Fonctionnement du workflow

À chaque `push` sur la branche `main`:

1. ✅ GitHub Actions installe Node.js 20
2. ✅ Installe les dépendances (`npm ci`)
3. ✅ Build l'application (`npm run build`)
4. ✅ Se connecte au VPS via SSH
5. ✅ Pull le code depuis GitHub
6. ✅ Réinstalle les dépendances sur le VPS
7. ✅ Rebuild l'application sur le VPS
8. ✅ Redémarre PM2

---

## 6. Commandes de maintenance

### 6.1 PM2

```bash
# Voir les processus en cours
pm2 list

# Voir les logs en temps réel
pm2 logs clixite-website

# Logs des 100 dernières lignes
pm2 logs clixite-website --lines 100

# Redémarrer l'application
pm2 restart clixite-website

# Recharger sans downtime (zero-downtime reload)
pm2 reload clixite-website

# Arrêter l'application
pm2 stop clixite-website

# Supprimer du registre PM2
pm2 delete clixite-website

# Monitorer les ressources
pm2 monit
```

### 6.2 Nginx

```bash
# Vérifier la configuration
sudo nginx -t

# Recharger la configuration (sans downtime)
sudo systemctl reload nginx

# Redémarrer Nginx
sudo systemctl restart nginx

# Voir les logs d'accès
sudo tail -f /var/log/nginx/clixite.be.access.log

# Voir les logs d'erreur
sudo tail -f /var/log/nginx/clixite.be.error.log

# Statut de Nginx
sudo systemctl status nginx
```

### 6.3 Application Next.js

```bash
# Depuis /var/www/clixite.be

# Mettre à jour le code manuellement
git pull origin main

# Réinstaller les dépendances
npm ci

# Rebuild l'application
npm run build

# Redémarrer PM2
pm2 restart clixite-website
```

---

## 7. Rollback (Retour arrière)

Si un déploiement pose problème:

### 7.1 Via Git (recommandé)

```bash
# Sur le VPS
cd /var/www/clixite.be

# Voir l'historique des commits
git log --oneline

# Revenir au commit précédent
git reset --hard <commit-sha>

# Rebuild et redémarrer
npm ci
npm run build
pm2 restart clixite-website
```

### 7.2 Restauration rapide

```bash
# Voir les releases PM2
pm2 list

# Redémarrer avec l'ancienne config sauvegardée
pm2 resurrect
```

---

## 8. Vérification du déploiement

### 8.1 Checklist post-déploiement

- [ ] Site accessible sur http://clixite.be → redirige vers https://
- [ ] Site accessible sur https://clixite.be ✅
- [ ] Site accessible sur https://www.clixite.be ✅
- [ ] Toutes les langues fonctionnent:
  - [ ] https://clixite.be (FR par défaut)
  - [ ] https://clixite.be/nl (Néerlandais)
  - [ ] https://clixite.be/en (Anglais)
- [ ] Formulaire de contact fonctionne
- [ ] PM2 démarre automatiquement au reboot
- [ ] SSL valide (certificat valide, pas d'erreur)
- [ ] Pas d'erreurs dans les logs PM2
- [ ] Pas d'erreurs dans les logs Nginx

### 8.2 Commands de vérification

```bash
# Tester PM2
pm2 status

# Tester Nginx
sudo nginx -t
systemctl status nginx

# Tester le SSL
curl -I https://clixite.be

# Vérifier que le site répond
curl -I http://clixite.be
# Devrait retourner "301 Moved Permanently"

# Vérifier les logs
pm2 logs clixite-website --lines 50
sudo tail -n 50 /var/log/nginx/clixite.be.error.log
```

---

## 9. Troubleshooting

### Problème: Le site ne charge pas

```bash
# Vérifier PM2
pm2 status
pm2 logs clixite-website --lines 100

# Si PM2 n'est pas démarré
pm2 start ecosystem.config.js

# Vérifier Nginx
sudo systemctl status nginx
sudo nginx -t

# Si Nginx a des erreurs
sudo tail -n 100 /var/log/nginx/error.log
```

### Problème: Build échoue

```bash
# Nettoyer et reconstruire
rm -rf .next node_modules
npm ci
npm run build
```

### Problème: Port 3000 déjà utilisé

```bash
# Voir ce qui utilise le port 3000
sudo lsof -i :3000

# Tuer le processus
pm2 delete all
pm2 start ecosystem.config.js
```

### Problème: Certificat SSL expiré

```bash
# Renouveler manuellement
sudo certbot renew

# Recharger Nginx
sudo systemctl reload nginx
```

---

## 10. Architecture du déploiement

```
Internet (https://clixite.be)
           ↓
    [Nginx :80/:443]
           ↓ (reverse proxy)
    [PM2 → Next.js :3000]
           ↓ (cluster mode, max instances)
    [Application Next.js]
```

### Flux de données:

1. Utilisateur accède à `clixite.be:80`
2. Nginx redirige vers `https://clixite.be:443` (SSL)
3. Nginx proxy vers `http://127.0.0.1:3000` (Next.js)
4. PM2 gère les instances Next.js en cluster
5. Next.js répond avec la page demandée
6. Nginx retourne la réponse en HTTPS

---

## 11. Contacts & Support

- **Repository**: https://github.com/NicolasSimon/clixite.be
- **Documentation Next.js**: https://nextjs.org/docs
- **Documentation PM2**: https://pm2.keymetrics.io/docs/usage/quick-start/
- **Documentation Nginx**: https://nginx.org/en/docs/

---

## 📝 Notes importantes

> **Build Next.js**: Le build génère dans `.next/` et nécessite `node_modules/` présents sur le serveur. C'est pour cela qu'on exécute `npm ci` + `npm run build` sur le VPS.

> **PM2 Cluster Mode**: Le fichier `ecosystem.config.js` utilise `instances: 'max'` et `exec_mode: 'cluster'` pour maximiser les performances en utilisant tous les cœurs CPU disponibles.

> **DNS**: Le domaine `clixite.be` pointe déjà vers `72.62.239.176`, donc aucune configuration DNS supplémentaire n'est requise.

> **Sécurité GitHub**: La clé SSH privée stockée dans les secrets GitHub doit avoir sa clé **publique** correspondante dans `~/.ssh/authorized_keys` sur le VPS pour l'utilisateur spécifié dans `USERNAME`.

> **Renouvellement SSL**: Certbot configure automatiquement un cron job pour renouveler les certificats SSL avant leur expiration (tous les 90 jours).
