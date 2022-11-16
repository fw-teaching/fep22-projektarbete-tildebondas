document.querySelector("#buttonBack").addEventListener('click', function (evt) {
    window.open("../homepage/index.html", "_self")
});

const timerGet = new Date();

weekday = localStorage.getItem("weekday");
document.getElementById("weekday").value = weekday;
console.log(weekday)

//Räknar hur många dagar tills nästa måndag. Ifall lördag blir 2, ifall söndag blir 1
const nextMonday = ((1 + 7 - weekday) % 7);

function timerOpen() {
    let cH = timerGet.getHours();
    let cM = timerGet.getMinutes();
    let cS = timerGet.getSeconds();

    let h = nextMonday * 24 - cH;
    let m = 60 - cM;
    let s = 60 - cS;

    let output = `${h}h ${m}m ${s}s until casino opens`

    document.querySelector("#timeLeft").innerText = output;
}

setInterval(timerOpen, 1000)