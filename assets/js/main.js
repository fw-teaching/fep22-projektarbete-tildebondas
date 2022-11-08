/* Site-wide JS i den här filen (t.ex. huvudmenyn) */


//the function that checks the age and if underage exits the site with a promt
function ageCheck(){
    let ageCheck = confirm("Do you confirm that you are 18 or older?");
    if(ageCheck){
        alert("Welcome and have fun!")
        
    }
    else{
        alert("Underage gambling is not allowed!")
        window.close();
    }
}

function money(){
    let amount = document.getElementById("amount").value;
    console.log(amount);
}

function timeUpdate() {
    var select = document.getElementById('amountOfTime');
    var option = select.options[select.selectedIndex];

    document.getElementById('value').value = option.value;
    document.getElementById('text').value = option.text;
}


function countdown(dateEnd) {
    var timer, hours, minutes, seconds;
  
    dateEnd = new Date(dateEnd);
    dateEnd = dateEnd.getTime();
  
    if ( isNaN(dateEnd) ) {
      return;
    }
  
    timer = setInterval(calculate, 1000);
  
    function calculate() {
      var dateStart = new Date();
      var dateStart = new Date(dateStart.getUTCFullYear(),
                               dateStart.getUTCMonth(),
                               dateStart.getUTCDate(),
                               dateStart.getUTCHours(),
                               dateStart.getUTCMinutes(),
                               dateStart.getUTCSeconds());
      var timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000)
  
      if ( timeRemaining >= 0 ) {
        timeRemaining   = (timeRemaining % 86400);
        hours   = parseInt(timeRemaining / 3600);
        timeRemaining   = (timeRemaining % 3600);
        minutes = parseInt(timeRemaining / 60);
        timeRemaining   = (timeRemaining % 60);
        seconds = parseInt(timeRemaining);
  
        document.getElementById("hours").innerHTML    = parseInt("0" + hours -2);
        document.getElementById("minutes").innerHTML   = ("0" + minutes).slice(-2);
        document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
      } else {
        return;
      }
    }
  
    function display(hours, minutes, seconds) {}
  }
  //180 står för 3h
  //myDate är en formel för att få den nuvarande tiden plus värdet man vill lägga
  var myDate = new Date(new Date().getTime()+(180*60*1000));
  
  countdown(myDate);


  //https://flexiple.com/javascript/javascript-clock/
function theClock(){
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let time = hh + ":" + mm + ":" + ss;

  document.getElementById("clock").innerText = time;
}
theClock();
/*function reverseString(str){
    return str.split("").reverse().join("");
}*/


//Förnamn, efternamn
function inputName() {
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

        console.log(fornamn, efternamn, username);
    }
}