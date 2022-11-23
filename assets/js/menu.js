const colorValue = {R: 27, G: 87, B: 27};
const sliderArr = [];
const slider = document.querySelectorAll('.slider');

slider.forEach((elem) => {
    sliderArr.push({color: elem.getAttribute('color'), value: elem.getAttribute('value')})
    //elem.setAttribute('value', colorValue[elem.color]);

    elem.addEventListener('input', updateSlider);
    console.log(elem.value);
});;

document.querySelector("#R").value=colorValue.R;
document.querySelector("#G").value=colorValue.G;
document.querySelector("#B").value=colorValue.B;


function updateSlider(){
    colorValue.R = document.querySelector("#R").value;
    colorValue.G = document.querySelector("#G").value;
    colorValue.B = document.querySelector("#B").value;
    document.querySelector("div.basicBox label[for='R']").innerText = colorValue.R;
    document.querySelector("div.basicBox label[for='G']").innerText = colorValue.G;
    document.querySelector("div.basicBox label[for='B']").innerText = colorValue.B;

    sliderArr.forEach((elem) => elem.value = colorValue[elem.color]);

    localStorage.setItem('R', colorValue.R);
    localStorage.setItem('G', colorValue.G);
    localStorage.setItem('B', colorValue.B);
}