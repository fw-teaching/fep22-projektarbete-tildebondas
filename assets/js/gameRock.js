console.log("hej")

/* const cobblestone = {win:'shear', lose:'papper', tie:'cobblestone'};
const papper = {win:'cobblestone', lose:'shear', tie:'papper'};
const shear = {win:'papper', lose:'cobblestone', tie:'shear'};
*/


const getData = () => [
    {
        name: 'papper',
        img: '../assets/images/rockPapperScissors/minePapper.png',
        win:'cobblestone',
        lose:'shear',
        tie:'papper'

    },
    {
        name: 'cobblestone',
        img: '../assets/images/rockPapperScissors/mineRock.png',
        win:'shear',
        lose:'papper',
        tie:'cobblestone'
    },
    {
        name: 'shear',
        img: '../assets/images/rockPapperScissors/mineScissros.png',
        win:'papper', 
        lose:'cobblestone',
        tie:'shear'
    }
]

const choice = getData();

const playerChoices = document.querySelector('.playerChoices');
const choiceComputer = document.querySelector('.choiceComputer');




const randomizer = () => {
    const randomeGame = getData();
//it gets all the images for getData with them all in an array
randomeGame.sort(() => Math.random() - 0.5);
    return randomeGame
}

const randomeChoice = randomizer();
console.log(randomeChoice);




const generator = () => {


    const boxGame = document.createElement('div');
    const assetGame = document.createElement('img');
    

    choice.forEach(item => {
        const box = document.createElement('div');
        const asset = document.createElement('img');
        box.classList = 'box';
        asset.classList = 'asset';

        asset.src = item.img;

        asset.setAttribute('name', item.name);
        asset.setAttribute('win', item.win);

        playerChoices.appendChild(box);
        box.appendChild(asset);


        box.addEventListener('click', (evt) => {
            
        })
    })
}


generator ();

