//GETTING ITEMS
const computerChoiceDisplay = document.getElementById('computer-choice')
const playerChoiceDisplay = document.getElementById('player-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
const computerEmojiDisplay = document.getElementById('computer-emoji')
const playerEmojiDisplay = document.getElementById('player-emoji')
const rockButton = document.getElementById('rock')
const paperButton = document.getElementById('paper')
const scissorsButton = document.getElementById('scissors')

//VARIABLES
let playerChoice
let computerChoice
let result
let playerEmoji
let computerEmoji

//MAIN FUNCTION
possibleChoices.forEach(possibleChoices =>
	possibleChoices.addEventListener('click', e => {
		playerChoice = e.target.id
		playerChoiceDisplay.innerHTML = playerChoice
		addEmojiPlayer()
		generateComputerChoice()
		getResult()
	})
)

function addEmojiPlayer() {
	if (playerChoice === 'ROCK') {
		playerEmoji = '&#129704'
	}
	if (playerChoice === 'PAPER') {
		playerEmoji = '&#128195'
	}
	if (playerChoice === 'SCISSORS') {
		playerEmoji = '&#9986;'
	}
	playerEmojiDisplay.innerHTML = playerEmoji
}

function generateComputerChoice() {
	const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
	if (randomNumber === 1) {
		computerChoice = 'ROCK'
		computerEmoji = '&#129704'
	}
	if (randomNumber === 2) {
		computerChoice = 'PAPER'
		computerEmoji = '&#128195'
	}
	if (randomNumber === 3) {
		computerChoice = 'SCISSORS'
		computerEmoji = '&#9986;'
	}
	computerChoiceDisplay.innerHTML = computerChoice
	computerEmojiDisplay.innerHTML = computerEmoji
}

function getResult() {
	if (computerChoice === playerChoice) {
		result = 'DRAW!'
	}
	if (computerChoice === 'ROCK' && playerChoice === 'PAPER') {
		result = 'You WIN!'
	}
	if (computerChoice === 'ROCK' && playerChoice === 'SCISSORS') {
		result = 'You LOST!'
	}
	if (computerChoice === 'PAPER' && playerChoice === 'SCISSORS') {
		result = 'You WIN!'
	}
	if (computerChoice === 'PAPER' && playerChoice === 'ROCK') {
		result = 'You LOST!'
	}
	if (computerChoice === 'SCISSORS' && playerChoice === 'PAPER') {
		result = 'You LOST!'
	}
	if (computerChoice === 'SCISSORS' && playerChoice === 'ROCK') {
		result = 'You WIN!'
	}
	if (result === 'You WIN!') {
		resultDisplay.style.color = 'green'
	}
	if (result === 'You LOST!') {
		resultDisplay.style.color = 'red'
	}
	if (result === 'DRAW!') {
		resultDisplay.style.color = 'yellow'
	}
	resultDisplay.innerHTML = result
	// Add jello-horizontal animation to the resultDisplay element
}
