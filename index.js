
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
    fishArr = [{x:800, y:0}]
    music.pause()
    clearInterval(intervalID)
    canvas.classList.add('hidden')
    pausebtn.classList.add('hidden')
    playbtn.classList.add('hidden')
    cardFinalScore.classList.add('hidden')
    levelCard.classList.add('hidden')
    scoreGameOverCard.innerHTML= `Your score is ${score} and you are at ${levelCard.innerHTML} .`
}

function greatGame(){
    music.pause()
    trumpetsSound.play()
    canvas.classList.add('hidden')
    pausebtn.classList.add('hidden')
    cardFinalScore.classList.add('hidden')
    levelCard.classList.add('hidden')
    playbtn.classList.add('hidden')
    clearInterval(intervalID)
    greatGameCard.classList.remove('hidden')
    obstacle = [{x:0, y:0}]
    chuletaArr = [{x:10, y:0}]
    eggplantArr = [{x:70, y:0}]
    bananasArr = [{x:90, y:0}]
    fishArr = [{x:800, y:0}]
    startGame()
}

function generateObstacle(img, array){

    for (let i = 0; i < array.length; i++){
        ctx.drawImage(img, array[i].x, array[i].y, obsWidth, obsHeight)
        array[i].y += incrementYObs

        if (array.length < 8){
            if (array[i].y == 100){
                array.push({
                    x: Math.floor(Math.random()*canvas.width-obsWidth),
                    y: 0
                })
            }
        }

        if (array[i].y == canvas.height){
            array[i].y = 0
            array[i].x = Math.floor(Math.random()*canvas.width)
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

        if (array.length < 8){
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

        if ((array[i].y + obsHeight > canvas.height-plateHeight) && (array[i].x + obsWidth > plateX && array[i].x < plateX+plateWidth)) {
            score ++
            array[i].y = -10
            array[i].x = Math.floor(Math.random()*canvas.width)
            array.slice(i, 1)
        }

    }

    finalScore.innerHTML = 'Score : ' + score
}


function draw(){

    ctx.drawImage(backImg, 0 , 0)
    

    if (isRightArrow && (plateX + plateWidth <= canvas.width)) {
        plateX += incrementPlate
    }
    else if (isLeftArrow && plateX > 0) {
        plateX -= incrementPlate
    }

    generateObstacle(pollo, obstacle)
    generatePoint(banana, bananasArr)
    generatePoint(eggplant, eggplantArr)

    drawPlate()
    
    if(score < 5){
        levelCard.innerHTML= 'Level 1 : Dinner with friends'
    } else if (score > 5 && score < 10){
        levelCard.innerHTML = 'Level 2 : Christmas dinner'
        generateObstacle(fish, fishArr)
    } else if (score > 10 && score < 14){
        levelCard.innerHTML = 'Level 3 : BBQ'
        generateObstacle(chuleta, chuletaArr)
        generateObstacle(fish, fishArr)
    } 
    
    if (score == 15){
        generateObstacle(chuleta, chuletaArr)
        generateObstacle(fish, fishArr)
        greatGame()
    }
}

function startGame(){
    intervalID = setInterval(() => {
        requestAnimationFrame(draw)
    }, 90)
}


//BTN EVENT LISTENERS

start.addEventListener('click', ()=>{
    music.play()
    introCard.classList.add('hidden')
    canvas.classList.remove('hidden')
    cardFinalScore.classList.remove('hidden')
    levelCard.classList.remove('hidden')
    pausebtn.classList.remove('hidden')
    playbtn.classList.remove('hidden')
    startGame()
})


restart.addEventListener('click', ()=>{
    gameoverCard.classList.add('hidden')
    canvas.classList.remove('hidden')
    pausebtn.classList.remove('hidden')
    playbtn.classList.remove('hidden')
    cardFinalScore.classList.remove('hidden')
    levelCard.classList.remove('hidden')
    music.play()
    score = 0
    startGame()
})

startAgain.addEventListener('click', ()=>{
    greatGameCard.classList.add('hidden')
    canvas.classList.remove('hidden')
    pausebtn.classList.remove('hidden')
    playbtn.classList.remove('hidden')
    levelCard.classList.remove('hidden')
    cardFinalScore.classList.remove('hidden')
    music.load()
    music.play()
    score = 0
})


pausebtn.addEventListener('click', ()=>{
    music.pause()
})

playbtn.addEventListener('click', ()=>{
    music.play()
})

// window.addEventListener('load', ()=>{
//     startGame()
// })