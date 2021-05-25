function computerPlay(){
    /*Makes computer choose randomly between rock, paper or scissor*/
    let choices = ['Rock', 'Paper', 'Scissors']; 
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection){
    if(playerSelection.toUpperCase() === 'ROCK'){
        if(computerSelection.toUpperCase() === 'ROCK'){
            return 'draw';
        }
        else if(computerSelection.toUpperCase() === 'PAPER'){
            return 'computer';
        }
        else{
            return 'player';
        }
    }

    else if(playerSelection.toUpperCase() === 'PAPER'){
        if(computerSelection.toUpperCase() === 'ROCK'){
            return 'player';
        }
        else if(computerSelection.toUpperCase() === 'PAPER'){
            return 'draw';
        }
        else{
            return 'computer';
        }
    
    }

    else if(playerSelection.toUpperCase() === 'SCISSORS'){
        if(computerSelection.toUpperCase() === 'ROCK'){
            return 'computer';
        }
        else if(computerSelection.toUpperCase() === 'PAPER'){
            return 'player';
        }
        else{
            return 'draw';
        }
    }

    
}


function getChoiceAndPlay(e){
    if(playerWins === 5 || computerWins === 5){
        return;
    }
    let weapon = e.target.value;
    let computerSelection = computerPlay();
    let result = playRound(weapon, computerSelection);
    roundWinner = document.querySelector('p#roundWinner');
    if(result === 'draw'){
        roundWinner.textContent = `This round is a ${result}!`;
    }
    else if (result === 'player') {
        roundWinner.textContent = `This round's winner is ${result}!`;
        playerWins += 1;
    }
    else{
        roundWinner.textContent = `This round's winner is ${result}!`;
        computerWins += 1;
    }  
    console.log('inside one round');
    playerScore = document.querySelector('#playerScore');
    computerScore = document.querySelector('#computerScore');
    playerScore.textContent = playerWins;
    computerScore.textContent = computerWins;

    if(playerWins === 5){
        gameOver = 'Nice! You have won!';
        result = document.querySelector('#result');
        result.textContent = gameOver;
        console.log(gameOver);
    }
    else if(computerWins === 5){
        gameOver = 'Oh no! You have lost!';
        result = document.querySelector('#result');
        result.textContent = gameOver;
        console.log(gameOver);
    }
}

let playerWins = computerWins = 0;
let playerChoice;
const choices = document.querySelectorAll('.selections');
choices.forEach((choice) => {choice.addEventListener('click', getChoiceAndPlay)});
restart = document.querySelector('#restart');
restart.addEventListener('click', (e) => location.reload());

    
