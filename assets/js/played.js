console.log('hej played')

let played = localStorage.getItem('played');


if (localStorage.getItem('played')) {

    console.log("the user has played " + played + " times");
    played++;
    localStorage.setItem('played', played);
} else {
    localStorage.setItem('played', 1);
}