function computerPlay(){
    const options = ['rock','paper','scissors'];
    return options[parseInt(Math.random()*3)];
}

let pscore = 0;
let cscore = 0; 
let playerSelection;
let computerSelection;

const player = document.querySelector("#player-score");
player.textContent = `Player Score: ${pscore}`;

const computer = document.querySelector("#comp-score");
computer.textContent = `Computer Score: ${cscore}`;

const output = document.querySelector("#output");
output.textContent = "May the Best Person Win!"

const buttons = document.querySelectorAll('.btn');
buttons.forEach((button)=>{button.addEventListener('click',()=>{
    playerSelection = button.id;
    game();
})});


function playRound(playerSelection, computerSelection){
    computerSelection = computerPlay();
    if (playerSelection.toLowerCase()=="rock" && computerSelection=="scissors"){
        pscore++;
        output.textContent = "You Win! Rock beats scissors.";
    }
    else if (playerSelection.toLowerCase()=="rock" && computerSelection == "paper"){
        cscore++;
        output.textContent =  "You Lose! Paper beats rock.";
    }
    else if (playerSelection.toLowerCase()=="rock" && computerSelection == "rock"){
        output.textContent = "You Drew! You and the computer both chose rock."
    } 
    else if (playerSelection.toLowerCase()=="paper" && computerSelection == "paper"){
        output.textContent = "You Drew! You and the computer both chose paper."
    } 
    else if (playerSelection.toLowerCase()=="scissors" && computerSelection == "scissors"){
        output.textContent =  "You Drew! You and the computer both chose scissors.";
    }
    else if (playerSelection.toLowerCase()=="paper" && computerSelection == "scissors"){
        cscore++;
        output.textContent =  "You Lose! Scissors beat paper.";
    }
    else if (playerSelection.toLowerCase()=="paper" && computerSelection == "rock"){
        pscore++;
        output.textContent =  "You Win! Paper beats rock.";
    }
    else if (playerSelection.toLowerCase()=="scissors" && computerSelection == "paper"){
        cscore++;
        output.textContent =  "You Win! Scissors beat paper.";
    }
    else if (playerSelection.toLowerCase()=="scissors" && computerSelection == "rock"){
        cscore++;
        output.textContent =  "You Lose! Rock beats scissors.";
    }
}


function game(){
    playRound(playerSelection,computerSelection);
    player.textContent = `Player Score: ${pscore}`;
    computer.textContent = `Computer Score: ${cscore}`;
    if (pscore == 5){
        output.textContent = "The final score is " + pscore + ":" + cscore + ". You lose!";
        pscore = 0;
        cscore = 0;
    }
    else if (cscore == 5){
        output.textContent = "The final score is " + pscore + ":" + cscore + ". You win!";
        pscore = 0;
        cscore = 0;
    }
}