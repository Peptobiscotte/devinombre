'use strict'

const title = document.querySelector('h1')
const bodySelect = document.querySelector('body')
const secretN = document.querySelector('.secret')
const userInput = document.querySelector('.user--input')
const btnCheck = document.querySelector('.btn--check')
const btnReplay = document.querySelector('.btn--replay')
const position = document.getElementById('position')
const scoreSelect = document.getElementById('score')
const highScoreSelect = document.getElementById('highScore')

let secretNumber
let score
let highscore = 0;

const setup = function (){
    secretNumber = Math.trunc(Math.random() * 20) + 1
    score = 20
}

setup()

userInput.addEventListener('input', function() {
    const numValue = Number(userInput.value)
btnCheck.disabled = numValue > 20 || numValue < 1
})


btnCheck.addEventListener('click', function() {
    const userGuess = Number(userInput.value)
    
    if (userGuess===secretNumber) {
        position.textContent = ('Correct!')
        bodySelect.classList.add('victory')
        btnCheck.classList.add('btn--victory')
        btnReplay.classList.add('btn--victory')
        userInput.classList.add('input--victory')
        secretN.classList.add('secret--victory')
        title.classList.add('victory--h1')
        secretN.textContent = secretNumber
        btnCheck.disabled = true
        if (score > highscore) {
            highscore = score
            highScoreSelect.textContent = highscore
        }
    } else if (userGuess !== secretNumber) {
        if (score > 1) {
       position.textContent = userGuess > secretNumber ? 'Trop haut' : 'Trop bas'
       score --
       scoreSelect.textContent = score
       }else {
        position.textContent = 'Perdu!'
        btnCheck.disabled = true
        scoreSelect.textContent = 0
       }
    }
})

btnReplay.addEventListener('click', function () {
    setup()

    secretN.textContent = '?'
    position.textContent = 'Devine...'
    scoreSelect.textContent = score
    userInput.value = ''

    bodySelect.classList.remove('victory')
    btnCheck.classList.remove('btn--victory')
    btnReplay.classList.remove('btn--victory')
    userInput.classList.remove('input--victory')
    secretN.classList.remove('secret--victory')
    document.querySelector('h1').classList.remove('victory--h1')
    btnCheck.disabled = false
})