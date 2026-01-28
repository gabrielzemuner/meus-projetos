pnpm --filter . install -> vai instalar as dependências apenas na raiz (similar a um npm install na raiz)

pnpm install -> vai instalar as dependências de todos os projetos

## Opções pra rodar pnpm dev (similar a npm run dev)

No package.json do estudocs, garanta um nome único, tipo:

```json
{ "name": "estudocs" }
```

Aí você roda a partir da raiz:

```bash
pnpm --filter estudocs dev
```

Ou simplesmente dentro da pasta rodar:

```bash
pnpm dev
```