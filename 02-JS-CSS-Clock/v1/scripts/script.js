const secondHand = document.getElementsByClassName('second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')
console.log('====================================')
console.log(secondHand)
console.log('====================================')

function setDate () {
  const now = new Date()
  const seconds = now.getSeconds()
  const min = now.getMinutes()
  const hour = now.getHours()
  const secondsDegrees = (seconds / 60) * 360 + 90
  const minDegrees = (min / 60) * 360 + 90
  const hourDegrees = (hour / 12) * 360 + 90
  secondHand[0].style.transform = `rotate(${secondsDegrees}deg)`
  minHand.style.transform = `rotate(${minDegrees}deg)`
  hourHand.style.transform = `rotate(${hourDegrees}deg)`
}
setInterval(setDate, 1000)
