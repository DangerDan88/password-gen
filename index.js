//TODO figure out how to concat all the random fucntions into one password string need to use character codes
document.addEventListener("DOMContentLoaded", function (event) {
  // Character Code Generating Function
  let arrayFromLowToHigh = (low, high) => {
    const array = [];
    for (let i = low; i <= high; i++) {
      array.push(i);
    }
    return array;
  };
  // Generating Character Codes
  const UPPERCASE_CODES = arrayFromLowToHigh(65, 90);
  const LOWERCASE_CODES = arrayFromLowToHigh(97, 122);
  const NUMBER_CODES = arrayFromLowToHigh(48, 57);
  const SYMBOL_CODES = arrayFromLowToHigh(33, 47)
    .concat(arrayFromLowToHigh(58, 64))
    .concat(arrayFromLowToHigh(91, 96))
    .concat(arrayFromLowToHigh(123, 126));
  console.log(UPPERCASE_CODES);
});
