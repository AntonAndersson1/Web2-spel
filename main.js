let activePlayer = 1;
let scores = [0, 0];
let currentScore = 0; 


//Detta är alla variabler vi har hämtat från html
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
const winningScore = 50;


function rollDice() {
    if (scores[0] >= winningScore || scores[1] >= winningScore) return;
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

resetButton.addEventListener("click", () => {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 1;
    player1ScoreElem.textContent = 0;
    player2ScoreElem.textContent = 0;
    player1CurrentElem.textContent = 'Current: 0';
    player2CurrentElem.textContent = 'Current: 0';
    player1Section.classList.add("active");
    player2Section.classList.remove("active");
    rollButton.disabled = false;
    holdButton.disabled = false;
});


rollButton.addEventListener("click", rollDice);
holdButton.addEventListener("click", holdScore);


function endGame() {
    if (scores[0] >= winningScore) {
      alert("Player 1 won!");
    } else if (scores[1] >= winningScore) {
      alert("Player 2 won!");
    }
    rollButton.disabled = true;
    holdButton.disabled = true;
};
