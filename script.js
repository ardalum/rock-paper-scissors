"use strict";

//Generate random output from an array

const getComputerChoice = function (arr) {
  const rand = Math.floor(Math.random() * arr.length);
  const item = arr[rand];
  return item;
};

//computer array
const computerChoices = ["Rock", "Paper", "Scissors"];

//empty variable to store the score
let scoreUser = 0;
let scoreComputer = 0;

//function that will play against the computer

const gameRound = function (playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "Paper") {
    console.log("You Lose! Paper beats Rock");
    //score +1
    scoreComputer++;
  } else if (computerSelection === "Rock" && playerSelection === "paper") {
    console.log("You Won! Paper beats Rock");
    //score +1
    scoreUser++;
  } else if (playerSelection === "paper" && computerSelection === "Scissors") {
    console.log("You Lose! Scissors beats Paper");
    //score +1
    scoreComputer++;
  } else if (computerSelection === "Paper" && playerSelection === "scissors") {
    console.log("You Won! Scissors beats Paper");
    //score +1
    scoreUser++;
  } else if (playerSelection === "scissors" && computerSelection === "Rock") {
    console.log("You Lose! Rock beats Scissors");
    //score +1
    scoreComputer++;
  } else if (computerSelection === "Scissors" && playerSelection === "rock") {
    console.log("You Won! Rock beats Scissors");
    //score +1
    scoreUser++;
  } else {
    console.log("It's a tie!");
  }
};

//Loop that will keep the game running for 5 rounds
const game = function () {
  for (let i = 0; i < 5; i++) {
    //invoke the random output from the computer array
    const computerResult = getComputerChoice(computerChoices);
    console.log(computerResult);
    //Prompt the user for choices to play the game
    const playerChoice = prompt("Rock, Paper, or Scissors?: ");
    //case insensitive from the user input
    const toLower = playerChoice.toLowerCase();
    //invoke the conditions of the game
    const result = gameRound(toLower, computerResult);
  }

  //prints the result of the game
  if (scoreUser > scoreComputer) {
    console.log(
      `You Won The Game! Your score is ${scoreUser} and the computer score is ${scoreComputer}`
    );
  } else if (scoreComputer > scoreUser) {
    console.log(
      `You Lose The Game! Your score is ${scoreUser} and the computer score is ${scoreComputer}`
    );
  } else {
    console.log(
      `It's a Tie! Your score is ${scoreUser} and the computer score is ${scoreComputer}`
    );
  }
};

//invoke the game
game();

// console.log(scoreUser, scoreComputer);
