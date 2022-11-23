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


let language = navigator.language;
console.log("the browser language is " + language)

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    // true for mobile device
    console.log("user is on a mobile device");
  }else{
    // false for not mobile device
    console.log("user is on a computer");
  }

  let userAgent = navigator.userAgent;
  let browserName;
  
  if(userAgent.match(/chrome|chromium|crios/i)){
      browserName = "chrome";
    }else if(userAgent.match(/firefox|fxios/i)){
      browserName = "firefox";
    }  else if(userAgent.match(/safari/i)){
      browserName = "safari";
    }else if(userAgent.match(/opr\//i)){
      browserName = "opera";
    } else if(userAgent.match(/edg/i)){
      browserName = "edge";
    }else{
      browserName="No browser detection";
    }
  
   console.log("the user is on " + browserName)        





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
