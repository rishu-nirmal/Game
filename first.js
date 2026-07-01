let userScore = 0;
let botScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score");
const botScorePara = document.querySelector("#bot-score");

const drawgGame = () => {
    msg.innerText = "It's a draw!";
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";
};

const showWinner = (userWins, userChoice, botChoice) => {
    if(userWins){
        userScore++;
        userScorePara.innerText = ` ${userScore}`;
        msg.innerText = `You win! ${userChoice} beats ${botChoice}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "black";
    } else {
        botScore++;
        botScorePara.innerText = ` ${botScore}`;
        msg.innerText = `You lose! ${botChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "black";
    }
};

const genBotChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const playGame = (userChoice) => {
    console.log("User choice:", userChoice);
    const botChoice = genBotChoice();
    console.log("Bot choice:", botChoice);

    if(userChoice === botChoice){
        drawgGame();
    }else {
        let userWins = true;
        if(userChoice === "rock") {
            userWins = botChoice === "paper" ? false : true;
        }else if(userChoice === "paper") {
            userWins = botChoice === "scissors" ? false : true;
        }else { 
            userWins = botChoice === "rock" ? false : true;
        }  
        showWinner(userWins, userChoice, botChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
