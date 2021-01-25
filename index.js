//ELEMENTS
let start = document.querySelector('#start')
let restart = document.querySelector('#re-start')
let introCard = document.querySelector('#intro')
let gameoverCard = document.querySelector('#game-over')
let finalScore = document.querySelector('#finalScore')
let cardFinalScore = document.querySelector('#cardFinalScore')


//IMG
let backImg = document.createElement('img')
backImg.src= 'images/background.png'
let pollo = document.createElement('img')
pollo.src = 'images/pollo.png'
let obstacle = [{x:0, y:0}]
let plate = document.createElement('img')
plate.src= 'images/plate.png'


//CANVAS
let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')


//COORDINATES
let incrementY = 5
let incrementX = 10
let isLeftArrow = false
let isRightArrow = false


let score = 0
let intervalID = 0 

//PADDLE INFO
let paddleX = 250
let paddleWidth = 50
let paddleHeight = 20
let incrementPaddle = 30

//draw paddle
function drawPlate(){
    ctx.drawImage(plate, paddleX, canvas.height-plate.height)
}

//paddle movement
document.addEventListener('keydown', (event) =>{
    if (event.keyCode == 39 || event.key == "ArrowRight") {
        isRightArrow = true;
        isLeftArrow = false;
     }
     else if (event.keyCode == 37 || event.key == "ArrowLeft") {
        isRightArrow = false;
        isLeftArrow = true;
     }
})

document.addEventListener('keyup', (event) => {
    isRightArrow = false;
    isLeftArrow = false;
})

console.log(paddleX)


function generateObstacle(){

    for (let i = 0; i < obstacle.length; i++){
        ctx.drawImage(pollo, obstacle[i].x, obstacle[i].y)
        obstacle[i].y += incrementY

        if (obstacle[i].y == 50){
            obstacle.push({
                x: Math.floor(Math.random()*canvas.width-pollo.width),
                y: 0
            })
        }

        if ((obstacle[i].x > paddleX && obstacle[i].x < paddleX + plate.width)&&(obstacle[i].y == canvas.height-plate.height)){
            clearInterval(intervalID)
            alert('Game over')
        }

        if (obstacle[i].y == canvas.height){
            score ++
            console.log(score)//increase score
        }
    }

    finalScore.innerHTML = score

}//end of the function



function draw(){//beginning of draw function

    ctx.drawImage(backImg, 0 , 0)
    drawPlate()

    //limits of the paddle
    if (isRightArrow && (paddleX + paddleWidth < canvas.width)) {
        paddleX += incrementPaddle
    }
    else if (isLeftArrow && paddleX > 0) {
        paddleX -= incrementPaddle
    }//end of the limits of the paddle

    generateObstacle()

}//end of draw function


function startGame(){//beginning startGame function
    // intervalID = setInterval(() => {
    //     requestAnimationFrame(draw)
    // }, 100)
}//end of startGame function


// window.addEventListener('load', ()=>{
//     startGame()
// })



//BTN EVENT LISTENERS

start.addEventListener('click', ()=>{
    introCard.classList.add('hidden')
    canvas.classList.remove('hidden')
    cardFinalScore.classList.remove('hidden')
    startGame()
})

// restart.addEventListener('click', ()=>{
//     gameoverCard.classList.add('nodisplay')
// })