# =============================================================================
# Clixite.be - Script de déploiement manuel vers VPS Hostinger (PowerShell)
# =============================================================================
# Ce script permet de déployer manuellement depuis votre machine Windows locale
# Usage: .\deploy-manual.ps1 [-DryRun] [-SkipBuild]
# =============================================================================

param(
    [switch]$DryRun,
    [switch]$SkipBuild
)

# Configuration (à adapter selon votre setup)
$VPS_HOST = if ($env:VPS_HOST) { $env:VPS_HOST } else { "72.62.239.176" }
$VPS_USER = if ($env:VPS_USER) { $env:VPS_USER } else { "root" }
$VPS_PORT = if ($env:VPS_PORT) { $env:VPS_PORT } else { "22" }
$APP_DIR = if ($env:APP_DIR) { $env:APP_DIR } else { "/var/www/clixite.be" }

# Fonctions de logging
function Log-Info { Write-Host "[INFO] $args" -ForegroundColor Blue }
function Log-Success { Write-Host "[SUCCESS] $args" -ForegroundColor Green }
function Log-Warning { Write-Host "[WARNING] $args" -ForegroundColor Yellow }
function Log-Error { Write-Host "[ERROR] $args" -ForegroundColor Red }

# Fonction pour exécuter les commandes
function Run-Command {
    param([string]$Command)
    if ($DryRun) {
        Write-Host "[DRY-RUN] $Command" -ForegroundColor Yellow
    } else {
        Invoke-Expression $Command
    }
}

# =============================================================================
# 1. Vérifications préalables
# =============================================================================

Log-Info "Vérification de la configuration..."

# Vérifier qu'on est dans le bon répertoire
if (!(Test-Path "package.json") -or !(Test-Path "next.config.ts")) {
    Log-Error "Ce script doit être exécuté depuis la racine du projet clixite.be"
    exit 1
}

# Vérifier que Git est propre
$gitStatus = git status --porcelain
if ($gitStatus) {
    Log-Warning "Il y a des changements non commités dans Git"
    $continue = Read-Host "Continuer quand même? (y/N)"
    if ($continue -ne "y" -and $continue -ne "Y") {
        exit 1
    }
}

# Vérifier la connexion SSH
Log-Info "Test de la connexion SSH vers ${VPS_USER}@${VPS_HOST}:${VPS_PORT}..."
try {
    if (!$DryRun) {
        $null = ssh -p $VPS_PORT -o ConnectTimeout=10 "$VPS_USER@$VPS_HOST" "echo Connected" 2>$null
        if ($LASTEXITCODE -ne 0) { throw }
    }
    Log-Success "Connexion SSH OK"
} catch {
    Log-Error "Impossible de se connecter au VPS. Vérifiez vos credentials SSH."
    exit 1
}

# =============================================================================
# 2. Build local (optionnel)
# =============================================================================

if (!$SkipBuild) {
    Log-Info "Build de l'application en local..."
    Run-Command "npm ci"
    Run-Command "npm run build"
    Log-Success "Build local terminé"
} else {
    Log-Warning "Build local ignoré (SkipBuild activé)"
}

# =============================================================================
# 3. Déploiement sur le VPS
# =============================================================================

Log-Info "Déploiement sur le VPS $VPS_HOST..."

# Script de déploiement à exécuter sur le VPS
$DEPLOY_SCRIPT = @"
set -e

APP_DIR="$APP_DIR"

echo "📦 Déploiement dans `$APP_DIR..."

# Créer le répertoire si nécessaire
if [ ! -d "`$APP_DIR" ]; then
  echo "➡️  Création du répertoire `$APP_DIR"
  sudo mkdir -p "`$APP_DIR"
  sudo chown -R `$USER:`$USER "`$APP_DIR"
fi

cd "`$APP_DIR"

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
"@

if ($DryRun) {
    Log-Warning "Mode DRY-RUN: Les commandes SSH ne seront pas exécutées"
    Write-Host $DEPLOY_SCRIPT
} else {
    $DEPLOY_SCRIPT | ssh -p $VPS_PORT "$VPS_USER@$VPS_HOST" "bash -s"
}

# =============================================================================
# 4. Vérification post-déploiement
# =============================================================================

Log-Info "Vérification du déploiement..."

if (!$DryRun) {
    # Vérifier le statut PM2
    Log-Info "Statut PM2:"
    ssh -p $VPS_PORT "$VPS_USER@$VPS_HOST" "pm2 list"
    
    # Vérifier que le site répond
    Log-Info "Test de connectivité HTTP..."
    try {
        $response = Invoke-WebRequest -Uri "http://$VPS_HOST" -UseBasicParsing -MaximumRedirection 0 -ErrorAction SilentlyContinue
        if ($response.StatusCode -in @(200, 301, 302)) {
            Log-Success "Le site répond correctement!"
        }
    } catch {
        if ($_.Exception.Response.StatusCode.value__ -in @(301, 302)) {
            Log-Success "Le site répond correctement (redirection)!"
        } else {
            Log-Warning "Le site ne répond pas comme attendu. Vérifiez les logs."
        }
    }
}

# =============================================================================
# 5. Récapitulatif
# =============================================================================

Write-Host ""
Write-Host "=========================================" -ForegroundColor Green
Log-Success "Déploiement terminé!"
Write-Host "=========================================" -ForegroundColor Green
Write-Host ""
Write-Host "🌐 Site: https://clixite.be"
Write-Host "📊 Vérifier les logs: ssh $VPS_USER@$VPS_HOST 'pm2 logs clixite-website'"
Write-Host "🔄 Redémarrer: ssh $VPS_USER@$VPS_HOST 'pm2 restart clixite-website'"
Write-Host ""

# Commands utiles
Write-Host @"
Commands utiles:
  
  # Se connecter au VPS
  ssh -p $VPS_PORT $VPS_USER@$VPS_HOST
  
  # Voir les logs PM2
  ssh $VPS_USER@$VPS_HOST "pm2 logs clixite-website --lines 100"
  
  # Voir le statut PM2
  ssh $VPS_USER@$VPS_HOST "pm2 status"
  
  # Redémarrer l'application
  ssh $VPS_USER@$VPS_HOST "pm2 restart clixite-website"
  
  # Voir les logs Nginx
  ssh $VPS_USER@$VPS_HOST "sudo tail -f /var/log/nginx/clixite.be.access.log"

"@
