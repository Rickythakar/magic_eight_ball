//Declare Variables
let button = document.querySelector("button");
let answer = document.querySelector("#answer");

// // Creating an array
let responseArray = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes, definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
]

// Hooking into Shake button and adding an event listener 
button.addEventListener("click", function () {
    // Generate random number and hook into array to grab a random index
    let answerText = responseArray[Math.floor(Math.random() * responseArray.length)];
    // Replacing the text content inside the answer text
    answer.textContent = answerText
});