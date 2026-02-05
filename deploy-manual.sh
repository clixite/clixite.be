#!/bin/bash

# =============================================================================
# Clixite.be - Script de déploiement manuel vers VPS Hostinger
# =============================================================================
# Ce script permet de déployer manuellement depuis votre machine locale
# Usage: ./deploy-manual.sh [options]
# Options:
#   --dry-run    Affiche les commandes sans les exécuter
#   --skip-build Builder uniquement sur le VPS (plus rapide)
# =============================================================================

set -e  # Arrêter en cas d'erreur

# Configuration (à adapter selon votre setup)
VPS_HOST="${VPS_HOST:-72.62.239.176}"
VPS_USER="${VPS_USER:-root}"
VPS_PORT="${VPS_PORT:-22}"
APP_DIR="${APP_DIR:-/var/www/clixite.be}"
LOCAL_DIR="$(pwd)"

# Couleurs pour les logs
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Options
DRY_RUN=false
SKIP_LOCAL_BUILD=false

# Parse arguments
while [[ $# -gt 0 ]]; do
  case $1 in
    --dry-run)
      DRY_RUN=true
      shift
      ;;
    --skip-build)
      SKIP_LOCAL_BUILD=true
      shift
      ;;
    *)
      echo -e "${RED}Option inconnue: $1${NC}"
      exit 1
      ;;
  esac
done

# Fonction pour logger
log_info() {
  echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
  echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
  echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
  echo -e "${RED}[ERROR]${NC} $1"
}

# Fonction pour exécuter les commandes
run_command() {
  if [ "$DRY_RUN" = true ]; then
    echo -e "${YELLOW}[DRY-RUN]${NC} $1"
  else
    eval "$1"
  fi
}

# =============================================================================
# 1. Vérifications préalables
# =============================================================================

log_info "Vérification de la configuration..."

# Vérifier qu'on est dans le bon répertoire
if [ ! -f "package.json" ] || [ ! -f "next.config.ts" ]; then
  log_error "Ce script doit être exécuté depuis la racine du projet clixite.be"
  exit 1
fi

# Vérifier que Git est propre
if ! git diff-index --quiet HEAD --; then
  log_warning "Il y a des changements non commités dans Git"
  read -p "Continuer quand même? (y/N) " -n 1 -r
  echo
  if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    exit 1
  fi
fi

# Vérifier la connexion SSH
log_info "Test de la connexion SSH vers ${VPS_USER}@${VPS_HOST}:${VPS_PORT}..."
if ! run_command "ssh -p ${VPS_PORT} -o ConnectTimeout=10 ${VPS_USER}@${VPS_HOST} 'echo Connected' > /dev/null 2>&1"; then
  log_error "Impossible de se connecter au VPS. Vérifiez vos credentials SSH."
  exit 1
fi
log_success "Connexion SSH OK"

# =============================================================================
# 2. Build local (optionnel)
# =============================================================================

if [ "$SKIP_LOCAL_BUILD" = false ]; then
  log_info "Build de l'application en local..."
  run_command "npm ci"
  run_command "npm run build"
  log_success "Build local terminé"
else
  log_warning "Build local ignoré (--skip-build)"
fi

# =============================================================================
# 3. Déploiement sur le VPS
# =============================================================================

log_info "Déploiement sur le VPS ${VPS_HOST}..."

# Script de déploiement à exécuter sur le VPS
DEPLOY_SCRIPT=$(cat <<'EOF'
set -e

APP_DIR="${1:-/var/www/clixite.be}"

echo "📦 Déploiement dans $APP_DIR..."

# Créer le répertoire si nécessaire
if [ ! -d "$APP_DIR" ]; then
  echo "➡️  Création du répertoire $APP_DIR"
  sudo mkdir -p "$APP_DIR"
  sudo chown -R $USER:$USER "$APP_DIR"
fi

cd "$APP_DIR"

# Git pull ou clone
if [ -d ".git" ]; then
  echo "➡️  Mise à jour du code depuis Git..."
  git fetch origin
  git reset --hard origin/clixite.be
else
  echo "➡️  Clonage du repository..."
  git clone https://github.com/clixite/clixite.be.git .
  git checkout clixite.be
fi

# Installation des dépendances
echo "➡️  Installation des dépendances..."
npm ci

# Build de l'application
echo "➡️  Build de l'application Next.js..."
npm run build

# Redémarrage PM2
echo "➡️  Redémarrage de PM2..."
if pm2 list | grep -q "clixite-website"; then
  pm2 reload ecosystem.config.js
else
  pm2 start ecosystem.config.js
fi

pm2 save

echo "✅ Déploiement terminé avec succès!"
EOF
)

if [ "$DRY_RUN" = true ]; then
  log_warning "Mode DRY-RUN: Les commandes SSH ne seront pas exécutées"
  echo "$DEPLOY_SCRIPT"
else
  ssh -p "${VPS_PORT}" "${VPS_USER}@${VPS_HOST}" "bash -s" -- "$APP_DIR" <<< "$DEPLOY_SCRIPT"
fi

# =============================================================================
# 4. Vérification post-déploiement
# =============================================================================

log_info "Vérification du déploiement..."

if [ "$DRY_RUN" = false ]; then
  # Vérifier le statut PM2
  log_info "Statut PM2:"
  ssh -p "${VPS_PORT}" "${VPS_USER}@${VPS_HOST}" "pm2 list"
  
  # Vérifier que le site répond
  log_info "Test de connectivité HTTP..."
  if curl -s -o /dev/null -w "%{http_code}" "http://${VPS_HOST}" | grep -q "200\|301\|302"; then
    log_success "Le site répond correctement!"
  else
    log_warning "Le site ne répond pas comme attendu. Vérifiez les logs."
  fi
fi

# =============================================================================
# 5. Récapitulatif
# =============================================================================

echo ""
echo "========================================="
log_success "Déploiement terminé!"
echo "========================================="
echo ""
echo "🌐 Site: https://clixite.be"
echo "📊 Vérifier les logs: ssh ${VPS_USER}@${VPS_HOST} 'pm2 logs clixite-website'"
echo "🔄 Redémarrer: ssh ${VPS_USER}@${VPS_HOST} 'pm2 restart clixite-website'"
echo ""

# =============================================================================
# Commands utiles
# =============================================================================
cat <<EOF
Commands utiles:
  
  # Se connecter au VPS
  ssh -p ${VPS_PORT} ${VPS_USER}@${VPS_HOST}
  
  # Voir les logs PM2
  ssh ${VPS_USER}@${VPS_HOST} "pm2 logs clixite-website --lines 100"
  
  # Voir le statut PM2
  ssh ${VPS_USER}@${VPS_HOST} "pm2 status"
  
  # Redémarrer l'application
  ssh ${VPS_USER}@${VPS_HOST} "pm2 restart clixite-website"
  
  # Voir les logs Nginx
  ssh ${VPS_USER}@${VPS_HOST} "sudo tail -f /var/log/nginx/clixite.be.access.log"

EOF
