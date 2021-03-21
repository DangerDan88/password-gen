document.addEventListener("DOMContentLoaded", function (event) {
  // random number function
  function getRandomInt() {
    return Math.floor(Math.random() * 10);
  }
  getRandomInt();

  // random lowercase function
  function getRandomLowerCase() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    const randomCharacter =
      alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  getRandomLowerCase();
  // random uppercase function

  function getRandomUpperCase() {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let randomCharacter = alphabet[
      Math.floor(Math.random() * alphabet.length)
    ].toUpperCase();
  }
  getRandomUpperCase();

  function getRandomSymbol() {
    let symbols = "!@#$%^&*()";

    let randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
    console.log(randomSymbol);
  }
  getRandomSymbol();
});
