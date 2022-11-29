console.log("hej")

/* const cobblestone = {win:'shear', lose:'papper', tie:'cobblestone'};
const papper = {win:'cobblestone', lose:'shear', tie:'papper'};
const shear = {win:'papper', lose:'cobblestone', tie:'shear'};
*/


const getData = () => [
    {
        name: 'papper',
        img: '../assets/images/rockPapperScissors/minePapper.png',
        win: 'cobblestone',
        lose: 'shear',
        tie: 'papper'

    },
    {
        name: 'cobblestone',
        img: '../assets/images/rockPapperScissors/mineRock.png',
        win: 'shear',
        lose: 'papper',
        tie: 'cobblestone'
    },
    {
        name: 'shear',
        img: '../assets/images/rockPapperScissors/mineScissros.png',
        win: 'papper',
        lose: 'cobblestone',
        tie: 'shear'
    }
]

const choice = getData();

const playerChoices = document.querySelector('.playerChoices');
const choiceComputer = document.querySelector('.choiceComputer');
const choiceP = document.querySelector('.choice');








let i = 0;

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
        asset.setAttribute('data-i', i);
        
        playerChoices.appendChild(box);
        box.appendChild(asset);


        box.addEventListener('click', (evt) => {
            computerCard();
            playerChoice(evt);
            gameCheck();

        })
        i++;
    })

}

let bet = prompt('how much would you like to bet?');


const randome = Math.floor(Math.random() * 3);

const computerCard = () => {



    const boxC = document.createElement('div');
    const assetC = document.createElement('img');

    boxC.classList = 'boxC';
    assetC.classList = 'assetC';
    assetC.classList = 'check1';



    assetC.src = choice[randome].img;

    assetC.setAttribute('name', choice[randome].name);


    choiceComputer.appendChild(boxC);
    boxC.appendChild(assetC);


}

const playerChoice = (evt) => {

    const boxP = document.createElement('div');
    const assetP = document.createElement('img');

    boxP.classList = 'boxC';
    assetP.classList = 'assetC';
    assetP.classList = 'check2';

    const clicked = evt.target.getAttribute('data-i');


    assetP.src = choice[clicked].img
    assetP.setAttribute('win', choice[clicked].win);
    assetP.setAttribute('tie', choice[clicked].tie);
    assetP.setAttribute('lose', choice[clicked].lose);

    choiceP.appendChild(boxP);
    boxP.appendChild(assetP);
    
}



const gameCheck = () => {


    const check1 = document.querySelector('.check1');
    const check2 = document.querySelector('.check2');
    
    

    if(check1.getAttribute('name') 
    === check2.getAttribute('win')){
        console.log("win");
        console.log(amount);
        localStorage.setItem('amount', amount + bet * 2);
        amount += bet*2;
        document.querySelector('#score').innerText = "You won " + bet*2;
        
    }
    else if (check1.getAttribute('name') 
    === check2.getAttribute('tie')){
        console.log("tie");
        console.log(amount);
        document.querySelector('#score').innerText = "Tie";
        
        

    }
    else if (check1.getAttribute('name') 
    === check2.getAttribute('lose')){
        console.log("lose");
        console.log(amount);
        document.querySelector('#score').innerText = "You lose";
        
        amount - bet;
        localStorage.setItem('amount', amount - bet);
    }

  document.querySelector('#playAgain').addEventListener('click', () => {
   
    location.reload();
    console.log('hudwahkuawih');
  });


}

generator();

