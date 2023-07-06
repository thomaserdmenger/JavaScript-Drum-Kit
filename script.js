const keyArr = document.querySelectorAll('.key')

// Scale and style key on keydown
document.addEventListener('keydown', e => {
  if (e.code == 'KeyA') {
    keyArr[0].classList.add('keydown')
  }
})

// Reset key on keyup
document.addEventListener('keyup', e => {
  if (e.code == 'KeyA') {
    keyArr[0].classList.remove('keydown')
  }
})
