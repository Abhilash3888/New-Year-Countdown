const daysEl = document.getElementById("days");
const hourEl = document.getElementById("hours");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");

const newYearTime = new Date("Jan 1,2024 00:00:00").getTime();

function setDate() {

    const currentTime = new Date().getTime();
    const gap = newYearTime - currentTime;
    console.log(gap);
    const SECOND = 1000;
    const MINUTE = SECOND * 60;
    const HOUR = MINUTE * 60;
    const DAY = HOUR * 24;

    const remDays = Math.floor(gap / DAY);
    const remHours = Math.floor((gap % DAY) / HOUR);
    const remMinutes = Math.floor((gap % HOUR) / MINUTE);
    const remSeconds = Math.floor((gap % MINUTE) / SECOND);

    daysEl.innerText = remDays;
    hourEl.innerText = remHours;
    minuteEl.innerText = remMinutes;
    secondEl.innerText = remSeconds;

}

setInterval(setDate, 1000);