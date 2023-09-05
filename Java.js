let player_score = 0;
let computer_score = 0;
let WINNING_POINTS = 5;
let PLAYER_ALLTIME_SCORE = 0;
let COMPUTER_ALLTIME_SCORE = 0;



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

function game_schema(player_input){
    var computer_input = Math.floor(Math.random() * 3 | 0);
    game(player_input, computer_input);
    document.getElementById("player_score").innerHTML = "Player: " + player_score;
    document.getElementById("comp_score").innerHTML = "Computer: " + computer_score;

    if (player_score === WINNING_POINTS) {
        alert("Player Wins \n Restart");
        player_score = 0;
        computer_score = 0;
        PLAYER_ALLTIME_SCORE++;
    }
    else if (computer_score === WINNING_POINTS){
        alert("Computer Wins \n Restart");
        player_score = 0;
        computer_score = 0;
        COMPUTER_ALLTIME_SCORE++;
    }
}