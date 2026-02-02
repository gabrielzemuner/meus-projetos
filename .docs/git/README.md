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