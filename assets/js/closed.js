document.querySelector("#buttonBack").addEventListener('click', function (evt) {
    window.open("../homepage/index.html", "_self")
});

const timerGet = new Date();

weekday = localStorage.getItem("weekday");
document.getElementById("weekday").value = weekday;
console.log(weekday)

//Räknar hur många dagar tills nästa måndag. Ifall lördag blir 2, ifall söndag blir 1
const nextMonday = ((1 + 7 - weekday) % 7);
timerOpen();

function timerOpen() {
    console.log("timerOpen");
    let h = timerGet.getHours();
    let m = timerGet.getMinutes();
    let s = timerGet.getSeconds();

    h = nextMonday * 24 - h;
    m = 60 - m;
    s = 60 - s;

    let output = `${h}h ${m}m ${s}s until opening`

    document.querySelector("#timeLeft").innerText = output;
}

setInterval(timerOpen, 1000);