const c = 'conditionals-example'

$(c => {
  const color = 'orange'

  c.html`
    ${color === 'red' ? `<p>Red</p>` : ''}
    ${color === 'green' ? `<p>Green</p>` : ''}
    ${color === 'blue' ? `<p>Blue</p>` : ''}
    ${!(color === 'red' || color === 'green' || color === 'blue') ? 
      `<p>Another color</p>`
    : ''}

    <p>${ 
      color === 'cyan' ? 'Cyan' :
      color === 'magenta' ? 'Magenta' :
      color === 'yellow' ? 'Yellow' :
      'Maybe orange'
    }</p>
  `
},c)