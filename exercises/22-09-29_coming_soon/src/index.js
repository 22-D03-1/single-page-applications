import moment from "moment"

setInterval(() => {
const now = moment()
const christmas = moment("2022-12-24 20:00")

const difference = moment.duration(christmas.diff(now));

document.querySelector("#months").innerText = difference.months()
document.querySelector("#days").innerText = difference.days()
document.querySelector("#hours").innerText = difference.hours()
document.querySelector("#minutes").innerText = difference.minutes()
document.querySelector("#seconds").innerText = difference.seconds()
}, 1000)