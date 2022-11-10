/* Site-wide JS i den här filen (t.ex. huvudmenyn) */


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
  // resetes all the values
  myDate = 0;
  dateEnd = 0;
  dateStart = 0;
  timeRemaining = 0;
  hours = 0
  minutes = 0;
  seconds = 0,





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
    dateStart = new Date(dateStart.getUTCFullYear(),
      dateStart.getUTCMonth(),
      dateStart.getUTCDate(),
      dateStart.getUTCHours(),
      dateStart.getUTCMinutes(),
      dateStart.getUTCSeconds());
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
      document.getElementById("hours").innerHTML = parseInt("0" + hours - 2);
      document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
      document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
    } else {
      return;
    }
  }
  //used to dispaly the timer
  function display(hours, minutes, seconds) { }
}



//https://flexiple.com/javascript/javascript-clock/
function theClock() {
  console.log("theClock()");
  //Fråga fredde om UTC


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
  hh = (hh < 10) ? "0" + hh : hh;
  mm = (mm < 10) ? "0" + mm : mm;
  ss = (ss < 10) ? "0" + ss : ss;
  day = (day < 10) ? "0" + day : day;
  mo = (mo < 10) ? "0" + mo : mo;

  let timeOut = `${hh}:${mm}:${ss}`;
  let dateOut = `${day}.${mo}.${year}`

  document.getElementById("clock").innerText = timeOut;
  document.getElementById("date").innerText = dateOut;
  setTimeout(function () { theClock() }, 1000);

}


/*function reverseString(str){
    return str.split("").reverse().join("");
}*/


/*function isWeekend(){

}*/

//Funktion som körs när webbsidan laddas
function websiteLoad() {
  document.getElementById("website-output").style.display = 'none'; //Gömmer webbsidan
  document.getElementById("errorMsg").style.display = 'none'; //Gömmer error
  document.getElementByQuery("#closedMsg").style.display = 'none'; //Gömmer closed message

  /*if (isWeekend() == true) {
    document.getElementByQuery("#name-check").style.display = 'none'; //Gömmer name check
    document.getElementByQuery("#closedMsg").style.display = 'none'; //Visar closed message
  }*/
}

//Förnamn, efternamn
function inputName() {
  console.log("inputName()");
  let fornamn = document.querySelector("#fornamn").value;
  let efternamn = document.querySelector("#efternamn").value;


  //Displayar error ifall ena fältet eller båda är tomt
  if (fornamn == 0 || efternamn == 0) {
    document.getElementById("errorMsg").style.display = ''; //Displayar error
  }

  //Annars genereras username, sidan laddas
  else {
    let username = efternamn.replace(/\s/g, '').substring(0, 7).toLowerCase() + fornamn.replace(/\s/g, '').substring(0, 1).toLowerCase(); //Lagar ett username, omvandlar till små bokstäver och tar bort alla mellanslag
    /*let reverse = reverseString(fornamn);
    let username = reverse.replace(/\s/g, '').toLowerCase() + 336;*/
    document.getElementById("website-output").style.display = ''; //Displayar webbsidan
    document.querySelector("#name-box").innerText = `Welcome ${fornamn}! Your newly generated username is:`;
    document.querySelector("#username").innerText = username;
    document.getElementById("name-check").style.display = 'none'; //Gömmer name-check
    document.getElementById("errorMsg").style.display = 'none'; //Gömmer error

    theClock();

    console.log(fornamn, efternamn, username);
  }
}

//Räknar hur länge tills webbsidan stängs
function timeLeft() {

}