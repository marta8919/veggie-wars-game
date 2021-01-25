//ELEMENTS
let start = document.querySelector('#start')
let restart = document.querySelector('#re-start')
let introCard = document.querySelector('#intro')
let gameoverCard = document.querySelector('#game-over')
let scoreResult = document.querySelectorAll('#scoreResult')

//CANVAS
let canvas = document.querySelector('canvas')
canvas.style.backgroundColor = "#f8ffe5"
let ctx = canvas.getContext('2d')
canvas.style.border = '2px solid black'

//POLLO
let pollo = document.createElement('img')
pollo.src = 'images/bird.png'
let obstacle = [{x:0, y:0}]

//COORDINATES
let incrementY = 10
let incrementX = 10
let isLeftArrow = false
let isRightArrow = false


let score = 0
let intervalID= 0 

//PADDLE INFO
let paddleX = 250
let paddleWidth = 50
let paddleHeight = 20
let incrementPaddle = 10

//draw paddle
function drawPaddle(){
    ctx.beginPath()
    ctx.fillStyle = "black"
    ctx.fillRect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight)
    ctx.closePath()
}

//paddle movement
document.addEventListener('keydown', (event)=>{
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


function draw(){//beginning of draw function

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawPaddle()

    //limits of the paddle
    if (isRightArrow && (paddleX + paddleWidth < canvas.width)) {
        paddleX += incrementPaddle
    }
    else if (isLeftArrow && paddleX > 0) {
        paddleX -= incrementPaddle
    }//end of the limits of the paddle

    for (let i = 0; i < obstacle.length; i++){
        ctx.drawImage(pollo, obstacle[i].x, obstacle[i].y)
        obstacle[i].y += incrementY

        if (obstacle[i].y == canvas.height){
            score ++
            console.log(score)
            obstacle[i].x = Math.floor(Math.random()*canvas.width)
            obstacle.push({
                x: Math.floor(Math.random()*canvas.width),
                y: 0
            })
        }
    }

}//end of draw function


function startGame(){//beginning startGame function
    intervalID = setInterval(() => {
        requestAnimationFrame(draw)
    }, 100)
}//end of startGame function


window.addEventListener('load', ()=>{
    startGame()
})



//BTN EVENT LISTENERS

// start.addEventListener('click', ()=>{
//     introCard.classList.add('hidden')
//     canvas.classList.remove('hidden')
//     startGame()
// })

// restart.addEventListener('click', ()=>{
//     gameoverCard.classList.add('nodisplay')
// })