'use strict'

const bodySelect = document.querySelector('body')
const secretN = document.querySelector('.secret')
const userInput = document.querySelector('.userInput')
const btnCheck = document.querySelector('.checkBtn')
const btnReplay = document.querySelector('.replay')
const position = document.querySelector('.position')
const scoreSelect = document.querySelector('.score')
const highScoreSelect = document.querySelector('.highScore')

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

