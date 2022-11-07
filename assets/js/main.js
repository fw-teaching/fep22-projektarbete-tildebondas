/* Site-wide JS i den här filen (t.ex. huvudmenyn) */


//the function that checks the age and if underage exits the site with a promt
function ageCheck()
 {
    let ageCheck = confirm("I confirm am older than 18?");  

    if(ageCheck){
        const money = prompt ("how much do you want to put in?")
        
    }
    else{
        alert("Underage gambling is not allowed!")
        window.close();
    }



    
}



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
