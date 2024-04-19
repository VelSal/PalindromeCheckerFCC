const textInput = document.getElementById("text-input");
const resultDiv = document.getElementById("result");
const checkButton = document.getElementById("check-btn");

const cleanInputString = (str) => {
  const regex = /[^A-Za-z0-9]/g;
  return str.replace(regex, "").toLowerCase();
}
const verifyIfEmptyAndPalindrome = () => {
  if (textInput.value === "") {
    alert("Please input a value");
    return null;
  } else { 
    const cleanInput = cleanInputString(textInput.value);
    if (cleanInput === cleanInput.split("").reverse().join("")) {
      resultDiv.textContent = `${textInput.value} is a palindrome`;
    } else {
      resultDiv.textContent = `${textInput.value} is not a palindrome`;
    }
  }
}

checkButton.addEventListener("click", verifyIfEmptyAndPalindrome);