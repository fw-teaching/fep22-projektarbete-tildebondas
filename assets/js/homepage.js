document.querySelector("#buttonEnter").addEventListener('click', (evt) => inputName());

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
      document.getElementById("website-output").style.display = ''; //Displayar webbsidan
      document.querySelector("#name-box").innerText = `Welcome ${fornamn}! Your newly generated username is:`;
      document.querySelector("#username").innerText = username;
      document.getElementById("name-check").style.display = 'none'; //Gömmer name-check
      document.getElementById("errorMsg").style.display = 'none'; //Gömmer error
  
      theClock();
  
      console.log(fornamn, efternamn, username);
    }
  }

  //Funktion som körs när huvudsidan laddas
function websiteLoad() {
    document.getElementById("website-output").style.display = 'none'; //Gömmer webbsidan
    document.getElementById("errorMsg").style.display = 'none'; //Gömmer error
  
    closeWeekend();
  }