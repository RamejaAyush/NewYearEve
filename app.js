// selecting the elements

const daysEL = document.querySelector('#days')
const hoursEL = document.querySelector('#hours')
const minsEL = document.querySelector('#minutes')
const secsEL = document.querySelector('#sec')

// new Year date
const newYears = '1 Jan 2022'

// function
function countdown() {
  const newYearsDate = new Date(newYears)
  const currentDate = new Date()

  const totalSeconds = (newYearsDate - currentDate) / 1000

  const days = Math.floor(totalSeconds / 3600 / 24)
  const hours = Math.floor(totalSeconds / 3600) % 24
  const mins = Math.floor(totalSeconds / 60) % 60
  const seconds = Math.floor(totalSeconds) % 60

  daysEL.innerHTML = formatTime(days)
  hoursEL.innerHTML = formatTime(hours)
  minsEL.innerHTML = formatTime(mins)
  secsEL.innerHTML = formatTime(seconds)
}

// format the time if time is less than 10

function formatTime(time) {
  if (time < 10) {
    return `0${time}`
  } else {
    return time
  }
}

// calling function
countdown()

// setting the interval so that time can update dynamically
setInterval(countdown, 1000)
