// Creates an array that lists out all of the options (R, P, or S).
var options = ["R", "P", "S"];
console.log(options);
// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var ties = 0;

//looping 10 rounds
for (var i = 1; i <= 10; i++) {
    alert("You're in round: " + i);

//Prompt the player to choose R,P,S
var choice = prompt ("Enter R, P or S: ");

//Convert user input to uppercase.
var userChoice = choice.toUpperCase();

//Check if the user's choice is valid.
if (userChoice === "R" || userChoice === "P" || userChoice === "S"){

//Generate a random choice for the computer.
var computerChoice = ["R", "P", "S"];
var computerRandom = computerChoice[Math.floor(Math.random() * 3)];

//Alert the player of the choices
alert("Your choice is: " + userChoice);
alert("The computer's choice is: " + computerRandom);

//Use a switch statement to determine the result.
switch (true) {
    case userChoice == computerRandom:
        alert("You tied!");
        ties++;
        break;
    
    case userChoice == "R" && computerRandom == "S" || userChoice == "P" && computerRandom == "R" || userChoice == "S" && computerRandom == "P":
        alert("You won!");
        wins++;
        break;

    default:
        alert("You lost!");
        losses++;
}
}
// } else{
// // Handle invalid user choices by ignoring the round.
// alert("Please input R, P or S");
// i--;
// }
}

// Display "Game Over!" and show total wins, ties, and losses in an alert.
alert("Game Over\n" + "Total wins: " + wins + "\n" + "Total losses: " + losses + "\n" + "Total ties " + ties + "\n");