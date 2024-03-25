const riddles = [
    { question: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?", answer: "echo" },
    { question: "The more you take, the more you leave behind. What am I?", answer: "footsteps" },
    { question: "What has keys but can't open locks?", answer: "piano" },
    { question: "What can be cracked, made, told, and played? ", answer: "joke" },
    { question: "What comes once in a minute, twice in a moment, but never in a thousand years?", answer: "the letter 'M'" },
    { question: "What has a head, a tail, is brown, and has no legs?", answer: "penny" },
    { question: "The more you take, the more you leave behind. What am I?", answer: "time" },
    { question: "What can travel around the world while staying in a corner?", answer: "stamp" },
    { question: "I'm not alive, but I can grow; I don't have lungs, but I need air; I don't have a mouth, but water kills me. What am I?", answer: "fire" },
    { question: "What has a neck but no head?", answer: "bottle" },
    { question: "What has one eye but can't see?", answer: "needle" },
    { question: "What gets wetter as it dries?", answer: "towel" }
  ];
  
  
  let currentRiddleIndex = 0;
let wrongAttempts = 0; // Track wrong attempts for the current riddle

document.getElementById('guessInput').addEventListener('keydown', function(event) {
  if (event.keyCode === 13) { // Check if the pressed key is Enter
    event.preventDefault(); // Prevent the default action (form submission)
    checkAnswer(); // Call the checkAnswer function
  }
});

function displayRiddle() {
  const riddleElement = document.getElementById('riddle');
  const currentRiddle = riddles[currentRiddleIndex];
  riddleElement.textContent = currentRiddle.question;
}

function checkAnswer() {
  const guess = document.getElementById('guessInput').value.trim().toLowerCase();
  const resultElement = document.getElementById('result');
  const currentRiddle = riddles[currentRiddleIndex];
  
  if (guess === currentRiddle.answer) {
    resultElement.textContent = "Correct! Well done!";
    
    // Trigger confetti animation
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      confetti.style.left = Math.random() * window.innerWidth + 'px';
      confetti.style.animationDelay = Math.random() * 3 + 's';
      document.body.appendChild(confetti);
    }
    
    setTimeout(function() {
      nextRiddle();
      clearConfetti();
    }, 2000); // Move to the next riddle after 2 seconds
  } else {
    resultElement.textContent = "Incorrect! Try again.";
    wrongAttempts++;
    if (wrongAttempts === 3) {
      resultElement.textContent = `Incorrect! The answer is ${currentRiddle.answer}. Moving to the next riddle.`;
      setTimeout(function() {
        nextRiddle();
      }, 2000); // Move to the next riddle after 2 seconds
    }
  }
}

function clearConfetti() {
  const confettiElements = document.querySelectorAll('.confetti');
  confettiElements.forEach(confetti => {
    confetti.remove();
  });
}

function nextRiddle() {
  currentRiddleIndex++;
  wrongAttempts = 0; // Reset wrong attempts for the next riddle
  if (currentRiddleIndex < riddles.length) {
    displayRiddle();
    document.getElementById('guessInput').value = ""; // Clear the input field
    document.getElementById('result').textContent = ""; // Clear the result message
  } else {
    document.getElementById('riddle-container').innerHTML = "<p>Congratulations! You've solved all the riddles.</p>";
  }
}

displayRiddle();


  
