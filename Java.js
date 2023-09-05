var player_score = 0;
var computer_score = 0;

function game(player, computer) {
    //0 = Rock
    //1 = Paper
    //2 = Scissors
    if (player == computer) 
    {
        return;
    }
    else if (player == 0 && computer == 2 ||
            player == 1 && computer == 0||
            player == 2 && computer == 1) 
    {
        player_score++;
    }
    else if (player == 0 && computer == 1 ||
        player == 1 && computer == 2||
        player == 2 && computer == 0) 
    {
        computer_score++;
    }
    else {
    }
    return;
}

while (player_score < 3 && computer_score < 3)
{
    alert('Player Score: ' + player_score + '\n Computer Score: ' + computer_score);
    var player_input = prompt('0 = Rock 1 = Paper 2 = Scissors');
    var computer_input = Math.floor(Math.random() * 3 | 0);
    alert(computer_input);
    game(player_input, computer_input);
    alert('Player input: ' + player_input + '\n Computer input: ' +  computer_input);
}

if (player_score === 3) {
    alert("Player Wins");
}
else {
    alert("Computer Wins");
}