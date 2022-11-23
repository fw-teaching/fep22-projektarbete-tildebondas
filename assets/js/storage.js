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

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)){
    
    console.log("user is on a mobile device");
  }else{
    
    console.log("user is on a computer");
  }

  //checks if the navigator.userAgenets uses any of the keywords.
  //the test checks the string and if ts a match it returns true
  //the i makes it so it ignores lower and uppercase  letters and treats them the same

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


//checks if the key words match the navigator.userAgent and if it matches the correct phrase outputs the correct name


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
