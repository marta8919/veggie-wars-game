//ELEMENTS
let start = document.querySelector('#start')
let restart = document.querySelector('#re-start')
let introCard = document.querySelector('#intro')
let startAgain = document.querySelector('#startAgain')
let gameoverCard = document.querySelector('#game-over')
let finalScore = document.querySelector('#finalScore')
let cardFinalScore = document.querySelector('#cardFinalScore')
let scoreGameOverCard = document.querySelector('#scoreGameOverCard')
let pausebtn = document.querySelector('#pausebtn')
let playbtn = document.querySelector('#playbtn')
let greatGameCard = document.querySelector('#greatGame')
let levelCard = document.querySelector('#level')
let score = 0
let intervalID = 0 

let teamvalorbtn = document.querySelector('#teamvalor')
let teamCard = document.querySelector('#teamcard')

//IMG
let backImg = document.createElement('img')
backImg.src= 'images/background.png'

let pollo = document.createElement('img')
pollo.src = 'images/pollo.png'

let fish = document.createElement('img')
fish.src = 'images/fish.png'

let plate = document.createElement('img')
plate.src= 'images/plate.png'

let eggplant = document.createElement('img')
eggplant.src= 'images/eggplant.png'

let chuleta = document.createElement('img')
chuleta.src= 'images/chuleta.png'

let banana = document.createElement('img')
banana.src= 'images/banana.png'

let team = document.querySelector('#team')

let apple = document.createElement('img')
apple.src= 'images/apple.png'

//COORDINATES OF THE ITEMS
let obstacle = [{x:0, y:0}]
let chuletaArr = [{x:100, y:0}]
let fishArr = [{x:800, y:0}]
let bananasArr = [{x:190, y:0}]
let eggplantArr = [{x:640, y:0}]
let appleArr = [{x:900, x:0}]

let incrementY = 5
let incrementYObs = 10
let incrementX = 10
let isLeftArrow = false
let isRightArrow = false

//SIZE OF THE OBSTACLES
let obsWidth = 40;
let obsHeight = 40;


//MUSIC
let music = document.querySelector('#sound')
let yell = document.querySelector('#yell')
let trumpetsSound = document.querySelector('#trumpetsSound')
let pikachu = document.querySelector('#pikachu')

music.volume = 0.10
yell.volume = 0.10

//CANVAS
let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

//Plate INFO
let plateX = 250
let plateWidth = 90
let plateHeight = 90
let incrementPlate = 30

//ARROW BTNS

let rightArrow = document.querySelector('#arrowRight')
let leftArrow = document.querySelector('#arrowLeft')
let groupArrowBtn = document.querySelector('#arrowBtnGroup')

//LOCAL STORAGE

// const form = document.querySelector('form')
// const ul = document.querySelector('ul')
// const input = document.getElementById('item')   
// const clearBtn = document.querySelector('#clear')
