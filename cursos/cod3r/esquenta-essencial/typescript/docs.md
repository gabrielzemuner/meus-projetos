- obs: foi necessário executar npm init -y (package.json), instalar typescript, ts-node, executar npx tsc --init (criar arquivo tsconfig.json)  e configurar arquivo settings.json na raiz do projeto no vscode. Ex: estudos/.vscode

- instalação arquivos

```
npm init -y
npm i -D typescript
npm i -D ts-node
npx tsc -init
```

- config arquivo .vscode/settings.json

```json
{
  "code-runner.executorMap": {
    "typescript": "npx ts-node"
  }
}
```
