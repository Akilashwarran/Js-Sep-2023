document.addEventListener("DOMContentLoaded", function() {
    const choices = ['rock', 'paper', 'scissors'];
    const buttons = document.querySelectorAll('button');
    const resultElement = document.getElementById('result');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const playerChoice = button.id;
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];

            const result = getResult(playerChoice, computerChoice);

            resultElement.innerHTML = `You chose ${playerChoice}. The computer chose ${computerChoice}. ${result}`;
        });
    });

    function getResult(player, computer) {
        if (player === computer) {
            return "It's a tie!";
        } else if (
            (player === 'rock' && computer === 'scissors') ||
            (player === 'paper' && computer === 'rock') ||
            (player === 'scissors' && computer === 'paper')
        ) {
            return 'You win!';
        } else {
            return 'Computer wins!';
        }
    }
});
