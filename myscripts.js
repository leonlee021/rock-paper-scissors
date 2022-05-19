function computerPlay(){
    const options = ['rock','paper','scissors'];
    return options[parseInt(Math.random()*2)];
}

let pscore = 0;
let cscore = 0;

let computerSelection;

function playRound(playerSelection, computerSelection){
    computerSelection = computerPlay();
    if (playerSelection.toLowerCase()=="rock" && computerSelection=="scissors"){
        pscore++;
        return "You Win! Rock beats Scissors";
    }
    else if (playerSelection.toLowerCase()=="rock" && computerSelection == "paper"){
        cscore++;
        return "You Lose! Paper beats Rock";
    }
    else if ((playerSelection.toLowerCase()=="rock" && computerSelection == "rock") || 
    (playerSelection.toLowerCase()=="paper" && computerSelection == "paper") || 
    (playerSelection.toLowerCase()=="scissors" && computerSelection == "scissors") ){
        return "You Draw!";
    }
    else if (playerSelection.toLowerCase()=="paper" && computerSelection == "scissors"){
        cscore++;
        return "You Lose! Scissors beat Paper";
    }
    else if (playerSelection.toLowerCase()=="paper" && computerSelection == "rock"){
        pscore++;
        return "You Win! Paper beats Rock";
    }
    else if (playerSelection.toLowerCase()=="scissors" && computerSelection == "paper"){
        cscore++;
        return "You Win! Scissors beat Paper";
    }
    else if (playerSelection.toLowerCase()=="scissors" && computerSelection == "rock"){
        cscore++;
        return "You Lose! Rock beats Scissors";
    }
}

function game(){
    let i=0;
    while (i<5){
        let playerSelection = prompt("rock, paper, or scissors?","");
        console.log(playRound(playerSelection,computerSelection));
        console.log("The current score is " + pscore + ":" + cscore + ".");
        i++;
    }
    if (pscore > cscore){
        console.log("The final score is " + pscore + ":" + cscore + ". You win!");
    }
    else if (cscore > pscore){
        console.log("The final score is " + pscore + ":" + cscore + ". You lose!");
    }
    else if (pscore == cscore){
        console.log("The final score is " + pscore + ":" + cscore + ". You tied!");
    }
}

game();