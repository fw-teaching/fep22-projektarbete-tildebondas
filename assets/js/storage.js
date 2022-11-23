console.log("storage");

if (localStorage.getItem('visited')){
    let visiting = localStorage.getItem('visited');
    console.log("the user has visited this site " + visiting + " times");
    localStorage.setItem('visited', visiting);
    visiting++;
}else{
    localStorage.setItem('visited', 1);
}

