document.querySelector("#buttonEnter").addEventListener('click', inputName);
document.querySelector("#okButt").addEventListener('click', hideMoney);

//Event listener för när enter trycks. Ser till att enter bara är kopplad till en funktion i taget. För inmatningsfälten.
function pressEnter(evt) {
  if (evt.key === 'Enter') {
    inputName()
  }
}

function Button2(evt) {
  if (evt.key === 'Enter') {
    hideMoney();
  }
}

document.addEventListener('keydown', pressEnter)


document.querySelector("#amountOfTime").addEventListener('change', () => {
  timeUpdate();
  hideTime();
});

function loadEverything() {
  document.getElementById("website-output").style.display = 'block'; //Displayar webbsidan
  document.querySelector("#name-box").innerText = `Welcome back,`;
  document.querySelector("#username").innerText = `${sessionStorage.getItem('username')}!`;
  document.getElementById("name-check").style.display = 'none'; //Gömmer name-check
  document.getElementById("errorMsg").style.display = 'none'; //Gömmer error
  document.getElementById("howMany").style.display = 'none';
  document.getElementById("moneyPlaceholder").style.display = 'none';
  document.getElementById("okButt").style.display = 'none';
  document.getElementById("emeraldImage").style.display = 'block'; //Emerald counter
  document.getElementById("moneyNumber").innerText = `${localStorage.getItem('amount')}`;
  document.getElementById("amountOfTime").style.display = 'inline';
  document.getElementById("howLong").style.display = 'block';
  hideTime();
}

//Funktion som körs när huvudsidan laddas
function websiteLoad() {
  weekday = weekend.getDay();
  document.querySelector('#weekday').value = weekday;
  closeWeekend();

  //Ifall man blivit färdig med "setuppen" skippar den och visar slutliga sidan
  if (sessionStorage.getItem('finishedSetup') === "true") {
    loadEverything();
  }

  else ageCheck();
}

websiteLoad();

let fornamn;
let efternamn;
let username;

//Förnamn, efternamn, username
function inputName() {
  console.log("inputName()");
  fornamn = document.querySelector("#fornamn").value;
  efternamn = document.querySelector("#efternamn").value;
  username;

  //Displayar error ifall ena fältet eller båda är tomt
  if (fornamn == 0 || efternamn == 0) {
    document.getElementById("errorMsg").style.display = 'block'; //Displayar error
  }

  //Annars genereras username, sidan laddas
  else {
    document.removeEventListener('keydown', pressEnter)
    document.addEventListener('keydown', Button2)

    username = efternamn.replace(/\s/g, '').substring(0, 7).toLowerCase() + fornamn.replace(/\s/g, '').substring(0, 1).toLowerCase(); //Lagar ett username, omvandlar till små bokstäver och tar bort alla mellanslag

    generateHomepage();

    theClock();

    console.log(fornamn, efternamn, username);

    sessionStorage.setItem('username', username);

    console.log(document.cookie);

    return true;
  }
}

function generateHomepage() {
  document.getElementById("website-output").style.display = 'block'; //Displayar webbsidan
  document.querySelector("#name-box").innerText = `Welcome ${fornamn}! Your newly generated username is:`;
  document.querySelector("#username").innerText = username;
  document.getElementById("name-check").style.display = 'none'; //Gömmer name-check
  document.getElementById("errorMsg").style.display = 'none'; //Gömmer error
};

function hideMoney() {

  console.log("hideMoney()");

  if (money() == true) {
    document.removeEventListener('keydown', Button2);
    document.getElementById("howMany").style.display = 'none';
    document.getElementById("moneyPlaceholder").style.display = 'none';
    document.getElementById("okButt").style.display = 'none';

    document.getElementById("emeraldImage").style.display = 'block'; //Emerald counter

    document.getElementById("moneyNumber").innerText = amount;

    document.getElementById("amountOfTime").style.display = 'inline';
    document.getElementById("howLong").style.display = 'block';

    return true;
  }
}

function hideTime() {
  console.log("hideTime()");
  document.getElementById("amountOfTime").style.display = 'none';
  document.getElementById("howLong").style.display = 'none';
  document.querySelector("#hamburger").style.visibility = 'visible';

  sessionStorage.setItem('finishedSetup', "true");
}