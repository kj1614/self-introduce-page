/*
"Growth is uncomfortable. Because you've never been here before"
"kristin Lohr"
*/

const quote = document.querySelector(".quote_quote");
const person = document.querySelector(".quote_name");
const img = document.querySelector(".quote_img");

const qouteLi = [
    "\“Where the way is hardest, there go thou; Follow your own path and let people talk.\”",
    "\“Growth is uncomfortable. Because you've never been here before\”"
]

const personLi = [
    "Dante Alighieri",
    "Kristin Lohr"
]

const LI_LENGTH = qouteLi.length;

function genRandom()
{
    const number = Math.floor(Math.random() * LI_LENGTH);
    return number;
}

function paintQuote(randomNumber)
{
    quote.innerText = qouteLi[randomNumber];
    person.innerText = personLi[randomNumber];
    img.src = `imgs/${randomNumber}.png`;
}

function init()
{
    const randomNumber = genRandom();
    paintQuote(randomNumber);
}

init();