
const choices = ["Rock", "Paper", "Scissor"];

function getComputerChoice(choices)
{
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

// console.log(getComputerChoice(choices));
let playerSelection;
let computerSelection;

function getChoice()
{
     let playerSelection = prompt("Enter the Player choice: ", "Rock").toUpperCase();
     let computerSelection = getComputerChoice(choices).toUpperCase(); 
     selections = [playerSelection, computerSelection];
     return selections;
}

// selections = getChoice();
// console.log(`The Player selected: ${selections[0]}\nThe Computer selected: ${selections[1]} `);

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
}

function game(n)
{
    for(let i = 0; i<n; i++)
    {   
        selections = getChoice();
        console.log(`The Player selected: ${selections[0]}\nThe Computer selected: ${selections[1]} `);
        console.log(playRound(selections[0], selections[1]));
    }
}


game(5);    
