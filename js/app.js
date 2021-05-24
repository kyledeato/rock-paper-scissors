const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
const userScoreDisplay = document.getElementById("user-score");
const computerScoreDisplay = document.getElementById("computer-score");
const gifResult = document.getElementById('gif-result');
let userScore = 0;
let computerScore = 0;
let userChoice;
let computerChoice;
let result;

//Game
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult()
    updateScore(result);
    document.getElementById('gif-result').style.display = "none";
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1){
        computerChoice = "rock";
    }
    if (randomNumber === 2){
        computerChoice = 'scissors';
    }
    if (randomNumber === 3){
        computerChoice = 'paper';
    }
    console.log(computerChoice)
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if (computerChoice === userChoice){
        result = "it's a draw!";
    }
    if (computerChoice === 'rock' && userChoice === 'paper'){
        result = 'you win!'
    }
    if (computerChoice === 'rock' && userChoice === 'scissors'){
        result = 'you lose!'
    }
    if (computerChoice === 'paper' && userChoice === 'scissors'){
        result = 'you win!'
    }
    if (computerChoice === 'paper' && userChoice === 'rock'){
        result = 'you lose!'
    }
    if (computerChoice === 'scissors' && userChoice === 'rock'){
        result = 'you win!'
    }
    if (computerChoice === 'scissors' && userChoice === 'paper'){
        result = 'you lose!'
    }
    resultDisplay.innerHTML = result;
}

//scoreboard
function updateScore(winner){
    if (winner === 'you win!'){
        userScore++;
        document.getElementById('gif-content').style.backgroundImage = "url(./images/win.gif)"
    } if (winner === 'you lose!') {
        computerScore++;
        document.getElementById('gif-content').style.backgroundImage = "url(./images/lose.gif)"
    }
    if (winner === 'it\'s a draw!') {
        document.getElementById('gif-content').style.backgroundImage = "url(./images/draw.gif)"
    }
    userScoreDisplay.innerHTML = userScore;
    computerScoreDisplay.innerHTML = computerScore;
}