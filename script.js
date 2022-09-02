// declarations
const displayClock = document.querySelector('#currentClock')
const displayDate = document.querySelector('#currentDate')
const displayValue = document.querySelector('.display-content')
let numInput
let operationInput
let numValues = []
const operations = {
  sum: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
  negative: (a) => a * -1
}
const operationDisplay = {
  sum: '+',
  subtract: '-',
  multiply: 'x',
  divide: '/',
  point: ','
}
// const result = operations[operationInput](a, b)

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

// operations events
function setOperators() {
  const operationBtns = document.querySelectorAll('.operators')
  operationBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const operationValue = btn.id.replace('btn-', '')
      operationInput = operationValue.replace('undefined', '')
      displayValue.innerHTML += operationDisplay[operationInput]
      numValues.push(Number(numInput))
      console.log(numValues[numValues['length'] - 1])
      console.log(operationInput)
    })
  })
}

function result() {
  if (numValues['length'] == 2) {
    const result = operations[operationInput](numValues[0], numValues['length'] - 1)
    numInput = result
    displayValue.innerHTML = result
    numValues = []
  }
}

// keyboard settings
function setDisplayContent() {
  const numBtns = document.querySelectorAll('.numbers')
  numBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const btnValue = btn.id.replace('btn-', '')
      numInput += btnValue
      numInput = numInput.replace('undefined', '')
      displayValue.innerHTML = numInput
    })
  })
}


// set operations
result()
setOperators()
setDisplayContent()