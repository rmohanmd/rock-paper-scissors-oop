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
}

const game = new MakeRockPaperScissors();
