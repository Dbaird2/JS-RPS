var userScore = 0;
var computerScore = 0;
var computerChoice;
var play = true;
let userChoice = "none";
document.getElementById('winner').innerHTML = "Click Submit to start!"

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    var computerNum = getRandomInt(3);
    if (computerNum == 0) {
        computerChoice = "rock";
    } else if (computerNum == 1) {
        computerChoice = "paper";
    } else{
        computerChoice = "scissors";
    }
    return computerChoice;
}

function getUserChoice() {
    var normUserChoice = document.getElementById('input-answer').value;
    userChoice = normUserChoice.toLowerCase();
    if (userChoice == null || userChoice == undefined){
        return "none";
    }
    startGame();
}

function reset() {
    userScore = 0;
    computerScore = 0;
    document.getElementById("user-score").innerHTML = userScore;
    document.getElementById("computer-score").innerHTML = computerScore;
}

function getUserChoice2(arg){
    userChoice = arg;
    startGame();
}

function computerWins(){
    document.getElementById('winner').innerHTML = "Computer Wins!"
    ++computerScore;
}

function userWins() {
    document.getElementById('winner').innerHTML = "User Wins!";
    ++userScore;
}

function startGame() {
    var computer = getComputerChoice();
    if (computer == userChoice) {
        document.getElementById('winner').innerHTML = "Draw";
        return;
    }
    if (computer == "paper") {
        if (userChoice == "rock") {
            computerWins();
        } else if(userChoice == "scissors") {
            userWins();
        }
    } else if(computer == "rock") {
        if (userChoice == "scissors") {
            computerWins();
        } else if(userChoice == "paper") {
            userWins();
        }
    } else if (computer == "scissors") {
        if (userChoice == "paper") {
            computerWins();
        } else if(userChoice == "rock") {
            userWins();
        }
    }    
    document.getElementById("user-score").innerHTML = userScore;
    document.getElementById("computer-score").innerHTML = computerScore;
}

document.getElementById("user-score").innerHTML = userScore;
document.getElementById("computer-score").innerHTML = computerScore;
