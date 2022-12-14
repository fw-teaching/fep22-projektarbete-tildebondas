if (sessionStorage.getItem("finishedSetup") != "true") {
    alert("ERROR finishedSetup != \"true\"; Homepage skipped or new tab opened. Do not do this.")
    window.open("../homepage/index.html", "_self");
}

document.querySelectorAll(".thumb").forEach((elem) => {
    console.log(elem);
    elem.addEventListener('click', () => {
        document.querySelector("#big > img").setAttribute('src', elem.getAttribute('bigimage'));
        document.querySelector("#big").style.display = "flex";
    });
});

function closeLight() {
document.querySelector("#big").style.display = "none";
}
document.querySelector("#big").addEventListener('click', closeLight)
document.addEventListener('keydown', closeLight)