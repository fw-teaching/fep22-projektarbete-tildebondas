/* 
--------------------
COLOR CHANGE SECTION
--------------------
*/

let colorValue = { R: 27, G: 87, B: 27 };
const sliderArr = [];
const sliders = document.querySelectorAll('.slider');


//pulls from localStorage
if (localStorage.getItem('R') != undefined) {
    colorValue.R = localStorage.getItem('R')
    colorValue.G = localStorage.getItem('G')
    colorValue.B = localStorage.getItem('B')
    document.querySelector("#R").value = colorValue.R;
    document.querySelector("#G").value = colorValue.G;
    document.querySelector("#B").value = colorValue.B;

    updateColor(colorValue.R, colorValue.G, colorValue.B);
}


//reset button
document.querySelector("div.basicBox input[type=button]").addEventListener('click', () => {
    colorValue = { R: 27, G: 87, B: 27 };
    document.querySelector("#R").value = colorValue.R;
    document.querySelector("#G").value = colorValue.G;
    document.querySelector("#B").value = colorValue.B;

    document.body.style.backgroundImage = `url(${bgColors[0].url})`;
    bgSelect.value = bgColors[0].color;
    localStorage.removeItem('bgColor');

    updateSlider();
})

sliders.forEach((elem) => {
    sliderArr.push({ color: elem.getAttribute('color'), value: elem.getAttribute('value') })
    //elem.setAttribute('value', colorValue[elem.color]);

    elem.addEventListener('input', updateSlider);
    console.log(elem.value);
});

function updateColor(R, G, B) {
    /* for (i in sliderArr){
         sliderArr[i].value = document.querySelector(`.slider input[color='${sliderArr[i].color}']`).value;
     } */

    // sliderArr.forEach(elem => elem.value = document.querySelector(`.slider input[color='${elem.color}']`).value);  //hjälp

    document.querySelectorAll('.basicBox').forEach(elem => {
        elem.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
        localStorage.setItem('R', colorValue.R);
        localStorage.setItem('G', colorValue.G);
        localStorage.setItem('B', colorValue.B);
    });
}

function updateSlider() {
    colorValue = { R: colorValue.R = document.querySelector("#R").value, G: colorValue.G = document.querySelector("#G").value, B: document.querySelector("#B").value } //fixa så den använder array iställe

for(elem in sliderArr){
    for (i in colorValue){
        colorValue[elem]
    }
}

//----------------------------------------------------------------------------------HÄR

    sliderArr.forEach((elem) => {
        document.querySelector(`div.basicBox label[for='${elem.color}']`).innerText = colorValue[elem.color];
        elem.value = colorValue[elem.color];
    });

    updateColor(colorValue.R, colorValue.G, colorValue.B);
}



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

bgSelect.addEventListener('change', (evt) => {
    console.log("bg change")
    console.log(evt.target.selectedIndex);

    document.body.style.backgroundImage = `url(${bgColors[evt.target.selectedIndex].url})`;


    updateColor(bgColors[evt.target.selectedIndex].RGB.R, bgColors[evt.target.selectedIndex].RGB.G, bgColors[evt.target.selectedIndex].RGB.B);

    localStorage.setItem('bgColor', evt.target.selectedIndex);
});