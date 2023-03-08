const computerChoiceDisplay = document.getElementById('computer-choice')
const playerChoiceDisplay = document.getElementById('player-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

let playerChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoices =>
	possibleChoices.addEventListener('click', e => {
		playerChoice = e.target.id
		playerChoiceDisplay.innerHTML = playerChoice
		generateComputerChoice()
		getResult()
	})
)

function generateComputerChoice() {
	const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
	if (randomNumber === 1) {
		computerChoice = 'ROCK'
	}
	if (randomNumber === 2) {
		computerChoice = 'PAPER'
	}
	if (randomNumber === 3) {
		computerChoice = 'SCISSORS'
	}
	computerChoiceDisplay.innerHTML = computerChoice
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
	resultDisplay.innerHTML = result
}
