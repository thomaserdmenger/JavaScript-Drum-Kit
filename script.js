const keyArr = document.querySelectorAll('.key')

// Scale and style key on keydown
document.addEventListener('keydown', e => {
  if (e.code == 'KeyA') {
    keyArr[0].classList.add('keydown')
  } else if (e.code == 'KeyS') {
    keyArr[1].classList.add('keydown')
  } else if (e.code == 'KeyD') {
    keyArr[2].classList.add('keydown')
  } else if (e.code == 'KeyF') {
    keyArr[3].classList.add('keydown')
  } else if (e.code == 'KeyG') {
    keyArr[4].classList.add('keydown')
  } else if (e.code == 'KeyH') {
    keyArr[5].classList.add('keydown')
  } else if (e.code == 'KeyJ') {
    keyArr[6].classList.add('keydown')
  } else if (e.code == 'KeyK') {
    keyArr[7].classList.add('keydown')
  } else if (e.code == 'KeyL') {
    keyArr[8].classList.add('keydown')
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
})
