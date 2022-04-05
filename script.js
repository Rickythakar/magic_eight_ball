// assigning variables
let askEightBall = window.prompt("Ask me a question about your future");
let eightBallIndex = 0;
let buttonEl = document.getElementById("button");

buttonEl.addEventListener("click". randomizeAnswer());
const div = document.getElementById("body");
const newElement = document.createElement("h1");
newElement.innerText = responseArray[eightBallIndex];


// creating an array
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

// creating a function - loops through array & get document.getElementByID("input-id") & set up a HTML/listener event
// Math.floor() to randomize array
let randomizeAnswer = () => {
    eightBallIndex = Math.floor(Math.random()) * responseArray.lenght);
    console.log(eightBallIndex);
}


// Button to submit and Return Response and shake again


// CSS styling, 8 Ball Picture