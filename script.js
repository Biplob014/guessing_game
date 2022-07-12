
let cardBody = document.querySelector(".card-body");
let myForm = cardBody.querySelector(".myForm");
let inputField = myForm.querySelector("#guessNum");
let btn = myForm.querySelector(".btn");

// creating element
let resultText = document.createElement("p");
cardBody.appendChild(resultText);
let attemptsShow = document.createElement("p");
cardBody.appendChild(attemptsShow);
let totalResults = document.createElement("p");
cardBody.appendChild(totalResults);

// initializing variable
let totalAttempts = 5;
let attempts = 0;
let totalwon = 0;
let totallost = 0;

myForm.addEventListener("submit", (event) => {
  event.preventDefault();
  attempts++;

  // disabling field
  if (attempts === 5) {
    inputField.disabled = true;
    btn.disabled = true;
  } else {
    // sending guess number to calculating()
    let guessNum = Number(inputField.value);
    calculating(guessNum);
  }

  // showing attempts
  attemptsShow.innerHTML = ` Total Attempts : ${totalAttempts} <br>
  Remaining Attempts : ${totalAttempts - attempts}`;

  // clearing input field
  inputField.value = "";
});

let calculating = (guessNum) => {
  let getRandomNum = randomNum(5);

  // calculating
  if (guessNum === getRandomNum) {
    resultText.innerHTML = `Yeah ! You have won.`;
    totalwon++;
  } else {
    resultText.innerHTML = ` You have lost : Random number was : ${getRandomNum}`;
    totallost++;
  }

  // showing total results
  totalResults.innerHTML = ` Won : ${totalwon}, Losts : ${totallost}`;
  totalResults.classList.add("large-text");
};

let randomNum = (limit) => {
  return Math.floor(Math.random() * limit) + 1;
};
