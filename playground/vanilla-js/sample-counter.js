// const c = 'sample-counter'

let count = $(0)

$(c => {
  c.html`
    <button class="decrement">-</button>
    <span>${count()}</span>
    <button class="increment">+</button>
  `

  c.onclick = e => {
    e.target.classList.contains('decrement') && count(count() - 1)
    e.target.classList.contains('increment') && count(count() + 1)
  }
}, 'sample-counter')