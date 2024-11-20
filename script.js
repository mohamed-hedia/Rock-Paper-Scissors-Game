// Select elements
const messageEl = document.getElementById("message");
const playerChoiceEl = document.getElementById("player-choice");
const computerChoiceEl = document.getElementById("computer-choice");
const resultEl = document.getElementById("result");
const playAgainContainer = document.getElementById("play-again-container");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");

const choices = ["Rock", "Paper", "Scissors"];
const buttons = document.querySelectorAll(".choice");

// Add event listeners
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = button.id.charAt(0).toUpperCase() + button.id.slice(1);
    playGame(playerChoice);
  });
});

// Play the game
function playGame(playerChoice) {
  const computerChoice = getComputerChoice();
  const result = determineWinner(playerChoice, computerChoice);

  // Update the UI
  playerChoiceEl.textContent = playerChoice;
  computerChoiceEl.textContent = computerChoice;

  if (result === "You win!") {
    displayWin();
  } else if (result === "Computer wins!") {
    displayLoss();
  } else {
    resultEl.textContent = result;
    messageEl.textContent = "It's a tie! Play again?";
  }

  // Show the play-again section
  playAgainContainer.classList.remove("hidden");
}

// Get random computer choice
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Determine winner
function determineWinner(player, computer) {
  if (player === computer) return "It's a tie!";
  if (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Paper" && computer === "Rock") ||
    (player === "Scissors" && computer === "Paper")
  ) {
    return "You win!";
  }
  return "Computer wins!";
}

// Display win
function displayWin() {
  resultEl.textContent = "";
  messageEl.innerHTML = "🎉 <b>Congratulations, you win!</b> 😊";
  launchSparkles();
}

// Display loss
function displayLoss() {
  resultEl.textContent = "";
  messageEl.innerHTML = "😢 <b>Sorry, you lost. try again!</b>";
}

// Launch sparkles on win
function launchSparkles() {
  const sparkles = document.createElement("div");
  sparkles.classList.add("sparkles");
  document.body.appendChild(sparkles);

  setTimeout(() => {
    sparkles.remove();
  }, 3000); // Remove sparkles after 3 seconds
}

// Play again handlers
yesBtn.addEventListener("click", () => {
  resetGame();
});

noBtn.addEventListener("click", () => {
  displayThanksForPlaying();
});

// Reset game
function resetGame() {
  playerChoiceEl.textContent = "-";
  computerChoiceEl.textContent = "-";
  resultEl.textContent = "-";
  messageEl.textContent = "Make your move!";
  playAgainContainer.classList.add("hidden");
}

// Display "Thanks for playing!" message
function displayThanksForPlaying() {
  document.body.innerHTML = `
        <div class="thanks-container">
            <p>Thanks for playing!</p>
        </div>
    `;
}
