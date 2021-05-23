function computerPlay(){
    /*Makes computer choose randomly between rock, paper or scissor*/
    let choices = ['Rock', 'Paper', 'Scissors']; 
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection, playerWins, computerWins){
    if(playerSelection.toUpperCase() === 'ROCK'){
        if(computerSelection.toUpperCase() === 'ROCK'){
            return 'It\'s a draw! Rock equals rock.';
        }
        else if(computerSelection.toUpperCase() === 'PAPER'){
            return 'You lose! paper beats rock.';
        }
        else{
            return 'You win! Rock beats scissors.';
        }
    }

    else if(playerSelection.toUpperCase() === 'PAPER'){
        if(computerSelection.toUpperCase() === 'ROCK'){
            return 'You win! Paper beats rock.';
        }
        else if(computerSelection.toUpperCase() === 'PAPER'){
            return 'It\'s a draw! Paper equals paper.';
        }
        else{
            return 'You lose! Scissors beat paper.';
        }
    
    }

    else if(playerSelection.toUpperCase() === 'SCISSORS'){
        if(computerSelection.toUpperCase() === 'ROCK'){
            return 'You lose! Rock beats scissors.';
        }
        else if(computerSelection.toUpperCase() === 'PAPER'){
            return 'You win! Scissors beats paper.';
        }
        else{
            return 'It\'s a draw! Scissors equals scissors.';
        }
    }

    
}

function game(){
    for(i = 0; i<=4; i++){
        let playerWins = computerWins = 0;
        playerSelection = prompt('Enter rock, paper or scissors.');
        playRound(playerSelection, computerPlay(), playerWins, computerWins);

    }
}