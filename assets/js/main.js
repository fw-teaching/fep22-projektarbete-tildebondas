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

console.log('main.js init'); // För att se att skriptet laddats in