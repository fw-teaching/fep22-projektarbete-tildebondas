/* Site-wide JS i den här filen (t.ex. huvudmenyn) */

console.log('main.js init'); // För att se att skriptet laddats in

function minFunktion() {
    console.log("Funktionen funkar");
}

minFunktion();

function buttonHandler() {
    console.log("Du klickade här!");
}

function secondButton() {
    const namn = prompt("Ge mig namn nam nam");
    alert("Hello "+namn);
}

function thirdButton(){
    let namn = document.querySelector("#namn").value;
    document.getElementById("namn").value = "";
    console.log(namn);

    if (namn == "Elias") {
        namn = `${namn} Nybondas`;
    }

    document.querySelector("#hello-output").innerText = `Morjens ${namn}!`;
}