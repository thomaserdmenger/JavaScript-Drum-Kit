const keyArr = document.querySelectorAll('.key')

const clap = document.querySelector('[clap]')
const hihat = document.querySelector('[hihat]')
const kick = document.querySelector('[kick]')
const openhat = document.querySelector('[openhat]')
const boom = document.querySelector('[boom]')
const ride = document.querySelector('[ride]')
const snare = document.querySelector('[snare]')
const tom = document.querySelector('[tom]')
const tink = document.querySelector('[tink]')

// Scale and style key on keydown
document.addEventListener('keydown', e => {
  console.log(e.keyCode)
  if (e.code == 'KeyA') {
    keyArr[0].classList.add('keydown')
    clap.play()
  } else if (e.code == 'KeyS') {
    keyArr[1].classList.add('keydown')
    hihat.play()
  } else if (e.code == 'KeyD') {
    keyArr[2].classList.add('keydown')
    kick.play()
  } else if (e.code == 'KeyF') {
    keyArr[3].classList.add('keydown')
    openhat.play()
  } else if (e.code == 'KeyG') {
    keyArr[4].classList.add('keydown')
    boom.play()
  } else if (e.code == 'KeyH') {
    keyArr[5].classList.add('keydown')
    ride.play()
  } else if (e.code == 'KeyJ') {
    keyArr[6].classList.add('keydown')
    snare.play()
  } else if (e.code == 'KeyK') {
    keyArr[7].classList.add('keydown')
    tom.play()
  } else if (e.code == 'KeyL') {
    keyArr[8].classList.add('keydown')
    tink.play()
  }
})

// Reset key on keyup
document.addEventListener('keyup', e => {
  if (e.code == 'KeyA') {
    keyArr[0].classList.remove('keydown')
  } else if (e.code == 'KeyS') {
    keyArr[1].classList.remove('keydown')
  } else if (e.code == 'KeyD') {
    keyArr[2].classList.remove('keydown')
  } else if (e.code == 'KeyF') {
    keyArr[3].classList.remove('keydown')
  } else if (e.code == 'KeyG') {
    keyArr[4].classList.remove('keydown')
  } else if (e.code == 'KeyH') {
    keyArr[5].classList.remove('keydown')
  } else if (e.code == 'KeyJ') {
    keyArr[6].classList.remove('keydown')
  } else if (e.code == 'KeyK') {
    keyArr[7].classList.remove('keydown')
  } else if (e.code == 'KeyL') {
    keyArr[8].classList.remove('keydown')
  }
  clap.currentTime = 0
})
