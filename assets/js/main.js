/* Site-wide JS i den här filen (t.ex. huvudmenyn) */
console.log("main.js init");

//the function that checks the age and if underage exits the site with a promt
let checkUser = new Boolean;
function ageCheck() {

  let ageCheck = confirm("Do you confirm that you are 18 or older?");
  if (ageCheck) {
    alert("Welcome and have fun!")
    checkUser = true;
    localStorage.setItem('ageCheck', checkUser);


  }
  else {
    alert("Underage gambling is not allowed!")
    checkUser = false;
    localStorage.setItem('ageCheck', checkUser);
    window.close();
  }
}

let amount;

function money() {

  amount = document.getElementById("moneyPlaceholder").value;
  amount = amount.replace(',', '.');
  amount = Number(amount);

  //replaces , wth .

  if (amount >= 1) {
    localStorage.setItem("amount", amount);

    console.log(amount);

    return true;
  }

  else alert("Minimum 1 emerald. Cheapo");
}

//all variables for the codes

let time = null;
let change = null;
let timer = null;
let timeWhen;

let days = null;
let hours = null;
let minutes = null;
let seconds = null;

// -----------------------------------------------------------------------------------------------------


function numberCheck(evt) {
  let check = (evt.which) ? evt.which : evt.keyCode
  if ((check <= 31) || (check >= 48 && check <= 57) || (check === 44) || (check === 46))
    return true;
  return false;
}


//if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
// -----------------------------------------------------------------------------------------------------

//44 AND 46 ASC FOR , AND .
// evt evaluates the first operand. If that evaluation returns true, the second operand is returned. If false, the third is returned.´
// so with this code it first checks if the inputs ASCII code is more than 31 (the base codes) and if true checks if it between 48-57 (the numbers keys)
//and also allows 44 and 46 (, and .) and if these are not true returns false and wont allow the input

if (sessionStorage.getItem('finishedSetup') == "true") {
  timeUpdate();
  countdown(expDate);
  theClock();
  document.querySelector("#hamburger").style.visibility = 'visible';
  document.getElementById("emeraldImage").style.display = 'block'; //Emerald counter
  document.getElementById("moneyNumber").innerText = `${localStorage.getItem('amount')}`;
}

else localStorage.removeItem("expDate");

function timeUpdate() {
  let select = document.getElementById('amountOfTime');
  let option = select.options[select.selectedIndex];

  document.getElementById('value').value = option.value;
  document.getElementById('text').value = option.text;

  change = document.getElementById('value').value = option.value;

  //used to change the value of change into minutues for the time
  if (change == 1) { time = 15; }
  if (change == 2) { time = 30; }
  if (change == 3) { time = 60; }
  if (change == 4) { time = 90; }
  if (change == 5) { time = 120; }
  if (change == 6) { time = 150; }

  if (localStorage.getItem('expDate') == undefined) {
    expDate = new Date(new Date().getTime() + (time * 60 * 1000))
    localStorage.setItem('expDate', expDate);
    console.log("date undefined")
  }
  else {
    expDate = new Date(localStorage.getItem('expDate'))
    console.log("date")
  };
  //let expDate = localStorage.getItem('expDate');
  //starts the timer when the value is given
  if (change != 0) { countdown(expDate); }
  //myDate is the calculations for the current time + the given value

  // document.getElementById("timeEnds").innerHTML = myDate.getHours();
  //gets the information for when the timer ends


  let h = expDate.getHours();
  let m = expDate.getMinutes();
  let s = expDate.getSeconds();

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s; //sätter 0 framför ifall t.ex. 5 sekunder kvar

  document.querySelector("#timeEnds").innerText = `Session ends ${h}:${m}:${s}`;
  //shows when the timer ends
}

function countdown() {

  if (timer != null) {
    clearInterval(timer);
  }//clears if timer is not null
  timer = setInterval(calculate, 1000);

  function calculate() {

    let dateNow = new Date().getTime();
    //gets current date

    timeWhen = expDate - dateNow;
    //timeWhen is when to the countdown is couting towards

    days = Math.floor(timeWhen / (1000 * 60 * 60 * 24));
    hours = Math.floor((timeWhen % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((timeWhen % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((timeWhen % (1000 * 60)) / 1000);

    if (hours <= 0 && minutes <= 0 && seconds <= 0) {
      alert("Times up!")
      clearInterval(timer);
      localStorage.removeItem('expDate');
      sessionStorage.removeItem('finishedSetup')
      window.open("../homepage/index.html", "_self");
    } //alerts when time is up

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds; //sätter 0 framför ifall t.ex. 5 sekunder kvar

    document.getElementById("countdownOut").innerHTML = `${hours}:${minutes}:${seconds}`;
  }

}




function theClock() {
  console.log("theClock()");

  /*const full_date = new Date().toLocaleDateString(); //Date String
  const full_time = new Date().toLocaleTimeString(); // Time String*/
  //Annat sätt att göra allt nedanför

  let date = new Date();
  let day = date.getDate();
  let mo = date.getMonth() + 1;
  let year = date.getFullYear();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  /*
  Sätter 0 framför ifall värdet är under 10
  https://flexiple.com/javascript/javascript-clock/
  */
  hh = (hh < 10) ? "0" + hh : hh;
  mm = (mm < 10) ? "0" + mm : mm;
  ss = (ss < 10) ? "0" + ss : ss;
  day = (day < 10) ? "0" + day : day;
  mo = (mo < 10) ? "0" + mo : mo; //operand,  (condition ? if true : if false);

  let timeOut = `${hh}:${mm}:${ss}`;
  let dateOut = `${day}.${mo}.${year}`

  document.getElementById("clock").innerText = timeOut;
  document.getElementById("date").innerText = dateOut;
  setTimeout(theClock, 1000); //setTimeout eftersom timern är inne i själva funktionen, behöver inte skiljd setInterval för att starta klockan
}


const weekend = new Date();
let weekday;

function theDate() {
  console.log("theDate()")
  weekday = document.querySelector('#weekday').value;
  console.log(weekday);
}

//Checkar ifall weekday har värdet veckoslut
function isWeekend() {
  if (weekday == 0 || weekday == 6) return true;
}

//Checkar varje sekund om det är veckoslut
const closeWeekendTimer = setInterval(closeWeekend, 1000);

//Stänger sidan ifall veckoslut
function closeWeekend() {
  if (isWeekend() == true) {
    sessionStorage.setItem("weekday", weekday);
    clearInterval(closeWeekendTimer);
    window.open("../pages/closed.html", "_self");
  }
}

weekday = weekend.getDay();
document.querySelector('#weekday').value = weekday;
closeWeekend();