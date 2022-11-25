console.log("hej")


const section = document.querySelector('section');


const getData = () => [
    {
        name: 'papper',
        img: '../assets/images/rockPapperScissors/minePapper.png.'
    },
    {
        name: 'cobblestone',
        img: '../assets/images/rockPapperScissors/mineRock.png'
    },
    {
        name: 'shear',
        img: '../assets/images/rockPapperScissors/mineScissros.png'
    }
]


const gameAsset = getData();

const generator = () => {
    gameAsset.forEach(item => {
        const box = document.createElement('div');
        const asset = document.createElement('img');
        box.classList = 'box';
        asset.classList = 'asset';

        asset.src = item.img;

        asset.setAttribute('name', item.name);

        section.appendChild(box);
        box.appendChild(asset);

        box.addEventListener('click', (evt) => {
            
        })
    })
}


generator ();