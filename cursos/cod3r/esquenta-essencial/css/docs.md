## Display

### Inline

- os elementos ficam lado a lado e ocupam apenas o espaço de seu conteúdo

- width e height são ignorados

### Block

- os elementos ocupam a linha toda

- width e height são considerados

### Inline-Block

- é uma mistura do inline e do block

- os elementos ficam lado a lado mas podem ter largura e altura definidas

### Flexbox 

- organização dos elementos através do eixo principal e eixo secundário

- precisamos avaliar elemento pai e elemento filho

- obs: ao organizar elementos flex, verificar se altura está definida, pois em muitos casos não haverá diferença visual caso a altura não esteja definida, por ex:

```css
div {
    /* obs: sem altura, o efeito desejado (alinhar o conteúdo no centro da tela) não irá acontecer, pois não existe altura definida */
    /* height: 100%  */ 
    display: flex;
    flex-direction: column;
    justify-content: end;
}
```

- propriedades mais usadas:


```css
div {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
```

## Responsividade

- estilizações aplicadas dentro de media queries tem preferência sobre o código css "normal", por conta de especificidade

- `@media (se expressão for verdadeira) {...}`

```css

/* a partir de 600px aplique essa lógica */
@media (min-width: 600px) {
    div {
        background-color: red;
    }
}

/* até 400px aplique essa lógica */
@media (max-width: 400px) {
    div {
        background-color: blue;
    }
}
```