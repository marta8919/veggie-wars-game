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
let chuletaArr = [{x:10, y:0}]
let avocadosArr = [{x:70, y:0}]
let bananasArr = [{x:90, y:0}]

let plate = document.createElement('img')
plate.src= 'images/plate.png'

let avocado = document.createElement('img')
avocado.src = 'images/avocado.png'

let obsWidth = 30;
let obsHeight = 30;

let chuleta = document.createElement('img')
chuleta.src= 'images/chuleta.png'

let banana = document.createElement('img')
banana.src= 'images/banana.png'

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

