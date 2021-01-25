//ELEMENTS
let start = document.querySelector('#start')
let restart = document.querySelector('#re-start')
let introCard = document.querySelector('#intro')

let gameoverCard = document.querySelector('#game-over')
let finalScore = document.querySelector('#finalScore')
let cardFinalScore = document.querySelector('#cardFinalScore')

let pausebtn = document.querySelector('#pausebtn')

//IMG
let backImg = document.createElement('img')
backImg.src= 'images/background.png'

let pollo = document.createElement('img')
pollo.src = 'images/pollo.png'

let obstacle = [{x:0, y:0}]

let plate = document.createElement('img')
plate.src= 'images/plate.png'

let obsWidth = 50;
let obsHeight = 50;

//MUSIC
let music = document.querySelector('#sound')
let yell = document.querySelector('#yell')

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

//Plate INFO
let plateX = 250
let plateWidth = 70
let plateHeight = 70

let incrementPlate = 30


//draw plate
function drawPlate(){
    ctx.drawImage(plate, plateX, canvas.height-plateHeight, plateWidth, plateHeight)
}

//plate movement
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


function stopGame(){
    obstacle = [{x: 0, y:0}]
    score = 0
    canvas.classList.add('hidden')
    gameoverCard.classList.remove('hidden')
    pausebtn.classList.add('hidden')
}
 
//Obstacles and score

function generateObstacle(){

    for (let i = 0; i < obstacle.length; i++){
        ctx.drawImage(pollo, obstacle[i].x, obstacle[i].y, obsWidth, obsHeight)
        obstacle[i].y += incrementY

        if (obstacle[i].y == 50){
            obstacle.push({
                x: Math.floor(Math.random()*canvas.width-pollo.width),
                y: 0
            })
        }

        if ((obstacle[i].y + obsHeight > canvas.height-plateWidth)&& (obstacle[i].x+obsWidth > plateX && obstacle[i].x < plateX+plateWidth)) {
            stopGame()
            music.pause()
            yell.play()
        }

        if (obstacle[i].y == canvas.height){
            score ++
            console.log(score)//increase score
        }
    }

    finalScore.innerHTML = score

}//end of the function


//draw function
function draw(){//beginning of draw function

    ctx.drawImage(backImg, 0 , 0)
    drawPlate()

    if (isRightArrow && (plateX + plateWidth < canvas.width)) {
        plateX += incrementPlate
    }
    else if (isLeftArrow && plateX > 0) {
        plateX -= incrementPlate
    }

    generateObstacle()

}//end of draw function

//start game with interval
function startGame(){//beginning startGame function
    intervalID = setInterval(() => {
        requestAnimationFrame(draw)
    }, 80)
}//end of startGame function


//BTN EVENT LISTENERS
//start first screen
start.addEventListener('click', ()=>{
    music.play()
    introCard.classList.add('hidden')
    canvas.classList.remove('hidden')
    cardFinalScore.classList.remove('hidden')
    pausebtn.classList.remove('hidden')
    startGame()
})

//re-start last screen
restart.addEventListener('click', ()=>{
    gameoverCard.classList.add('hidden')
    canvas.classList.remove('hidden')
    pausebtn.classList.remove('hidden')
})

//pause btn
pausebtn.addEventListener('click', ()=>{
    music.pause()
    clearInterval(intervalID)
    pausebtn.innerHTML = 'Re-Start'
})
