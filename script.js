// add audio and style to keydown event
function playSound(e) {
  const key = e.keyCode
  const audio = document.querySelector(`audio[data-key='${key}']`)
  const div = document.querySelector(`div[data-key='${key}']`)

  if (!audio) {
    return // stops the function from running all together
  } else {
    audio.currentTime = 0 // rewind audo to the start
    audio.play()
    div.classList.add('keydown')
  }
}

// remove style when event ends
function removeStyle(e) {
  const key = e.keyCode
  const audio = document.querySelector(`audio[data-key='${key}']`)
  const div = document.querySelector(`div[data-key='${key}']`)

  if (!audio) {
    return // stops the function from running all together
  } else {
    div.classList.remove('keydown')
  }
}

// event listeners
document.addEventListener('keydown', playSound)
document.addEventListener('keyup', removeStyle)
