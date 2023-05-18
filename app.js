


function getComputerChoice()
{
    let compChoices = ["rock", "paper", "scissors"] 
    let randomizeChoice = Math.floor(Math.random() * compChoices.length)  
    return compChoices[randomizeChoice];
}


let playerSelection;
let computerSelection;

function playRound(pS, cS)
{   
    if(pS == "ROCK")
    {   
        if(cS == "PAPER")
            {return "You Lose, Paper beats Rock";}
        else if(cS == "SCISSORS")
            {return "You Win, Rock beats Paper"}
        else{
            return "Draw"
        }
    }
    else if(pS == "SCISSORS")
    {
        if(cS == "PAPER")
        {return "You Win, Scissor beats paper";}
        else if(cS == "ROCK")
        {return "You Lose, Rock beats Scissor"}
        else
        {
            return "Draw"
        }    
    }
    else if(pS == "PAPER")
    {
        if(cS == "SCISSORS")
            {return "You Lose, Scissor beats Paper";}
        else if(cS == "ROCK")
            {return "You Win, Paper beats Rock"}
        else
        {
            return "Draw"
        }
    }
}

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const result = document.getElementById("result");
result.style.textAlign = "center";
result.style.fontSize = "30px";
result.style.marginTop = "50px"


function play(x, y)
{
    return playRound(x.toUpperCase(), y.toUpperCase())
}


rock.onclick = function()
{   
    let comp = getComputerChoice();
    result.textContent = play("rock", comp);
    console.log(`Rock vs ${comp}`);
}

paper.onclick = function()
{   
    let comp = getComputerChoice();
    result.textContent = play("paper", comp);
    console.log(`paper vs ${comp}`);
}

scissors.onclick = function()
{   
    let comp = getComputerChoice();
    result.textContent = play("scissors", comp);
    console.log(`scissors vs ${comp}`);
}


// if(rock.addEventListener("click", function(){
//     playerSelection = "ROCK";
//     console.log(`${playerSelection} ${computerSelection}`);
//     result.textContent = playRound(playerSelection, computerSelection);

// }))

// else if(paper.addEventListener("click", function(){
//     playerSelection = "PAPER";
//     // computerSelection = getComputerChoice(choices).toUpperCase();
//     result.textContent = playRound(playerSelection, computerSelection);

    
// }))

// else(scissor.addEventListener("click", function(){
//     playerSelection = "SCISSOR";
//     // computerSelection = getComputerChoice(choices).toUpperCase();
//     // console.log(playRound(playerSelection, computerSelection));
//     console.log(`${playerSelection} ${computerSelection}`);
//     result.textContent = playRound(playerSelection, computerSelection);
// }))





