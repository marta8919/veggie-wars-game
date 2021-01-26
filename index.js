
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
    avocadosArr = [{x:70, y:0}]
    bananasArr = [{x:90, y:0}]
    score = 0
    music.pause()
    canvas.classList.add('hidden')
    gameoverCard.classList.remove('hidden')
    pausebtn.classList.add('hidden')
    clearInterval(intervalID)
}
 


function generateObstacle(img){

    for (let i = 0; i < obstacle.length; i++){
        ctx.drawImage(img, obstacle[i].x, obstacle[i].y, obsWidth, obsHeight)
        obstacle[i].y += incrementY

        if (obstacle.length < 10){
            if (obstacle[i].y == 100){
                obstacle.push({
                    x: Math.floor(Math.random()*canvas.width-obsWidth),
                    y: 0
                })
                console.log(obstacle)
            }
        }

        if (obstacle[i].y == canvas.height){
            score ++
            console.log(score)//increase score
            obstacle[i].y = 0
        }

        if ((obstacle[i].y + obsHeight > canvas.height) && (obstacle[i].x + obsWidth > plateX && obstacle[i].x < plateX+plateWidth)) {
            stopGame()
            yell.play()
        }

    }

    finalScore.innerHTML = 'Score : ' + score

}


function generatePoint (img, array){
    for (let i = 0; i < array.length; i++){
        ctx.drawImage(img, array[i].x, array[i].y, obsWidth, obsHeight)
        array[i].y += incrementY

        if(array[i].y == 100){
            array.push({
                x:Math.floor(Math.random()*canvas.width-obsWidth),
                y: 0
            })
        }
    }
}


function draw(){

    ctx.drawImage(backImg, 0 , 0)
    drawPlate()

    if (isRightArrow && (plateX + plateWidth < canvas.width)) {
        plateX += incrementPlate
    }
    else if (isLeftArrow && plateX > 0) {
        plateX -= incrementPlate
    }

    generateObstacle(pollo, obstacle)
    generatePoint(banana, bananasArr)
    generatePoint(avocado, avocadosArr)

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
    pausebtn.classList.remove('hidden')
    startGame()
})


restart.addEventListener('click', ()=>{
    gameoverCard.classList.add('hidden')
    canvas.classList.remove('hidden')
    pausebtn.classList.remove('hidden')
    music.play()
    startGame()
})


pausebtn.addEventListener('click', ()=>{
    music.pause()
    clearInterval(intervalID)
    pausebtn.innerHTML = 'Re-Start'
})
