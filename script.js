"use strict";

window.addEventListener("load", start);

let number;

function start() {
  console.log("JS kører");
  number = generateNumber();
  document.querySelector("#guess-form").addEventListener("submit", receiveGuess);
}

function generateNumber() {
  return 42;
}

function receiveGuess(event) {
  event.preventDefault();
  const guess = document.querySelector("#guess").valueAsNumber;
  console.log(guess);
  checkGuess(guess);
}

function checkGuess(guess) {
    if (guess === number) {
        guessCorrect();
    } else if (guess > number) {
        guessTooHigh();
    } else {
        guessTooLow();
    }
}

function guessCorrect() {}

function guessTooHigh() {}

function guessTooLow() {}
