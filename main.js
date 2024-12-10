let activePlayer = 1;
let scores = [0, 0];
let currentScore = 0; 



const player1ScoreElem = document.getElementById("score-1");
const player2ScoreElem = document.getElementById("score-2");
const player1CurrentElem = document.getElementById("current-1");
const player2CurrentElem = document.getElementById("current-2");
const diceElem = document.getElementById("dice");
const rollButton = document.getElementById("roll-dice");
const holdButton = document.getElementById("hold");
const resetButton = document.getElementById("reset");
const player1Section = document.getElementById("player-1");
const player2Section = document.getElementById("player-2");


function rollDice() {
    const diceRoll = Math.floor(Math.random() * 6) + 1; 
    showDiceImage(diceRoll);
    if (diceRoll === 1) {
        
        currentScore = 0;
        updateCurrentScore();
        switchPlayer();
    } else {
        
        currentScore += diceRoll;
        updateCurrentScore();
    }
}

function showDiceImage(diceRoll) {

    const allDiceImages = document.querySelectorAll(`.bild, .bildd`);
    allDiceImages.forEach(img => img.style.opacity = "0"); 

    if (activePlayer === 1) {
        document.querySelector(`.bild[src="taerning${diceRoll}.jpg"]`).style.opacity = "1";
    } else {
        document.querySelector(`.bildd[src="taerning${diceRoll}.jpg"]`).style.opacity = "1";
    }
}


function updateCurrentScore() {
    if (activePlayer === 1) {
        player1CurrentElem.textContent = `Current: ${currentScore}`;
    } else {
        player2CurrentElem.textContent = `Current: ${currentScore}`;
    }
}


function holdScore() {
    scores[activePlayer - 1] += currentScore; 
    currentScore = 0; 
    updateScores();
    if (scores[activePlayer - 1] >= winningScore) {
        endGame();
    } else {
        switchPlayer();
    }
}


function updateScores() {
    player1ScoreElem.textContent = scores[0];
    player2ScoreElem.textContent = scores[1];
}

function switchPlayer() {
    activePlayer = activePlayer === 1 ? 2 : 1;
    player1Section.classList.toggle("active");
    player2Section.classList.toggle("active");
}




rollButton.addEventListener("click", rollDice);
holdButton.addEventListener("click", holdScore);



