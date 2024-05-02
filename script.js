function getCompChoice(){
    let compChoice = ['rock', 'paper', 'scissors'];
    let choice = compChoice[Math.floor(Math.random() * compChoice.length)];
    console.log('Computer chose ' + choice);
    return choice;
}

function getHumChoice(){
    let humChoice = prompt('RPS Select').toLowerCase();
    console.log('You chose ' + humChoice);
    return humChoice;
}
function theGameItself(){
    let humanPicked = getHumChoice();
    let computerPicked = getCompChoice();

    if (humanPicked === computerPicked){
        console.log('It\'s a tie');
        return 'tie';
    }

    else if ((humanPicked == 'rock' && computerPicked === 'scissors') || (humanPicked == 'scissors' && computerPicked === 'paper') || (humanPicked == 'paper' && computerPicked === 'rock')){
        console.log('You win. ' + (humanPicked[0].toUpperCase() + humanPicked.slice(1)) + ' beats ' + computerPicked + '.' );  
        return 'win';
    }
    else if(humanPicked !== 'rock' && humanPicked !== 'scissors' && humanPicked !== 'paper'){
        console.log ('You lose. Invalid option.');
        return 'lose';
    }
    else {
        console.log('You lose. ' + (computerPicked[0].toUpperCase() + computerPicked.slice(1)) + ' beats ' + humanPicked + '.' )
        return 'lose';
    }

}

let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const totalRounds = 5;

function theScoring() {
    if (roundsPlayed < totalRounds) {
        let result = theGameItself();

        if (result === 'lose') {
            computerScore++;

        } else if (result === 'win') {
            humanScore++;        
        }

        console.log('Computer Score:' + computerScore);
        console.log('Human Score:' + humanScore);
        roundsPlayed++;
        console.log('Rounds played: ' + roundsPlayed)

        theScoring();
    }
}
theScoring();

console.log("Game Over");