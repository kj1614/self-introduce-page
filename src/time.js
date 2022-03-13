const  timeDate = document.querySelector(".time_date");
const  timeDay = document.querySelector(".time_day");

function setDay()
{
    const date = new Date();
    const day = date.getDay();
    const week = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
    const whatday = week[day];
    timeDay.innerText = `${whatday}`;
}

function setDateTime()
{
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const days = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    timeDate.innerText =
    `${year}.${
        month < 10 ? `0${month}` : month}.${
        days < 10 ? `0${days}` : days} ${
        hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}`;
}

function init()
{
    setDay();
    setDateTime();
    setInterval(setDateTime, 1000);
}

init();