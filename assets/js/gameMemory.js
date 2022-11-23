console.log("hej")

/*imgArray[0] = new Image();
imgArray[0].src = 'img/jack-closed-small.png';

imgArray[1] = new Image();
imgArray[1].src = 'img/jack-open-small.png'; */


const startbtn = document.querySelector("#startbtn");
const memoryboard = document.querySelector("#memoryboard");
const memoryTimer = document.querySelector("#memoryTimer");
const moves = document.querySelector("#moves");
const memoryGameBoard = document.querySelector("#memoryGameBoard");
//all the needed variables

const gameStart = new Boolean;
gameStart = false;
const twoFlip = null;
const totalFLip = null;
const loop = null;







/*    <div id="memoryGame">
        <div id="memoryControls">
            <button id="startbtn">start</button>
            <div id="memoryCounter">
                <div id="moves">moves</div>
                <div id="memoryTimer">time</div>
            </div>
        </div>
        <div id="memoryGameBoard">
            <div id="memoryboard" data-dimension="6">
                <div id="pices">
                    <div id="front"></div>
                    <div id="back">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>


    body{
    
    background-image: url(../images/memory/memoryBackground.jpg);
}
div{
    color: blue;
}

#memoryGame{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: calc(100% / 6 - 15px);
    width:  calc(100% / 6 -15px);
    height: 650px;
    width: 650px;
}

#memoryControls {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
}
button {
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    border: 0;
}

#memoryGameBoard{
    position: relative;
}

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