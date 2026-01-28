const c = 'styles-example'

$(c => {
  const isActive = true
  const activeColor = 'blue'

  c.html`
    <style>
      styles-example .title {
        color: orange;
      }
      styles-example .active {
        font-weight: bold;
      }
    </style>

    <h1 class="title">I have class</h1>
    <button style="font-size: 3rem;">I have style</button>
    <div 
      class="${isActive ? 'active' : ''}" 
      style="background-color: ${activeColor}"
    >I have dynamic class and style</div>
  `
},c)