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

let greatGameCard = document.querySelector('#greatGame')

let levelCard = document.querySelector('#level')

//IMG
let backImg = document.createElement('img')
backImg.src= 'images/background.png'

let pollo = document.createElement('img')
pollo.src = 'images/pollo.png'

let fish = document.createElement('img')
fish.src = 'images/fish.png'

let obstacle = [{x:0, y:0}]
let chuletaArr = [{x:100, y:0}]
let fishArr = [{x:800, y:0}]
let bananasArr = [{x:190, y:0}]
let eggplantArr = [{x:640, y:0}]

let plate = document.createElement('img')
plate.src= 'images/plate.png'


let eggplant = document.createElement('img')
eggplant.src= 'images/eggplant.png'

let obsWidth = 30;
let obsHeight = 30;

let chuleta = document.createElement('img')
chuleta.src= 'images/chuleta.png'

let banana = document.createElement('img')
banana.src= 'images/banana.png'

//MUSIC
let music = document.querySelector('#sound')
let yell = document.querySelector('#yell')
let trumpetsSound = document.querySelector('#trumpetsSound')


//CANVAS

let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

//COORDINATES
let incrementY = 5
let incrementYObs = 10
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


