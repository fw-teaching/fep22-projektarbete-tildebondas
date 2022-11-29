console.log("hej")

document.body.style.backgroundImage = "url(../assets/images/memory/memoryBackground.png)";

if (sessionStorage.getItem("finishedSetup") != "true") {
    alert("ERROR finishedSetup != \"true\"; Homepage skipped or new tab opened. Do not do this.")
    window.open("../homepage/index.html", "_self");
}

const section = document.querySelector('section');
let attempts = 0;
let record = localStorage.getItem('record');
let matched = 0;
document.querySelector('.attemptsCounter').innerHTML = ("Attempts " + attempts + "<br> And your record is " + record);
//the attempts counter



const getData = () => [
    {
        name: 'apple',
        img: '../assets/images/memory/apple.png'
    },
    {
        name: 'apple',
        img: '../assets/images/memory/apple.png'
    },
    {
        name: 'axe',
        img: '../assets/images/memory/axe.png'
    },
    {
        name: 'axe',
        img: '../assets/images/memory/axe.png'
    },
    {
        name: 'pickaxe',
        img: '../assets/images/memory/pickaxe.png'
    },
    {
        name: 'pickaxe',
        img: '../assets/images/memory/pickaxe.png'
    },
    {
        name: 'shovel',
        img: '../assets/images/memory/shovel.png'
    },
    {
        name: 'shovel',
        img: '../assets/images/memory/shovel.png'
    },
    {
        name: 'sword',
        img: '../assets/images/memory/sword.png'
    },
    {
        name: 'sword',
        img: '../assets/images/memory/sword.png'
    },
    {
        name: 'creeper',
        img: '../assets/images/memory/creeper.png'
    },
    {
        name: 'creeper',
        img: '../assets/images/memory/creeper.png'
    },
    {
        name: 'bed',
        img: '../assets/images/memory/bed.png'
    },
    {
        name: 'bed',
        img: '../assets/images/memory/bed.png'
    },
    {
        name: 'pig',
        img: '../assets/images/memory/pig.png'
    },
    {
        name: 'pig',
        img: '../assets/images/memory/pig.png'
    }]
// the array of imgs with 2 of each to find a pair

const randomizer = () => {
    const cardData = getData();
//it gets all the images for getData with them all in an array
    cardData.sort(() => Math.random() - 0.5);
    return cardData
}
//randomizes the order the imgs show up in the array using sort math.random - 0.5
//and returns the array in a random order to be put in the html
const generator = () => {
    const cardData = randomizer();
    //generates the html elements for the game so that each new div has a "face" and "back" img 
    cardData.forEach(item => {
        const card = document.createElement('div');
        const face = document.createElement('img')
        const back = document.createElement('img')
        card.classList = 'card';
        face.classList = 'face';
        back.classList = 'back';


        face.src = item.img;
        back.src = '../assets/images/memory/steve.png'
        card.setAttribute('name', item.name);
        //attaches the img to the html face and back value and sets the name to be checked later
        //all the img and names for "face" is fetched with forEach item in getData through the randomized CardData
        //while the back is always the same img
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);
        //just adds a new card to the section for every new forEach

        card.addEventListener('click', (evt) => {
            card.classList.toggle('toggleCard');
            cardCheck(evt);
        })
        //when you click one of the cards it then gives them the class toggleCard which is a animation/transform in
        //the css folder and gives the information of the clicked cards to cardCheck

    })
};


const cardCheck = (evt) => {
    const clicked = evt.target;
    clicked.classList.add('flipped');
    const flipped = document.querySelectorAll('.flipped');
//gives the card the class flipped


    if (flipped.length === 2) {
        if (flipped[0].getAttribute('name')
        === flipped[1].getAttribute('name')) {
            console.log("match")
            flipped[0].classList.remove('flipped');
            flipped[1].classList.remove('flipped');
            matched++;
        
            
            //checks if both cards have a matching name and if not removes the class
            //toggleCard so it flips back again
        } else {
            console.log("wrong")
            flipped.forEach(card => {
                card.classList.remove('flipped');
                setTimeout(() => card.classList.remove('toggleCard'), 800);
                //adds a little delay to the backflip so it doesnt happen to fast
            })
        }
        attempts++;
        document.querySelector('.attemptsCounter').innerHTML = ("Attempts " + attempts + "<br> And your record is " + record);
        //Adds and displays the number of attempts made so far
    }

   
    


}

const gameCheck = () =>{
    if (matched == 8){
        matched = 0;
        if(record = null){
            localStorage.setItem('record', attempts);
        }
        if(attempts < localStorage.getItem('record')){
            localStorage.setItem('record', attempts);
            alert('New record!')
        }
        alert('you won in ' + attempts + ' attempts')
        
       let again = confirm('Do you wish to play again?');
       if (again){
        location.reload();
       }else{
        window.close();
       }
        
    }
}


generator();
setInterval(gameCheck, 100);