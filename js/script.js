//Create Constructor function for rock-paper-scissors

function MakeRockPaperScissors() {
  const images = document.querySelectorAll(".game-piece");
  images.forEach((image) =>
    image.addEventListener("click", () => {
      this.gameLogic(image.alt);
    })
  );

  //this function gets the bot's choice
  this.botChoice = function () {
    let random = Math.random();
    if (random <= 0.34) {
      return "rock";
    } else if (random <= 0.67) {
      return "paper";
    } else return "scissors";
  };

  this.gameLogic = function (playersChoice) {
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
