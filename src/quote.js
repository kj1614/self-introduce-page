const quote = document.querySelector(".quote_quote");
const person = document.querySelector(".quote_name");
const img = document.querySelector(".quote_img");
const box = document.getElementById("quote");

const qouteLi = [
    "\“Where the way is hardest, there go thou; Follow your own path and let people talk.\”",
    "\“Growth is uncomfortable. Because you've never been here before\”",
    "\“그대의 자질은 아름답다. 그런 자질을 가지고 아무것도 않겠다 해도 내 뭐라 할 수 없지만, 그대가 만약 온 마음과 힘을 다해 노력한다면 무슨일인들 해내지 못하겠는가.\”"
]

const personLi = [
    "Dante Alighieri",
    "Kristin Lohr",
    "세종 22년, 7월 21일"
]

function paintQuote(num)
{
    quote.innerText = qouteLi[num];
    person.innerText = personLi[num];
    img.src = `imgs/${num}.png`;
}

function nextQuote()
{
    const src = JSON.stringify(img.src);

    if (src.includes("imgs/2.png"))
        paintQuote(0);
    else if (src.includes("imgs/0.png"))
        paintQuote(1);
    else
        paintQuote(2);
    }

function init()
{
    box.addEventListener("click", nextQuote);
}

init();