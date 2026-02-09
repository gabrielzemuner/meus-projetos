## Requisitos

* Docker - Conferir a instalação no PowerShell: docker --version
* Git - Conferir a instalação: git --version
* Composer - Conferir a instalação: composer --version
* Node.js - Conferir a instalação: node -v

## Como rodar o projeto baixado

- Baixar o projeto do servidor de versionamento (GitHub).
Baixar os arquivos do GitHub.
```
git clone <repositorio_url> .
```
```
git clone https://github.com/celkecursos/meu-projeto-laravel-docker.git .
```

- Duplicar o arquivo ".env.example" e renomear para ".env".

Instalar as dependências do PHP
```
composer install
```

Instalar todas as dependências indicadas pelo package.json.
```
npm install
```

Gerar a chave para o arquivo .env.
```
php artisan key:generate
```

- Acessar WSL.
- PHP - Necessário PHP 8.4 ou superior: php -v

Acessar o diretório que será criado o projeto "c:/xampp/htdocs/celke/meu-projeto-docker-baixado". /mnt/c → é onde o WSL monta o disco C: do Windows. /mnt/c/xampp/htdocs/celke → equivale a C:\xampp/htdocs/celke.
```
cd /mnt/c/xampp/htdocs/celke/meu-projeto-docker-baixado
```

Criar os containers com Laravel e MySQL.
```
./vendor/bin/sail up -d
```

Rodar a migrate para criar a base de dados e as tabelas.
```
./vendor/bin/sail artisan migrate
```

Rodar as seedeers para cadastrar registro de teste.
```
./vendor/bin/sail artisan db:seed
```

Acessar a aplicação no navegador.
```
http://127.0.0.1
```

## Criar o projeto com Laravel no PC e criar o container no Docker

- Acessar o prompt de comando ou o terminal do editor VSCode.

Criar o projeto com Laravel sem instalar o mesmo de forma global no sistema operacional.
```
composer create-project laravel/laravel .
```

Instalar o Sail no projeto existente.
```
composer require laravel/sail --dev
```

- Acessar WSL.

Adicionar o repositório do PHP.
```
sudo apt update
sudo apt install software-properties-common -y
sudo add-apt-repository ppa:ondrej/php
sudo apt update
```

Instalar especificamente o PHP 8.4 e as extensões. Verifique na documentação do Laravel qual versão do PHP é suportado. 
```
sudo apt install php8.4 php8.4-cli php8.4-xml php8.4-mbstring php8.4-curl php8.4-zip php8.4-mysql unzip curl git -y
```

Definir o PHP 8.4 como padrão no sistema.
```
sudo update-alternatives --install /usr/bin/php php /usr/bin/php8.4 1
sudo update-alternatives --set php /usr/bin/php8.4
```

Listar as versões do PHP instaladas.
```
sudo update-alternatives --config php
```

Verificar se o PHP 8.4 está ativo.
```
php -v
```

Acessar o diretório que será criado o projeto "c:/xampp/htdocs/celke/meu-projeto-docker". /mnt/c → é onde o WSL monta o disco C: do Windows. /mnt/c/xampp/htdocs/celke → equivale a C:\xampp/htdocs/celke.
```
cd /mnt/c/xampp/htdocs/celke/meu-projeto-docker
```

Publicar o docker-compose.yml e alterar no arquivo .env as variáveis ​​de ambiente necessárias para se conectar aos serviços do Docker.
```
php artisan sail:install
```

Criar os containers com Laravel e MySQL.
```
./vendor/bin/sail up -d
```

Rodar a migrate para criar a base de dados e as tabelas.
```
./vendor/bin/sail artisan migrate
```

Rodar as seedeers para cadastrar registro de teste.
```
./vendor/bin/sail artisan db:seed
```

Acessar a aplicação no navegador.
```
http://127.0.0.1
```

## Acessar o MySQL do container criado no Docker

Acessar o MySQL do container via Laravel Sail. Caso o usuário "sail" não tenha permissão de acesso é necessário liberar a permissão.
```
./vendor/bin/sail mysql
```

Listar as base de dados.
```
SHOW DATABASES;
```

Acessar a base de dados. Nome da base de dados definida no arquivo ".env".
```
USE laravel;
```

Listar as tabelas.
```
SHOW TABLES;
```

Listar os usuários cadastrados na tabela "users".
```
SELECT * FROM users;
```

Sair do MySQL.
```
CTRL + D
```

## Liberar permissão de acesso ao banco de dados para o usuário sail.

Descobrir o nome do container MySQL.
```
docker ps
```

Acessar o container MySQL.
```
docker exec -it meu-projeto-docker-mysql-1 bash	
```

Acessar o MySQL do container.
```
mysql -u root -p
```

- Digitar a senha: password

Criar ou garantir acesso ao banco laravel com "sail".
```
CREATE DATABASE IF NOT EXISTS laravel;
GRANT ALL PRIVILEGES ON laravel.* TO 'sail'@'%';
FLUSH PRIVILEGES;
```

## Como enviar o projeto para o GitHub.

Inicializar um novo repositorio GIT.
```
git init
```

Adicionar todos os arquivos modificados na área de preparação.
```
git add .
```

Verificar em qual branch está.
```
git branch
```

Renomear a branch atual no GIT para main.
```
git branch -M main
```

Commit registra as alterações feitas nos arquivos que foram adicionados na área de preparação.
```
git commit -m "Base do projeto"
```

Adicionar um repositório remoto ao repositório local.
```
git remote add origin https://github.com/celkecursos/meu-projeto-laravel-docker.git
```

Enviar os commits locais para um repositório remoto.
```
git push -u origin main
```