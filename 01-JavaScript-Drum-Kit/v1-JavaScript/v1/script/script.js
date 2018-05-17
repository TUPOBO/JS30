window.addEventListener('keydown', playSound)

function playSound (e) {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`)
  const key = document.querySelector(`.key[data-key='${e.keyCode}']`)
  if (audio) {
    audio.currentTime = 0 // rewind to the start
    audio.play()
    key.classList.add('playing')
  }
}

const keys = document.querySelectorAll('.key')

keys.forEach((key) => {
  key.addEventListener('transitionend', deleteClass)
})

function deleteClass (e) {
  if (e.propertyName === 'transform') {
    this.classList.remove('playing')
  }// stop it if it's not a transform
}
