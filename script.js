const result = document.querySelector(".result");
const myScore = document.querySelector("#my-score");
const machineScore = document.querySelector("#machine-score");

let humanScoreNumber = 0;
let machineScoreNumber = 0;

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine());
};

const playMachine = () => {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);

    return choices[randomNumber];
};

const playTheGame = (human, machine) => {
    console.log("humano: " + human + "Maquina:" + machine);

    if (human === machine) {
        result.innerHTML = "Deu EMPATE!";
    } else if (
        (human === "paper" && machine === "rock") ||
        (human === "rock" && machine === "scissors") ||
        (human === "scissors" && machine === "paper")
    ) {
        humanScoreNumber++
        myScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você GANHOU!";
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Você PERDEU para ALEXA!";
    }
};
