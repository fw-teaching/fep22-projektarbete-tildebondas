console.log("storage");

let visiting = localStorage.getItem('visited');


if (localStorage.getItem('visited')) {

    console.log("the user has visited this site " + visiting + " times");
    visiting++;
    localStorage.setItem('visited', visiting);
} else {
    localStorage.setItem('visited', 1);
}
//counts how many times the user has visited the site and stores it on local storage

let userAgent = navigator.userAgent;
let language = navigator.language;
console.log("the browser language is " + language)

let device;

if(/Android|webOS|iPhone|iPad|iPod|IEMobile|Opera Mini/i.test(userAgent)){
    
    console.log("user is on a mobile device");
    device = "mobile";
  }else{
    
    console.log("user is on a computer");
    device = "computer"
  }

  //checks if the navigator.userAgenets uses any of the keywords.
  //the test checks the string and if ts a match it returns true
  //the i makes it so it ignores lower and uppercase  letters and treats them the same

  let browser;
  
  if(userAgent.match(/edg/i)){
      browser = "edge";
    }else if(userAgent.match(/firefox|fxios/i)){
      browser = "firefox";
    }  else if(userAgent.match(/safari/i)){
      browserName = "safari";
    }else if(userAgent.match(/opr\//i)){
      browser = "opera";
    } else if(userAgent.match(/chrome|chromium|crios/i)){
      browser = "chrome";
    }else{
      browser="can't detect browser";
    }
  
   console.log("the user is on " + browser)        


//checks if the key words match the navigator.userAgent and if it matches the correct phrase outputs the correct name



const getLocation = () => {

  //checks if the user allows geolocation and returns in the console the cordinates if true

  const succes = (position) => {
    let coords = position.coords;
    console.log("The users latitude is " + coords.latitude)
    console.log("The users longitude is " + coords.longitude)
  }
//if user does not allow
  const error = () => {
    console.log("user does now allow location")
  }
  
  navigator.geolocation.getCurrentPosition(succes, error);
}

getLocation();

let height = window.screen.height;
let width = window.screen.width

console.log("the screen resolution is " + width + "px * " + height + "px")
//writes in the console the browsers current size

localStorage.setItem('device', device);
localStorage.setItem('browser', browser);
localStorage.setItem('language', language);

let played = localStorage.getItem('played');

console.log('the user has played ' + played + " games")
//saves the info to be able to "sell" it later :)

/*
console.log(window.screen.availHeight)
console.log(window.screen.availWidth)
*/

/*function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("error");
    }
}
function showPosition(position) {

    console.log("latitude " +position.coords.latitude);
    console.log("Longitude "+ position.coords.longitude);
  }


*/
