# Configuração inicial do ambiente (fazer apenas uma vez)

## 1. Mover o WSL para o D:
```powershell
# No PowerShell (como administrador)
wsl --unregister Ubuntu
mkdir D:\wsl\Ubuntu
wsl --install Ubuntu --location D:\wsl\Ubuntu
wsl --set-default Ubuntu
```

## 2. Configurar o WSL
```bash
# Instalar PHP (necessário para rodar sail:install)
sudo apt update
sudo apt install software-properties-common -y
sudo add-apt-repository ppa:ondrej/php
sudo apt update
sudo apt install php8.4 php8.4-cli php8.4-xml php8.4-mbstring php8.4-curl php8.4-zip php8.4-mysql unzip curl git -y

# Instalar Node.js
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs

# Instalar pnpm
sudo corepack enable
corepack prepare pnpm@10.28.2 --activate

# Configurar Git
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"

# Configurar acesso github para fazer push
sudo apt install gh -y
gh auth login
```

## 3. Clonar o projeto do GitHub
```bash
cd ~
git clone https://github.com/seu-user/meus-projetos.git
```

## 4. Instalar dependências Node (projetos React, Next etc.)
```bash
cd ~/meus-projetos
pnpm install
```

## 5. Configurar projeto Laravel com Docker
```bash
cd ~/meus-projetos/apps-laravel/docker/laravel-inertia-react

# Criar pastas necessárias
mkdir -p bootstrap/cache
chmod 775 bootstrap/cache
mkdir -p storage/framework/{cache,sessions,views}

# Instalar dependências PHP (única vez, para criar o vendor)
composer install

# Configurar Sail e ambiente
php artisan sail:install        # escolher PostgreSQL
cp .env.example .env
php artisan key:generate


# Configurar alias do Sail
echo "alias sail='./vendor/bin/sail'" >> ~/.bashrc
source ~/.bashrc

# Subir o Docker
sail build
sail up -d

# Configurar banco e frontend
sail artisan migrate
sail npm install
sail npm run dev
```

# Comandos do dia a dia

## Iniciar o ambiente
```bash
cd ~/meus-projetos/apps-laravel/docker/laravel-inertia-react
sail up -d
sail npm run dev
```

## Parar o ambiente
```bash
sail down
```

## Abrir no VSCode
```bash
cd ~/meus-projetos
code .
```

## Comandos úteis
```bash
sail artisan migrate            # rodar migrations
sail artisan make:controller X  # criar controller
sail composer require pacote    # instalar pacote PHP
sail npm install pacote         # instalar pacote Node
sail shell                      # entrar no container
sail down -v                    # parar e apagar volumes (reseta banco)
```

## Mudar terminal padrão no VS CODE (WSL)

`Ctrl+Shift+P` -> "Terminal: Select Default Profile"