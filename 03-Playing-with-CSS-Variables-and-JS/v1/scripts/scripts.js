const inputs = document.querySelectorAll('.controls input')

inputs.forEach((input) => {
  input.addEventListener('mousemove', update)
  input.addEventListener('change', update)
})

function update () {
  const suffix = this.dataset.sizing || ''
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}
