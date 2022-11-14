/* Site-wide JS i den här filen (t.ex. huvudmenyn) */
console.log("main.js init");

//the function that checks the age and if underage exits the site with a promt
function ageCheck() {
  let ageCheck = confirm("Do you confirm that you are 18 or older?");
  if (ageCheck) {
    alert("Welcome and have fun!")

  }
  else {
    alert("Underage gambling is not allowed!")
    window.close();
  }
}

let amount = null;
function money() {
  amount = document.getElementById("moneyPlaceholder").value;
  console.log(amount);
}

//all variables for the codes

let time = null;
let change = null;
let timer = null;
let myDate = null;
let dateEnd = null;
let dateStart = null;
let timeRemaining = null;
let hours = null;
let minutes = null;
let seconds = null;

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

  myDate = new Date(new Date().getTime() + (time * 60 * 1000));
  //starts the timer when the value is given
  if (change != 0) { countdown(myDate); }
  //myDate is the calculations for the current time + the given value
 
// document.getElementById("timeEnds").innerHTML = myDate.getHours();
  //gets the information for when the timer ends

  let timesUp = myDate;
  document.querySelector("#timeEnds").innerText = `
  Time's up ${myDate.getHours()}:${myDate.getMinutes()}:${myDate.getSeconds()}
  `;
//shows when the timer ends
}




function countdown(dateEnd) {

  dateEnd = new Date(dateEnd);
  dateEnd = dateEnd.getTime();

  if (isNaN(dateEnd)) {
    return;
  }
  //resetes the intervall if a new time is given before the prevoius one has run out
  if (timer != null) {
    clearInterval(timer);
  }
  timer = setInterval(calculate, 1000);
  //makes it update every sec


  //gets entire date to be able to later write out the time that the timer ends on
  function calculate() {
    dateStart = new Date();
    dateStart = new Date(dateStart.getFullYear(),
      dateStart.getMonth(),
      dateStart.getDate(),
      dateStart.getHours(),
      dateStart.getMinutes(),
      dateStart.getSeconds());
    timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000)
    //changes milisecs to normal time
    if (timeRemaining >= 0) {
      timeRemaining = (timeRemaining % 86400);
      hours = parseInt(timeRemaining / 3600);
      timeRemaining = (timeRemaining % 3600);
      minutes = parseInt(timeRemaining / 60);
      timeRemaining = (timeRemaining % 60);
      seconds = parseInt(timeRemaining);
      //so the time starts "right"
      document.getElementById("hours").innerHTML = parseInt(hours);
      document.getElementById("minutes").innerHTML = (minutes);
      document.getElementById("seconds").innerHTML = (seconds);
      
      
      if (hours == 0 && minutes == 0 && seconds == 0){
        alert("times up!")
      } //alerts when time is up


    } else {
      return;
    }
  }
  //used to dispaly the timer
  function display(hours, minutes, seconds) { }

  
}


function timesUp(){

  alert("times up!")

}

function theClock() {
  console.log("theClock()");

  /*const full_date = new Date().toLocaleDateString(); //Date String
  const full_time = new Date().toLocaleTimeString(); // Time String*/
  //Lättare sätt att göra allt nedanför

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
  mo = (mo < 10) ? "0" + mo : mo;

  let timeOut = `${hh}:${mm}:${ss}`;
  let dateOut = `${day}.${mo}.${year}`

  document.getElementById("clock").innerText = timeOut;
  document.getElementById("date").innerText = dateOut;
  setTimeout(theClock, 1000); //setTimeout eftersom timern är inne i själva funktionen, behöver inte skiljd setInterval för att starta klockan
}

let weekend = new Date();

function theDate() {
  console.log("theDate()")
  weekday = document.querySelector('#weekday').value;
  console.log(weekday);
}

//Checkar ifall weekday har värdet veckoslut
function isWeekend(){
  if (weekday == 0 || weekday == 6){
    return true;
  }

  let date = new Date();
  let day = date.getDay();

  if (day == 0 || day == 6){
    return true;
  }
}

//Checkar varje sekund om det är veckoslut
const closeWeekendTimer = setInterval(closeWeekend, 1000);

//Stänger sidan ifall veckoslut
function closeWeekend(){
  if (isWeekend() == true) {
    clearInterval(closeWeekendTimer);
    window.open("../pages/closed.html", "_self")
  }
}

//Räknar hur länge tills casino öppnar
function timeLeft() {
  return false;
}