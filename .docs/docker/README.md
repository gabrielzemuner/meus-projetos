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

# Comando para copiar pasta do windows para o linux (sem node_modules, vendor e git)
rsync -av --exclude 'node_modules' --exclude 'vendor' --exclude '.git' --exclude '.next' /mnt/d/programacao/meus-projetos/ ~/meus-projetos/
```
