// Q7. Smart Guessing Game
const secretNumber = Math.floor(Math.random() * 50) + 1;
// Test value: change this number or use prompt() in a browser.
const userGuess = 25;

console.log(`Your guess: ${userGuess}`);
console.log(`Secret number: ${secretNumber}`);

if (userGuess === secretNumber) {
    console.log("Correct guess!");
} else {
    if (userGuess >= secretNumber - 3 && userGuess <= secretNumber + 3) {
        console.log("Very close!");
    } else if (userGuess > secretNumber) {
        console.log("Too high");
    } else {
        console.log("Too low");
    }
}
