#!/usr/bin/env bash
set -e

########################################
# 🚀 Config à adapter
########################################

# VPS
SSH_USER="nicolas" 
SSH_HOST="72.62.239.176" 
SSH_PORT="22" 

# Chemins sur le VPS
REMOTE_WEB_ROOT="/var/www/clixite.be"
REMOTE_RELEASES_DIR="$REMOTE_WEB_ROOT/releases"
REMOTE_CURRENT_LINK="$REMOTE_WEB_ROOT/current"

# Dossier de build généré
# Note: Next.js 'output: export' génère 'out'. 
# Si vous utilisez un build standard, adaptez à '.next' ou gérez via PM2.
LOCAL_BUILD_DIR="out"

########################################
# ⚙️ Vérifications de base
########################################

if [ ! -d "$LOCAL_BUILD_DIR" ]; then
  echo "❌ Dossier de build introuvable: $LOCAL_BUILD_DIR"
  echo "Vérifie que le build sort bien dans ce répertoire (npm run build avec output: export)."
  exit 1
fi

# Timestamp pour la nouvelle release
TIMESTAMP=$(date +"%Y%m%d%H%M%S")
REMOTE_RELEASE_PATH="$REMOTE_RELEASES_DIR/$TIMESTAMP"

echo "==> Déploiement de clixite.be"
echo " VPS : $SSH_USER@$SSH_HOST:$SSH_PORT"
echo " Build local : $LOCAL_BUILD_DIR"
echo " Nouvelle release : $REMOTE_RELEASE_PATH"

########################################
# 📂 Création des dossiers sur le VPS
########################################

ssh -p "$SSH_PORT" "$SSH_USER@$SSH_HOST" "mkdir -p '$REMOTE_RELEASES_DIR'"

########################################
# 📤 Envoi des fichiers (rsync)
########################################

rsync -az --delete \
  -e "ssh -p $SSH_PORT" \
  "$LOCAL_BUILD_DIR"/ \
  "$SSH_USER@$SSH_HOST:$REMOTE_RELEASE_PATH/"

########################################
# 🔗 Mise à jour du symlink 'current'
########################################

ssh -p "$SSH_PORT" "$SSH_USER@$SSH_HOST" "
  # Créer le dossier racine si besoin
  sudo mkdir -p '$REMOTE_WEB_ROOT'
  # Mettre à jour le lien symbolique
  ln -sfn '$REMOTE_RELEASE_PATH' '$REMOTE_CURRENT_LINK'
  # Droits pour nginx (www-data)
  sudo chown -R www-data:www-data '$REMOTE_WEB_ROOT'
  # Recharger Nginx
  sudo systemctl reload nginx
"

echo "✅ Déploiement terminé avec succès."
echo " Release active : $REMOTE_RELEASE_PATH"
