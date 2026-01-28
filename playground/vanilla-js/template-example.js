const c = 'template-example'

import './hello-world.js'

$(c => {
  c.html`
    <h1>Component:</h1>
    <hello-world></hello-world>
  `
},c)