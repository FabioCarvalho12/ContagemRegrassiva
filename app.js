const secondsContainer = document.querySelector('#seconds')
const minutesContainer = document.querySelector('#minutes')
const hoursContainer = document.querySelector('#hours')
const daysContainer = document.querySelector('#days')
const nextYear = new Date().getFullYear() + 1
const newYaerTime = new Date(`January 01 ${nextYear} 00:00:00`)
const nextYearContainer = document.querySelector('#year')
const spinnerLoading = document.querySelector('#loading')
const countdownContainer = document.querySelector('#countdown')

nextYearContainer.textContent = nextYear

const getTimeUnit = unit => unit < 10 ? '0' + unit : unit

const insertCountDownValues = ({days, hours, minutes, seconds }) => {
    secondsContainer.textContent = getTimeUnit(seconds)
    minutesContainer.textContent = getTimeUnit(minutes)
    hoursContainer.textContent = getTimeUnit(hours)
    daysContainer.textContent = getTimeUnit(days)
}
const updateCountdown = () => {
    const currentTime = new Date()
    const difference = newYaerTime - currentTime
    console.log(difference)
    const days = Math.floor(difference / 1000 / 60 / 60 / 24)
    const hours = Math.floor(difference / 1000 / 60 / 60 ) % 24
    const minutes = Math.floor(difference / 1000 / 60 ) % 60
    const seconds = Math.floor(difference / 1000  ) % 60

    insertCountDownValues({days, hours, minutes, seconds})
}

const handleCountdownnDisplay = () => {
spinnerLoading.remove()
countdownContainer.style.display = 'flex'
}

setTimeout( handleCountdownnDisplay, 1000)

setInterval(updateCountdown,1000)

