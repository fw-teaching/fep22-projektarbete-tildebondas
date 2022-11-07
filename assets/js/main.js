/* Site-wide JS i den här filen (t.ex. huvudmenyn) */


//the function that checks the age and if underage exits the site with a promt




function minFunktion() {
    console.log("Funktionen funkar");
}

minFunktion();

function buttonHandler() {
    console.log("Du klickade här!");
}

function secondButton() {
    const namn = prompt("Ge mig namn nam nam");
    alert("Hello " + namn);
}

function thirdButton() {
    let namn = document.querySelector("#namn").value;
    document.getElementById("namn").value = "";
    console.log(namn);

    if (namn == "Elias") {
        namn = `${namn} Nybondas`;
    }

    document.querySelector("#hello-output").innerText = `Morjens ${namn}!`;
}

function inputName() {
    let fornamn = document.querySelector("#fornamn").value;
    let efternamn = document.querySelector("#efternamn").value;

    if (fornamn == 0 || efternamn == 0) {
        document.getElementById("errorMsg").style.display = ''; //Displayar error
    }

    else {
        /*let username = efternamn.replace(/\s/g, '').substring(0, 7).toLowerCase() + fornamn.replace(/\s/g, '').substring(0, 1).toLowerCase(); */ //Lagar ett username, omvandlar till små bokstäver och tar bort alla mellanslag

        let username = fornamn.replace(/\s/g, '').reverse().toLowerCase() + 336; 
        document.getElementById("website-output").style.display = ''; //Displayar webbsidan
        document.querySelector("#name-box").innerText = `Welcome ${fornamn}! Your newly generated username is:`;
        document.querySelector("#username").innerText = username;
        document.getElementById("name-check").style.display = 'none'; //Gömmer name-check
        document.getElementById("errorMsg").style.display = 'none'; //Gömmer error

        console.log(fornamn, efternamn, username);
    }
}
