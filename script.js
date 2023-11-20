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

const player = {
  score: '',
  highscore: 0,
  secret: 0,

  reset () {
    secretNumber = Math.trunc(Math.random() * 20) + 1
    score = 20
  }
}

let secretNumber = player.secret
let score = player.score
let highscore = player.highscore

player.reset()

userInput.addEventListener('input', function () {
  const numValue = Number(userInput.value)
  btnCheck.disabled = numValue > 20 || numValue < 1
})

btnCheck.addEventListener('click', function () {
  const userGuess = Number(userInput.value)

  if (userGuess === secretNumber) {
    position.textContent = ('Correct!')
    bodySelect.classList.add('victory')
    btnCheck.classList.add('btn--victory')
    btnReplay.classList.add('btn--victory')
    userInput.classList.add('input--victory')
    secretN.classList.add('secret--victory')
    title.classList.add('victory--h1')
    secretN.textContent = secretNumber
    btnCheck.disabled = true
    userInput.disabled = true
    if (score > highscore) {
      highscore = score
      highScoreSelect.textContent = highscore
    }
  } else {
    if (score > 1) {
      position.textContent = userGuess > secretNumber ? 'Trop haut' : 'Trop bas'
    } else {
      position.textContent = 'Perdu!'
      btnCheck.disabled = true
    }
    score--
    scoreSelect.textContent = score
  }
})

btnReplay.addEventListener('click', function () {
  player.reset()

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
  userInput.disabled = false
})
