document.addEventListener("DOMContentLoaded", () => {
      const words = ["apple", "banana", "grape", "orange", "mango", "peach", "kiwi"];
      let secretWord, attemptsLeft;

      const inputElement = document.getElementById("guessInput");
      const messageElement = document.getElementById("message");
      const hintElement = document.getElementById("hint");
      const submitButton = document.getElementById("submitBtn");
      const restartButton = document.getElementById("restartBtn");

      function startGame() {
        secretWord = words[Math.floor(Math.random() * words.length)];
        attemptsLeft = 5;
        messageElement.textContent = "";
        hintElement.textContent = `Hint: The word starts with '${secretWord.charAt(0).toUpperCase()}'`;
        inputElement.value = "";
        inputElement.disabled = false;
        document.body.className = "";
        console.log("New secret word:", secretWord); // For testing
      }

      function checkGuess() {
        let userGuess = inputElement.value.trim().toLowerCase();

        if (!userGuess) {
          attemptsLeft--;
          messageElement.textContent = `Incorrect guess. You have ${attemptsLeft} attempts left. Try again!`;
        } else if (userGuess === secretWord) {
          messageElement.textContent = "Congratulations! You guessed the secret word!";
          document.body.className = "win";
          inputElement.disabled = true;
        } else {
          attemptsLeft--;
          if (attemptsLeft > 0) {
            messageElement.textContent = `Incorrect guess. You have ${attemptsLeft} attempts left. Try again!`;
          } else {
            messageElement.textContent = `Game over! The secret word was '${secretWord}'.`;
            document.body.className = "lose";
            inputElement.disabled = true;
          }
        }

        inputElement.value = "";
        inputElement.focus();
      }

      inputElement.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          checkGuess();
        }
      });

      submitButton.addEventListener("click", checkGuess);
      restartButton.addEventListener("click", startGame);

      startGame();
    });