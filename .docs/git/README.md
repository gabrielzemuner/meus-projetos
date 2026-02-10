## Como escrever mensagens de commit (bem prático)

Um padrão ótimo e simples é o Conventional Commits:

#### Formato: 
`tipo: resumo curto`

Tipos comuns:
- `feat:` nova funcionalidade
- `fix:` correção de bug
- `chore:` tarefas/infra/organização (scripts, configs)
- `refactor:` refatoração sem mudar comportamento
- `docs:` documentação

Exemplos pro seu caso:

- fix: create Laravel cache directories before composer install
- fix: make reminders.message nullable


## Verificar top 10 arquivos por tamanho

- obs: executar comando abaixo no Git Bash

```bash
git ls-tree -r --long -t HEAD | sort -k 4 -n -r | head -n 10
```

## Verificar tamanho do repositório local 

- obs: `size-pack` mostra o tamanho total em disco do repositório compactado

```bash
git count-objects -vH
```

- vai retornar algo como:

```
$ git count-objects -vH
count: 1752
size: 47.00 MiB
in-pack: 135
packs: 1
size-pack: 387.40 KiB
prune-packable: 20
garbage: 0
size-garbage: 0 bytes
```