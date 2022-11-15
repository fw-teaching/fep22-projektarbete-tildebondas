document.querySelector("#buttonBack").addEventListener('click', function (evt) {
    window.open("../homepage/index.html", "_self")
});

//Räknar hur länge tills casino öppnar
weekday = document.querySelector('#weekday').value;
if (weekday == 6) {
    let hh = 48;
    let mm = 0;
    let ss = 0;
}

if (weekday == 0) {
    let hh = 24;
    let mm = 0;
    let ss = 0;
}
function timeLeft() {
    --ss
    if (ss < 0 && mm < 0 && hh < 0) {
        window.open("../homepage/index.html", "_self")
    }

    else if (ss < 0 && (hh != 0 || hh < 0)) {
        --mm
        ss = 59
        if (mm < 0) {
            mm = 59
            --hh
        }
    }
}
