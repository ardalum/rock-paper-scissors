"use strict";

const game = () => {
  let scoreUser = 0;
  let scoreComputer = 0;
  const rckBtn = document.querySelector(".btn1");
  const pprBtn = document.querySelector(".btn2");
  const scsBtn = document.querySelector(".btn3");
  const playerOptions = [rckBtn, pprBtn, scsBtn];

  document.querySelector(".your-score").textContent = scoreUser;
  document.querySelector(".computer-score").textContent = scoreComputer;

  const message = (message) => {
    document.querySelector(".message").textContent = message;
  };

  const messageResult = (message) => {
    document.querySelector(".result-message").textContent = message;
  };

  let click = document.querySelectorAll("button").forEach((e) => {
    let clicked = e.value;
    e.addEventListener("click", () => {
      click = clicked;

      const randomOutput = function (rand) {
        const logic = Math.floor(Math.random() * rand.length);
        const item = rand[logic];
        return item;
      };

      const computerChoices = ["Rock", "Paper", "Scissors"];
      const computerResult = randomOutput(computerChoices);
      console.log(computerResult);

      gameRound(click, computerResult);

      if (scoreUser >= 5 || scoreComputer >= 5) {
        gameOver();
      }
    });
  });
  const gameRound = (click, computerResult) => {
    click = click.toLowerCase();
    computerResult = computerResult.toLowerCase();
    if (click === computerResult) {
      message("It's a TIE!");
    } else if (click === "rock") {
      if (computerResult === "paper") {
        message(`You Lost! ${computerResult} beats ${click}`);
        scoreComputer++;
        document.querySelector(".computer-score").textContent = scoreComputer;
      } else {
        message(`You Won! ${click} beats ${computerResult}`);
        scoreUser++;
        document.querySelector(".your-score").textContent = scoreUser;
      }
    } else if (click === "paper") {
      if (computerResult === "scissors") {
        message(`You Lost! ${computerResult} beats ${click}`);
        scoreComputer++;
        document.querySelector(".computer-score").textContent = scoreComputer;
      } else {
        message(`You Won! ${click} beats ${computerResult}`);
        scoreUser++;
        document.querySelector(".your-score").textContent = scoreUser;
      }
    } else if (click === "scissors") {
      if (computerResult === "rock") {
        message(`You Lost! ${computerResult} beats ${click}`);
        scoreComputer++;
        document.querySelector(".computer-score").textContent = scoreComputer;
      } else {
        message(`You Won! ${click} beats ${computerResult}`);
        scoreUser++;
        document.querySelector(".your-score").textContent = scoreUser;
      }
    }
  };

  const gameOver = function () {
    const reloadBtn = document.querySelector(".reload");

    playerOptions.forEach((option) => {
      option.style.display = "none";
    });

    if (scoreUser > scoreComputer) {
      messageResult("You won the game! Congratulations :)");
    } else {
      messageResult("You lost! Try again :(");
    }

    reloadBtn.textContent = "Restart";
    reloadBtn.style.display = "flex";
    reloadBtn.addEventListener("click", () => {
      window.location.reload();
    });
  };
};

game();
