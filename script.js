'use strict'

const MIN_VALUE = 1
const MAX_VALUE = 20
const HEALTH = 20

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
  score: HEALTH,
  highscore: 0,
  secret: 0,

  reset () {
    this.score = 20
    this.secret = this.generateSecret()
  },

  updateHighScore () {
    if (this.score > this.highscore) {
      this.highscore = this.score
    }
  },

  generateSecret () {
    return Math.trunc(Math.random() * MAX_VALUE) + MIN_VALUE
  }
}

player.reset()

userInput.addEventListener('input', function () {
  const numValue = Number(userInput.value)
  btnCheck.disabled = numValue > 20 || numValue < 1
})

btnCheck.addEventListener('click', function () {
  const userGuess = Number(userInput.value)

  if (userGuess === player.secret) {
    position.textContent = ('Correct!')
    bodySelect.classList.add('victory')
    btnCheck.classList.add('btn--victory')
    btnReplay.classList.add('btn--victory')
    userInput.classList.add('input--victory')
    secretN.classList.add('secret--victory')
    title.classList.add('victory--h1')
    secretN.textContent = player.secret
    btnCheck.disabled = true
    userInput.disabled = true
    player.updateHighScore()
    highScoreSelect.textContent = player.highscore
  } else {
    if (player.score > 1) {
      position.textContent = userGuess > player.secret ? 'Trop haut' : 'Trop bas'
    } else {
      position.textContent = 'Perdu!'
      btnCheck.disabled = true
    }
    player.score--
    scoreSelect.textContent = player.score
  }
})

btnReplay.addEventListener('click', function () {
  player.reset()
  secretN.textContent = '?'
  position.textContent = 'Devine...'
  scoreSelect.textContent = player.score
  userInput.value = ''

  bodySelect.classList.remove('victory')
  btnCheck.classList.remove('btn--victory')
  btnReplay.classList.remove('btn--victory')
  userInput.classList.remove('input--victory')
  secretN.classList.remove('secret--victory')
  document.querySelector('h1').classList.remove('victory--h1')
  userInput.disabled = false
  userInput.focus()
})

window.addEventListener('load', () => {
  userInput.value = ''
  btnCheck.disabled = true
})
