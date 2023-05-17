


const choices = ["Rock", "Paper", "Scissor"];

function getComputerChoice(choices)
{
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

let playerSelection;
let computerSelection;

// function getChoice()
// {
//      let playerSelection = prompt("Enter the Player choice: ", "Rock").toUpperCase();
//      let computerSelection = getComputerChoice(choices).toUpperCase(); 
//      selections = [playerSelection, computerSelection];
//      return selections;
// }

function playRound(pS, cS)
{   
    if(pS == "ROCK" && cS == "PAPER")
    {
        return "You Lose, Paper beats Rock";
    }

    else if(pS == "SCISSOR" && cS == "ROCK")
    {
        return "You Lose, Rock beats Scissor";
    }
    else if(pS == "PAPER" && cS == "SCISSOR")
    {
        return "You Lose, Scissor beats Paper";
    }
    else{
        return "Draw :)"
    }
}

// function game(n)
// {
//     for(let i = 0; i<n; i++)
//     {   
//         selections = getChoice();
//         console.log(`The Player selected: ${selections[0]}\nThe Computer selected: ${selections[1]} `);
//         console.log(playRound(selections[0], selections[1]));
//     }
// }


// game(5);    
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissors");

const result = document.getElementById("result");


rock.addEventListener("click", function(){
    playerSelection = "ROCK";
    computerSelection = getComputerChoice(choices).toUpperCase();
    console.log(`${playerSelection} ${computerSelection}`);
})

paper.addEventListener("click", function(){
    playerSelection = "PAPER";
    computerSelection = getComputerChoice(choices).toUpperCase();
    
})

scissor.addEventListener("click", function(){
    playerSelection = "SCISSOR";
    computerSelection = getComputerChoice(choices).toUpperCase();
    // console.log(playRound(playerSelection, computerSelection));
    console.log(`${playerSelection} ${computerSelection}`);
})





