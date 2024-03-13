//Create Constructor function for rock-paper-scissors
function MakeRockPaperScissors() {
  //this function gets the bot's choice
  this.botChoice = function () {
    let random = Math.random();
    if (random <= 0.34) {
      return "rock";
    } else if (random <= 0.67) {
      return "paper";
    } else return "scissors";
  };

  this.playersChoice = function () {
    let playersChoice = prompt("Please enter rock, paper or scissors", "rock");
    return playersChoice;
  };

  this.gameLogic = function () {
    let playersChoice = this.playersChoice();
    let botChoice = this.botChoice();

    console.log(
      `you played ${playersChoice} & the computer played ${botChoice}`
    );
    if (playersChoice === botChoice) {
      console.log("It's a Tie");
    } else if (
      (playersChoice === "rock" && botChoice === "scissors") ||
      (playersChoice === "paper" && botChoice === "rock") ||
      (playersChoice === "scissors" && botChoice === "paper")
    ) {
      console.log("You Win!");
    } else console.log("You Lose!");
  };
}

const game = new MakeRockPaperScissors();
