function computerPlay(){
    /*Makes computer choose randomly between rock, paper or scissor*/
    let choices = ['Rock', 'Paper', 'Scissors']; 
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection, playerWins, computerWins){
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

function game(){
    let playerWins = computerWins = 0;
    for(i = 0; i<=4; i++){
        let playerSelection = prompt('Enter rock, paper or scissors.');
        let computerSelection = computerPlay()
        let result = playRound(playerSelection, computerSelection);
        switch (result){
            case 'player': playerWins += 1;
            break;

            case 'computer': computerWins += 1;
            break;
        
            case 'draw':
            break;

        }
        console.log(`${playerSelection} vs ${computerSelection}`);
        console.log(`The winner of this round is ${result}.\
        \nPlayer: ${playerWins}\
        \nComputer: ${computerWins}`);


    }
    if(playerWins < computerWins){
        console.log('The computer has won the game');
    }
    else if(playerWins === computerWins){
        console.log('The games are a draw');
    }
    else{
        console.log('The player has won the game!');
    }
}
