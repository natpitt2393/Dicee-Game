let randomNumber1 = Math.floor(Math.random() * (6)) + 1;
// console.log(randomNumber1);
let randomNumber2 = Math.floor(Math.random() * (6)) + 1;

let leftDice = document.querySelector(".img1");
let rightDice = document.querySelector(".img2");


if (randomNumber1 === 1) {
    leftDice.setAttribute('src', "assets/images/dice1.png")
} else if (randomNumber1 === 2) {
    leftDice.setAttribute('src', "assets/images/dice2.png")
} else if (randomNumber1 === 3) {
    leftDice.setAttribute('src', "assets/images/dice3.png")
} else if (randomNumber1 === 4) {
    leftDice.setAttribute('src', "assets/images/dice4.png")
} else if (randomNumber1 === 5) {
    leftDice.setAttribute('src', "assets/images/dice5.png")
} else {
    leftDice.setAttribute('src', "assets/images/dice6.png")
}; 

if (randomNumber2 === 1) {
    rightDice.setAttribute('src', "assets/images/dice1.png")
} else if (randomNumber2 === 2) {
    rightDice.setAttribute('src', "assets/images/dice2.png")
} else if (randomNumber2 === 3) {
    rightDice.setAttribute('src', "assets/images/dice3.png")
} else if (randomNumber2 === 4) {
    rightDice.setAttribute('src', "assets/images/dice4.png")
} else if (randomNumber2 === 5) {
    rightDice.setAttribute('src', "assets/images/dice5.png")
} else {
    rightDice.setAttribute('src', "assets/images/dice6.png")
}; 


function declareWinner() {
    if (randomNumber1 > randomNumber2) {
        document.querySelector('h1').innerHTML = "Player 1 wins!";
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector('h1').innerHTML = "Player 2 wins!";
    } else {
        document.querySelector('h1').innerHTML = "It's a tie!";
    }
}

declareWinner();
