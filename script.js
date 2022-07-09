// // initializing some values
// let totalAttempts = 5;
// let attempts = 0;
// let totalWons = 0;
// let totallosts = 0;

// // selecting
// let cardBody = document.querySelector(".card-body");
// let form = document.querySelector(".myForm");
// let guessNum = form.querySelector("#guessNum");
// let btn = form.querySelector(".btn");
// let resultText = cardBody.querySelector(".resultText");

// let lostWonMessage = document.createElement("p");

// let remainingAttempt = cardBody.querySelector(".remainingAttempt");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   attempts++;

//   if (attempts === 5) {
//     guessNum.disabled = true;
//     btn.disabled = true;
//   }
//   if (attempts < 6) {
//     let guessNumber = Number(guessNum.value);
//     checkResult(guessNumber);
//     remainingAttempt.innerHTML = ` Remaining attempts : ${
//       totalAttempts - attempts
//     }`;
//   }
//   guessNum.value = "";
// });

// function checkResult(guessNum) {
//   // console.log(guessNum);

//   let randomNum = getRandomNum(5);
//   // console.log(randomNum);

//   if (guessNum === randomNum) {
//     resultText.innerHTML = ` you have won!`;
//     totalWons++;
//   } else {
//     resultText.innerHTML = ` you have lost : random numbear was : ${randomNum}`;
//     totallosts++;
//   }

//   lostWonMessage.innerHTML = ` won : ${totalWons}, lost : ${totallosts}`;
//   lostWonMessage.classList.add("large-text");
//   cardBody.appendChild(lostWonMessage);
// }

// function getRandomNum(limit) {
//   return Math.floor(Math.random() * limit) + 1;
// }

// practice
// let cardBody = document.querySelector(".card-body");
// let myForm = cardBody.querySelector(".myForm");
// let inputGuessNum = myForm.querySelector("#guessNum");
// let btn = myForm.querySelector(".btn");
// let resultText = cardBody.querySelector(".resultText");
// let remainingAttempt = cardBody.querySelector(".remainingAttempt");

// let lostWonMessage = document.createElement("p");
// // declaring variable
// totalwon = 0;
// totalLosts = 0;
// totalAttempts = 5;
// attempts = 0;

// myForm.addEventListener("submit", (event) => {
//   event.preventDefault();

//   attempts++;

//   if (attempts === 5) {
//     inputGuessNum.disabled = true;
//     btn.disabled = true;
//   }
//   if (attempts < totalAttempts) {
//     let inputNum = Number(inputGuessNum.value);
//     checkResult(inputNum);
//   }

//   // attempts calculating
//   remainingAttempt.innerHTML = ` Total Attempts : ${totalAttempts}
//   remaining attempts : ${totalAttempts - attempts}`;

//   // clearing input field
//   inputGuessNum.value = "";
// });

// let checkResult = (guessNum) => {
//   let getRandomNum = randomNum(5);

//   // calculating
//   if (guessNum === getRandomNum) {
//     resultText.innerHTML = ` you have won !`;
//     totalwon++;
//   } else {
//     resultText.innerHTML = ` you have losts ! Random number was : ${getRandomNum}`;
//     totalLosts++;
//   }

//   // showing total result
//   lostWonMessage.innerHTML = ` won : ${totalwon}, lost : ${totalLosts}`;
//   lostWonMessage.classList.add("large-text");
//   cardBody.appendChild(lostWonMessage);
// };

// // generating random number
// let randomNum = (limit) => {
//   return Math.floor(Math.random() * limit) + 1;
// };

// practice another time

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
