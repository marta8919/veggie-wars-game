
function drawPlate(){
    ctx.drawImage(plate, plateX, canvas.height-plateHeight, plateWidth, plateHeight)
}


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
    obstacle = [{x:0, y:0}]
    chuletaArr = [{x:10, y:0}]
    eggplantArr = [{x:70, y:0}]
    bananasArr = [{x:90, y:0}]
    music.pause()
    canvas.classList.add('hidden')
    pausebtn.classList.add('hidden')
    cardFinalScore.classList.add('hidden')
    clearInterval(intervalID)
}

function greatGame(){
    music.pause()
    canvas.classList.add('hidden')
    pausebtn.classList.add('hidden')
    cardFinalScore.classList.add('hidden')
    clearInterval(intervalID)
    greatGameCard.classList.remove('hidden')
}
 


function generateObstacle(img, array){

    for (let i = 0; i < array.length; i++){
        ctx.drawImage(img, array[i].x, array[i].y, obsWidth, obsHeight)
        array[i].y += incrementY

        if (array.length < 10){
            if (array[i].y == 100){
                array.push({
                    x: Math.floor(Math.random()*canvas.width-obsWidth),
                    y: 0
                })
            }
        }

        if (array[i].y == canvas.height){
            array[i].y = 0
        }

        if ((array[i].y + plateHeight > canvas.height) && (array[i].x + obsWidth > plateX && array[i].x < plateX+plateWidth)) {
            stopGame()
            gameoverCard.classList.remove('hidden')
            yell.play()
        }

    }

    finalScore.innerHTML = 'Score : ' + score
}


function generatePoint (img, array){
    for (let i = 0; i < array.length; i++){
        ctx.drawImage(img, array[i].x, array[i].y, obsWidth, obsHeight)
        array[i].y += incrementY

        if (array.length < 4){
            if(array[i].y == 100){
                array.push({
                    x:Math.floor(Math.random()*canvas.width-obsWidth),
                    y: 0
                })
            }
        }

        if(array[i].y == canvas.height){
            array[i].y = 0
        }

        if ((array[i].y + plateHeight > canvas.height) && (array[i].x + obsWidth > plateX && array[i].x < plateX+plateWidth)) {
            score++
            array.slice(i, 1)
            console.log(score)
        }

    }

    finalScore.innerHTML = 'Score : ' + score
}


function draw(){

    ctx.drawImage(backImg, 0 , 0)
    drawPlate()

    if (isRightArrow && (plateX + plateWidth <= canvas.width)) {
        plateX += incrementPlate
    }
    else if (isLeftArrow && plateX > 0) {
        plateX -= incrementPlate
    }

    generateObstacle(pollo, obstacle)
    generateObstacle(chuleta, chuletaArr)
    generatePoint(banana, bananasArr)
    generatePoint(eggplant, eggplantArr)

    if (score == 20){
        greatGame()
        stopGame()
        trumpetsSound.play()
    }

}



function startGame(){
    intervalID = setInterval(() => {
        requestAnimationFrame(draw)
    }, 100)
}


//BTN EVENT LISTENERS

start.addEventListener('click', ()=>{
    music.play()
    introCard.classList.add('hidden')
    canvas.classList.remove('hidden')
    cardFinalScore.classList.remove('hidden')
    //pausebtn.classList.remove('hidden')
    startGame()
})


restart.addEventListener('click', ()=>{
    gameoverCard.classList.add('hidden')
    canvas.classList.remove('hidden')
    pausebtn.classList.remove('hidden')
    cardFinalScore.classList.remove('hidden')
    music.play()
    startGame()
    score = 0
})

startAgain.addEventListener('click', ()=>{
    greatGameCard.classList.add('hidden')
    canvas.classList.remove('hidden')
    pausebtn.classList.remove('hidden')
    cardFinalScore.classList.remove('hidden')
    music.play()
    score = 0
    startGame()
})


pausebtn.addEventListener('click', ()=>{
    music.pause()
    clearInterval(intervalID)
})
