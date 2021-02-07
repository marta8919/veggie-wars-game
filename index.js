
function drawPlate(){
    ctx.drawImage(plate, plateX, canvas.height-plateHeight, plateWidth, plateHeight)

    if (window.screen.width <= 600){
        plateWidth = 120;
        plateHeight = 90
    }
}

//event listeners for the movement of the plate
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

rightArrow.addEventListener('click', ()=>{
    if (plateX + plateWidth <= canvas.width){
        plateX += 40
    }
})

leftArrow.addEventListener('click',()=>{
    if (plateX > 0){
        plateX -= 40
    }  
})

//STOP GAME WHEN LOOSING

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
    groupArrowBtn.classList.add('hidden')
    scoreGameOverCard.innerHTML= `Your score is ${score} and you are at ${levelCard.innerHTML} .`
}

//GREAT GAME WHEN REACHING CERTAIN SCORE
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
    groupArrowBtn.classList.add('hidden')
    obstacle = [{x:0, y:0}]
    chuletaArr = [{x:10, y:0}]
    eggplantArr = [{x:70, y:0}]
    bananasArr = [{x:90, y:0}]
    fishArr = [{x:800, y:0}]
    startGame()
}

//CREATING OBSTACLES
function generateObstacle(img, array){

    for (let i = 0; i < array.length; i++){
        ctx.drawImage(img, array[i].x, array[i].y, obsWidth, obsHeight)

        if (window.screen.width <= 600){
            obsWidth = 90;
            obsHeight = 60
        }

        array[i].y += incrementYObs

        if (array.length < 6){
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

//CREATING ELEMENTS THAT INCREASES THE POINTS
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
            localStorage.setItem("score", score)
        }

    }

    finalScore.innerHTML = 'Score : ' + score
}

//MAIN FUNCTION
function draw(){

    ctx.drawImage(backImg, 0 , 0)
    

    if (isRightArrow && (plateX + plateWidth <= canvas.width)) {
        plateX += incrementPlate
    }
    else if (isLeftArrow && plateX > 0) {
        plateX -= incrementPlate
    }
    
    generatePoint(banana, bananasArr)
    generatePoint(apple, appleArr)
    generatePoint(eggplant, eggplantArr)
    generateObstacle(pollo, obstacle)

    drawPlate()
    
    if(score < 5){
        levelCard.innerHTML= 'Level 1 : Dinner with friends'
    } else if (score > 5 && score < 10){
        levelCard.innerHTML = 'Level 2 : Christmas dinner'
        generateObstacle(fish, fishArr)
    } else if (score >= 10 && score < 20){
        levelCard.innerHTML = 'Level 3 : BBQ'
        generateObstacle(chuleta, chuletaArr)
        generateObstacle(fish, fishArr)
    } 
    
    if (score >= 20){
        generateObstacle(chuleta, chuletaArr)
        generateObstacle(fish, fishArr)
        greatGame()
    }
}

//START GAME
function startGame(){
    intervalID = setInterval(() => {
        requestAnimationFrame(draw)
    }, 90)
}


//BTN EVENT LISTENERS
start.addEventListener('click', ()=>{
    pikachu.pause()
    music.play()
    introCard.classList.add('hidden')
    canvas.classList.remove('hidden')
    cardFinalScore.classList.remove('hidden')
    levelCard.classList.remove('hidden')
    pausebtn.classList.remove('hidden')
    playbtn.classList.remove('hidden')
    groupArrowBtn.classList.remove('hidden')
    startGame()
})


restart.addEventListener('click', ()=>{
    gameoverCard.classList.add('hidden')
    canvas.classList.remove('hidden')
    pausebtn.classList.remove('hidden')
    playbtn.classList.remove('hidden')
    cardFinalScore.classList.remove('hidden')
    levelCard.classList.remove('hidden')
    groupArrowBtn.classList.remove('hidden')
    trumpetsSound.pause()
    music.load()
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
    groupArrowBtn.classList.remove('hidden')
    music.load()
    music.play()
    score = 0
})

teamvalorbtn.addEventListener('click', ()=>{
    teamCard.classList.add('hidden')
    introCard.classList.remove('hidden')
    pikachu.play()
})


//MUSIC BTNS
pausebtn.addEventListener('click', ()=>{
    music.pause()
})

playbtn.addEventListener('click', ()=>{
    music.play()
})


//LOCAL STORAGE


// let itemsArray = localStorage.getItem('items')
//   ? JSON.parse(localStorage.getItem('items'))
//   : []

// itemsArray.push(score)

// console.log(itemsArray)

// localStorage.setItem('items', JSON.stringify(itemsArray))
// const data = JSON.parse(localStorage.getItem('items'))

// const liMaker = (text) => {
//    const li = document.createElement('li')
//    li.textContent = `Gamer : ${text}, Score : ${score}`
//    ul.appendChild(li)

//    localStorage.setItem('name', li)
//  }



// form.addEventListener('submit', function (e) {
//   e.preventDefault()

//   itemsArray.push(input.value)
//   localStorage.setItem('items', JSON.stringify(itemsArray))
//   liMaker(input.value)
//   input.value = ''
// })

// data.forEach((item) => {
//   liMaker(item)
// })

// clearBtn.addEventListener('click', function () {
//   localStorage.clear()
//   while (ul.firstChild) {
//     ul.removeChild(ul.firstChild)
//   }
// })
