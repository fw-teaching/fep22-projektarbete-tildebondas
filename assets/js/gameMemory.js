console.log("hej")



const section = document.querySelector('section');



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
// the array of imgs

const randomizer = () => {
    const cardData = getData();

    cardData.sort(() => Math.random() - 0.5);
    return cardData
}
//randomizes the order the imgs show up in the array using sort math.random - 0.5
const generator = () => {
    const cardData = randomizer();
    //generates the html elements for the game
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
        //attaches the "cards" to the html
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener('click', (evt) => {
            card.classList.toggle('toggleCard');
            cardCheck(evt);
        })

    })
};


const cardCheck = (evt) => {
    const clicked = evt.target;
    clicked.classList.add('flipped');
    const flipped = document.querySelectorAll('.flipped');



    if (flipped.length === 2) {
        if (flipped[0].getAttribute('name')
        === flipped[1].getAttribute('name')) {
            console.log("match")
        } else {
            console.log("wrong")
            flipped.forEach(card => {
                card.classList.remove('flipped');
                setTimeout(() => card.classList.remove('toggleCard'), 500);
            })
        }
    }

}

generator();

/*
    const grid = document.querySelector('.gridMemory')

    imgArray.sort(() => 0.5 - Math.random());

    function board() {
        for (let index = 0; index < imgArray.length; index++) {
            let card = document.createElement('img');
            card.setAttribute('src', '../assets/images/memory/steve.png');
            card.addEventListener('click', cardFlip());
            grid.appendChild(card);


        }
    }



    let chosen = [];
    let chosenID = [];
    let attempts = 0;
    let found = 0;
    const inGame = 16;


    function cardFlip() {
        let cardID = this.getAttribute('data-id')
        if (chosen.length != 2) {
            if (this.getAttribute('src') != '../assets/images/memory/cardBack.png') {
                chosen.push(imgArray[cardID].name);
                chosenID.push(cardid);
                this.setAttribute('src', imgArray[cardID].image);
                if (chosen.length == 2) {
                    setTimeout(checkMatch, 500);
                }
            }
        }
    }
    function checkMatch() {
        attempts++;
        let cards = document.querySelectorAll('img');
        let first = chosenID[0];
        let last = chosenIDX[1];
        if (chosen[0] == chosen[1]) {
            found++;
            imgArray[first].setAttribute('src', '../assets/images/memory/cardBack.png');
            imgArray[last].setAttribute('src', '../assets/images/memory/cardBack.png');
        } else {
            imgArray[first].setAttribute('src', '../assets/images/memory/steve.png');
            imgArray[last].setAttribute('src', '../assets/images/memory/steve.png');
        }
        chosen = [];
        chosenID = [];


    }





    board();*/


































/*

#card {
    position: relative;
    width: 100px;
    height: 100px;
    cursor: pointer;
}

#front,
#back {
    position: absolute;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    background: #282A3A;
    transition: transform .6s cubic-bezier(.03,.74,.98,.02);
    backface-visibility: hidden;
}

#back {
    font-size: 28pt;
    text-align: center;
    line-height: 100px;
    background: #FDF8E6;
    transform: rotateY(180deg) rotateZ(50deg);
    user-select: none;
}

#card.flipped #front {
    transform: rotateY(180deg) rotateZ(50deg);
}

#card.flipped #back {
    transform: rotateY(0) rotateZ(0);
}
*/







/*
    const imgArray = [
        {
            name: 'apple',
            img: '../assers/images/memory/apple.png'
        },
        {
            name: 'apple',
            img: '../assers/images/memory/apple.png'
        },
        {
            name: 'axe',
            img: '../assers/images/memory/axe.png'
        },
        {
            name: 'axe',
            img: '../assers/images/memory/axe.png'
        },
        {
            name: 'pickaxe',
            img: '../assers/images/memory/pickaxe.png'
        },
        {
            name: 'pickaxe',
            img: '../assers/images/memory/pickaxe.png'
        },
        {
            name: 'shovel',
            img: '../assers/images/memory/shovel.png'
        },
        {
            name: 'shovel',
            img: '../assers/images/memory/shovel.png'
        },
        {
            name: 'sword',
            img: '../assers/images/memory/sword.png'
        },
        {
            name: 'sword',
            img: '../assers/images/memory/sword.png'
        },
        {
            name: 'creeper',
            img: '../assers/images/memory/creeper.png'
        },
        {
            name: 'creeper',
            img: '../assers/images/memory/creeper.png'
        },
        {
            name: 'bed',
            img: '../assers/images/memory/bed.png'
        },
        {
            name: 'bed',
            img: '../assers/images/memory/bed.png'
        },
        {
            name: 'pig',
            img: '../assers/images/memory/pig.png'
        },
        {
            name: 'pig',
            img: '../assers/images/memory/pig.png'
        }
    ]
*/