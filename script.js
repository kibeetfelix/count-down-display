const dayEl = document.getElementById("day")
const hourEl = document.getElementById("hour")
const minuteEl = document.getElementById("minute")
const secondEl = document.getElementById("second")

const newYearTime = new Date("Jan 1, 2023 00:00:00").getTime()

updateCountdown()

function updateCountdown() {
    const now = new Date().getTime();
    const gap = newYearTime - now


}