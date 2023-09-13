'use strict'


const bodySelect = document.querySelector('body')
const secretN = document.querySelector('.secret')
const userInput = document.querySelector('.userInput')
const btnCheck = document.querySelector('.checkBtn')
const btnReplay = document.querySelector('.replay')
const position = document.getElementById('position')
const scoreSelect = document.getElementById('score')
const highScoreSelect = document.getElementById('highScore')

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

userInput.addEventListener('input', function() {
if (userInput.value.length === 0) {
    btnCheck.disabled = true
} else if (Number(userInput.value) < 1 || Number(userInput.value) > 20){
    btnCheck.disabled = true
} else {
    btnCheck.disabled = false
}
})


btnCheck.addEventListener('click', function() {
    const userGuess = Number(userInput.value)
    
    if (!userGuess) {
        position.textContent = ('⬅️ Entre un nombre')
    } else if (userGuess===secretNumber) {
        position.textContent = ('Correct!')
        bodySelect.classList.add('victory')
        btnCheck.classList.add('victoryBtn')
        btnReplay.classList.add('victoryBtn')
        userInput.classList.add('victoryInput')
        secretN.classList.add('victorySecret')
        document.querySelector('h1').classList.add('victoryh1')
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
    score = 20
    secretNumber = Math.trunc(Math.random() * 20) +1

    secretN.textContent = '?'
    position.textContent = 'Devine...'
    scoreSelect.textContent = score
    userInput.value = ''

    bodySelect.classList.remove('victory')
    btnCheck.classList.remove('victoryBtn')
    btnReplay.classList.remove('victoryBtn')
    userInput.classList.remove('victoryInput')
    secretN.classList.remove('victorySecret')
    document.querySelector('h1').classList.remove('victoryh1')
    btnCheck.disabled = false
})