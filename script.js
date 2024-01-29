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
  const form = document.querySelector("#guess-form");
  form.reset();
  console.log(guess);
  checkGuess(guess);
}

function checkGuess(guess) {
    if (guess === number) {
        guessCorrect(guess);
    } else if (guess > number) {
        guessTooHigh(guess);
    } else {
        guessTooLow(guess);
    }
}

function guessCorrect(guess) {
    console.log("Correct");
    const list = document.querySelector("#guess-list");
    list.insertAdjacentHTML("beforeend", `<li>you guessed ${guess}, correct!</li>`);

    document.querySelector("#guess-form").remove();

}

function guessTooHigh(guess) {
    console.log("Too high");
    const list = document.querySelector("#guess-list");
    list.insertAdjacentHTML("beforeend", `<li>you guessed ${guess}, too high!</li>`);
}

function guessTooLow(guess) {
    console.log("Too low");
    const list = document.querySelector("#guess-list");
    list.insertAdjacentHTML("beforeend", `<li>you guessed ${guess}, too low!</li>`);

}
