// declarations
const displayClock = document.querySelector('#currentClock')
const displayDate = document.querySelector('#currentDate')
const displayContent = document.querySelector('.display-content')
const keyNum = document.querySelectorAll('.numbers')
const keyOperators = document.querySelectorAll('.operators')
const equal = document.querySelector('#btn-equal')
const ac = document.querySelector('#btn-ac')
const point = document.querySelector('#btn-point')
const operatorsSimbols = {
  sum: '+',
  subtract: '-',
  multiply: '*',
  divide: '/',
  point: '.'
}

// display time settings
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

// operations
function keySettings() {
  keyNum.forEach(key => {
    const numValue = key.id.replace('btn-', '')
    key.addEventListener('click', () => {
      displayContent.innerHTML += numValue
    })
  })
  keyOperators.forEach(key => {
    const operatorsValue = key.id.replace('btn-', '')
    key.addEventListener('click', () => {
      displayContent.innerHTML += operatorsSimbols[operatorsValue]
    })
  })
  point.addEventListener('click', () => {
    displayContent.innerHTML += '.'
  })
  ac.addEventListener('click', () => {
    displayContent.innerHTML = ''
  })
  equal.addEventListener('click', () => {
    displayContent.innerHTML = eval(displayContent.textContent)
  })
}
keySettings()