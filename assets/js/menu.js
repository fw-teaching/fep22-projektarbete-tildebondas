let colorValue = {R: 27, G: 87, B: 27}; //omvandla till array utan objekt så funkar det (testat)
const sliderArr = [];
document.querySelectorAll('.slider').forEach((elem) => sliderArr.push({color: elem.getAttribute('name'), value: elem.getAttribute('value')}));;
function updateSlider(){
    /*sliderArr.forEach((elem) => elem.value = colorValue.(elem.color); //omvandla till array utan objekt så funkar det (testat)*/
    console.log(sliderArr);
}

updateSlider();