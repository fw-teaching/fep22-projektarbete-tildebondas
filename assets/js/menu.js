/* 
--------------------
COLOR CHANGE SECTION
--------------------
*/

let colorValue = { R: 27, G: 87, B: 27 };
const sliderArr = [];
const sliders = document.querySelectorAll('.slider');

sliders.forEach((elem) => {
    sliderArr.push({ color: elem.getAttribute('color'), value: elem.getAttribute('value') })

    elem.addEventListener('input', updateSlider);
    console.log(elem.value);
});

//pulls from localStorage if defined
if (localStorage.getItem('R') != undefined) {
    colorValue.R = localStorage.getItem('R')
    colorValue.G = localStorage.getItem('G')
    colorValue.B = localStorage.getItem('B')
    document.querySelector("#R").value = colorValue.R;
    document.querySelector("#G").value = colorValue.G;
    document.querySelector("#B").value = colorValue.B;

    updateColor(colorValue.R, colorValue.G, colorValue.B);
}

function updateColor(R, G, B) {

    document.querySelectorAll('.basicBox').forEach(elem => {
        elem.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
        localStorage.setItem('R', R);
        localStorage.setItem('G', G);
        localStorage.setItem('B', B);
    });
}

function updateSlider() {

    sliders.forEach((elem) => {
        colorValue[elem.getAttribute('color')] = elem.value;
        document.querySelector(`div#colorChanger label[for='${elem.getAttribute('color')}']`).innerText = elem.value;
    });

    updateColor(colorValue.R, colorValue.G, colorValue.B);
}



//Reset button
document.querySelector("div#colorChanger input[type=button]").addEventListener('click', () => {
    colorValue = { R: 27, G: 87, B: 27 };
    document.querySelector("#R").value = colorValue.R;
    document.querySelector("#G").value = colorValue.G;
    document.querySelector("#B").value = colorValue.B;

    document.body.style.backgroundImage = `url(${bgColors[0].url})`;
    bgSelect.value = bgColors[0].color;
    localStorage.removeItem('bgColor');

    updateSlider();
})



/* 
-------------------------
BACKGROUND CHANGE SECTION
-------------------------
*/

const bgColors = [
    { color: "Green (Default)", url: '../assets/images/backgrounds/creeper-g7bf30bcb7_1920_GREEN.png', RGB: { R: 27, G: 87, B: 27 } },
    { color: 'Blue', url: '../assets/images/backgrounds/creeper-g7bf30bcb7_1920_BLUE.png', RGB: { R: 27, G: 87, B: 125 } },
    { color: 'Red', url: '../assets/images/backgrounds/creeper-g7bf30bcb7_1920_RED.png', RGB: { R: 125, G: 50, B: 50 } },
    { color: 'Pink', url: '../assets/images/backgrounds/creeper-g7bf30bcb7_1920_PINK.png', RGB: { R: 125, G: 0, B: 75 } },
    { color: 'Black/White', url: '../assets/images/backgrounds/creeper-g7bf30bcb7_1920_BLACK.png', RGB: { R: 70, G: 70, B: 70 } }
];

const bgSelect = document.querySelector("#bgSelect");

for (i in bgColors) {
    bgSelect.innerHTML += `<option>${bgColors[i].color}</option>`
};

//ändrar bakgrunden och selectorn ifall bakgrund har sparats i localstorage
if (localStorage.getItem('bgColor') != undefined) {
    document.body.style.backgroundImage = `url(${bgColors[localStorage.getItem('bgColor')].url})`;
    bgSelect.value = bgColors[localStorage.getItem('bgColor')].color;
};


//Ändrar theme, samt byter plats på sliders för det var lättare än att omskriva updateSlider() bara för detta syfte
bgSelect.addEventListener('change', (evt) => {
    console.log("bg change")
    console.log(evt.target.selectedIndex);

    document.body.style.backgroundImage = `url(${bgColors[evt.target.selectedIndex].url})`;

    sliders.forEach(elem => {
        elem.value = bgColors[evt.target.selectedIndex].RGB[elem.getAttribute('color')]
        document.querySelector(`div#colorChanger label[for='${elem.getAttribute('color')}']`).innerText = elem.value;
    });


    updateColor(bgColors[evt.target.selectedIndex].RGB.R, bgColors[evt.target.selectedIndex].RGB.G, bgColors[evt.target.selectedIndex].RGB.B);

    localStorage.setItem('bgColor', evt.target.selectedIndex);
});



/*
---------------
HAMBURGER MENU
---------------
*/
const menu = document.querySelector("#menu");
menu.style.visibility = "hidden";
document.querySelector("#colorChanger").style.opacity = '0';


//Öppnar meny med animation
function menuToggle(){
    console.log("menuToggle()")

    if (menu.style.visibility == "hidden") {
        menu.style.visibility = "visible";
        document.querySelector("#hamburger").style.opacity = 1;
        menu.style.width = '270px';
        document.querySelector("#colorChanger").style.opacity = '1';
    }
    else {
        menu.style.visibility = "hidden";
        document.querySelector("#hamburger").style.opacity = "";
        menu.style.width = '0px';
        document.querySelector("#colorChanger").style.opacity = '0';
    }
}

document.querySelector("#burgerIcon").addEventListener('click', menuToggle);

const menuItems = [
    { name: "Homepage", url: "../homepage/index.html" },
    { name: "Gallery", url: "../pages/gallery.html" },
    { name: "Memory", url: "../pages/gameMemory.html" },
    { name: "C, P, S", url: "../pages/gameRock.html" }
];

menuItems.forEach(elem => {
    document.querySelector("#links").innerHTML += `<a href="${elem.url}" target="_self">${elem.name}</a>`
})