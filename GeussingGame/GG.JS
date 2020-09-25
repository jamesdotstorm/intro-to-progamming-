var secret = 7

var guessbutton = document.getElementById("gclick");
guessbutton.addEventListener("click", getGuess)

function getGuess() {
    var guess = parseInt(prompt("Choose a number between 1 and 10 to prove Jamie can code "))
    GuessCheck(guess)
}


function GuessCheck(guess) {

    while (guess != secret) {

        if (guess > secret) {
            alert("sorry to high, time to stop smoking")
            getGuess()
        }
        if (guess < secret) {
            alert("sorry to low keep trying ")
            getGuess()
        } else {
            alert("sorry invalid entry - we are only looking for number you twat ")
            getGuess()
        }


    }
    if (guess = secret) { alert("Congrats my main man - you have proven you are total legendary well done") }


}