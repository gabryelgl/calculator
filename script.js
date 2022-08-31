// settings of display time
const displayClock = document.querySelector('#currentClock')
const displayDate = document.querySelector('#currentDate')

function displayDateTime() {
  setDisplayDateTime()
  setInterval(() => {
    setDisplayDateTime()
  }, 1000)
}

function setDisplayDateTime() {
  const currentTime = new Date()
  const time = currentTime.toLocaleTimeString('pt-BR')
  displayClock.innerHTML = time
  const date = currentTime.toLocaleDateString('pt-BR')
  displayDate.innerHTML = date
}

displayDateTime()