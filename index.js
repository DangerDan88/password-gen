//TODO figure out how to concat all the random fucntions into one password string
document.addEventListener("DOMContentLoaded", function (event) {
  // random number function
  function getRandomInt() {
    return Math.floor(Math.random() * 10).toString();
  }
  getRandomInt();

  // random lowercase function
  function getRandomLowerCase() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    const randomCharacter = alphabet[
      Math.floor(Math.random() * alphabet.length)
    ].toString();
  }
  getRandomLowerCase();
  // random uppercase function

  function getRandomUpperCase() {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let randomCharacter = alphabet[
      Math.floor(Math.random() * alphabet.length)
    ].toUpperCase();
    console.log(randomCharacter);
  }
  getRandomUpperCase();

  function getRandomSymbol() {
    let symbols = "!@#$%^&*()";

    let randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
    // console.log(randomSymbol);
  }
  getRandomSymbol();

  document
    .getElementById("generate")
    .addEventListener("click", generatePassWord);

  function generatePassWord() {
    let newpassUpper = getRandomUpperCase();
    let newPassLower = getRandomLowerCase();

    document.getElementById("goesHere").innerHTML = newpassUpper;
  }
});
