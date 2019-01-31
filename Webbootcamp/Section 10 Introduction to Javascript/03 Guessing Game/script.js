var secretNumber = 5;
var guess = 0;

// guess = Number(prompt("what's the number?"));

// if(guess == secretNumber){
//     alert("Yay! The number's correct!");
// }
// else if(guess < secretNumber){
//     alert("Too low, try again!");
// }
// else {
//     alert("Too high, try again!");
// };

while(guess != secretNumber){
    guess = Number(prompt("what's the number?"));
    
   if(guess < secretNumber){
        alert("Too low, try again!");
    }
    else if (guess > secretNumber){
        alert("Too high, try again!");
    };
}

alert("Yay! The number's correct!");