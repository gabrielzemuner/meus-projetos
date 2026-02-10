- Dica: pra não ficar digitando `./vendor/bin/sail` toda hora, crie um alias no WSL:

```bash
echo "alias sail='./vendor/bin/sail'" >> ~/.bashrc
source ~/.bashrc
```

- Por padrão o WSL armazena tudo no C:. Mas você pode mover o WSL para o D:.

- Mover o WSL para o D:
```powershell
# No PowerShell (como administrador)

# 1. Remove a distro atual (sem backup)
wsl --unregister Ubuntu

# 2. Cria a pasta no D:
mkdir D:\wsl\Ubuntu

# 3. Reinstala o Ubuntu direto no D:
wsl --install Ubuntu --location D:\wsl\Ubuntu

# 4. Mudar distro padrão (necessário para abrir o WSL sempre no Ubuntu)
wsl --set-default Ubuntu

# Comando pra verificar Ubuntu instalado
wsl --list
```

```bash wsl
# Comando para copiar pasta do windows para o linux (sem node_modules, vendor e git)
rsync -av --exclude 'node_modules' --exclude 'vendor' --exclude '.git' --exclude '.next' /mnt/d/programacao/meus-projetos/ ~/meus-projetos/
```

# Comandos úteis WSL

- remover pasta 

```bash wsl
rm -rf ~/meus-projetos
```

- acessar raiz

```bash wsl
cd ~
```

# Instalar Node.js no WSL

```bash wsl
# instalação node
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs

# verificar se node foi instalado
node -v

# instalação pnpm
sudo corepack enable
corepack prepare pnpm@10.28.2 --activate

pnpm install
```

# Copiar um projeto do github para WSL

```bash wsl
cd ~
git clone https://github.com/seu-user/meus-projetos.git

cd ~/meus-projetos
pnpm install                    # instala node_modules de todos os projetos Node

cd ~/meus-projetos/apps-laravel/docker/laravel-inertia-react
sail up -d
sail composer install           # instala o vendor
sail npm install                # instala node_modules
sail npm run dev
```

# Abrir arquivos do WSL no editor de código (IDE)

```bash wsl
cd ~/meus-projetos
code .
```