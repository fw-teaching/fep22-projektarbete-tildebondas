document.querySelector("#buttonEnter").addEventListener('click', (evt) => inputName());
document.querySelector("#amountOfTime").addEventListener('change', function (evt){
  timeUpdate();
  hideTime();
});

//Funktion som körs när huvudsidan laddas
function websiteLoad() {
  weekday = weekend.getDay();
  document.querySelector('#weekday').value = weekday;
  closeWeekend();
}

websiteLoad();

//Förnamn, efternamn
function inputName() {
  console.log("inputName()");
  let fornamn = document.querySelector("#fornamn").value;
  let efternamn = document.querySelector("#efternamn").value;


  //Displayar error ifall ena fältet eller båda är tomt
  if (fornamn == 0 || efternamn == 0) {
    document.getElementById("errorMsg").style.display = 'block'; //Displayar error
  }

  //Annars genereras username, sidan laddas
  else {
    let username = efternamn.replace(/\s/g, '').substring(0, 7).toLowerCase() + fornamn.replace(/\s/g, '').substring(0, 1).toLowerCase(); //Lagar ett username, omvandlar till små bokstäver och tar bort alla mellanslag
    localStorage.setItem("username", username);
    document.getElementById("website-output").style.display = 'block'; //Displayar webbsidan
    document.querySelector("#name-box").innerText = `Welcome ${fornamn}! Your newly generated username is:`;
    document.querySelector("#username").innerText = username;
    document.getElementById("name-check").style.display = 'none'; //Gömmer name-check
    document.getElementById("errorMsg").style.display = 'none'; //Gömmer error

    theClock();

    console.log(fornamn, efternamn, username);

    document.cookie = `fornamn = ${fornamn}; SameSite = lax`
    document.cookie = `efternamn = ${efternamn}; SameSite = lax`
    document.cookie = `username = ${username}; SameSite = lax`
  }
}

function hideMoney() {

  console.log("hideMoney()");

  if (money() == true) {
    document.getElementById("howMany").style.display = 'none';
    document.getElementById("moneyPlaceholder").style.display = 'none';
    document.getElementById("okButt").style.display = 'none';

    document.getElementById("emeraldImage").style.display = 'block'; //Emerald counter

    document.getElementById("moneyNumber").innerText = amount;

    document.getElementById("amountOfTime").style.display = 'inline';
    document.getElementById("howLong").style.display = 'block';
  }
}

function hideTime() {
  console.log("hideTime()");
  document.getElementById("amountOfTime").style.display = 'none';
  document.getElementById("howLong").style.display = 'none';
}