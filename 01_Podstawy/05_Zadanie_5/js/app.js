let player1 = prompt("wybierz: papier, nozyce, kamien");
let player2 = prompt("wybierz: papier, nozyce, kamien");
// console.log(player1);
// console.log(player2);

let tab = ["papier", "nozyce", "kamien"];

function rockPaperScissors(player1, player2) {
  switch (true) {
    case player1 === "nozyce" && player2 === "kamien":
      console.log("wygrał player2");
      break;
    case player1 === "papier" && player2 === "kamien":
      console.log("wygrał player1");
      break;
    case player1 === "papier" && player2 === "nozyce":
      console.log("wygrał player2");
      break;
    case player1 === "kamien" && player2 === "nozyce":
      console.log("wygrał player1");
      break;
    case player1 === "kamien" && player2 === "papier":
      console.log("wygrał player2");
      break;
    case player1 === "nozyce" && player2 === "papier":
      console.log("wygrał player1");
      break;
    case !tab.includes(player1) || !tab.includes(player2):
      console.log("błędne informacje");
      break;
    default:
      console.log("remis");
      break;
  }
}

rockPaperScissors(player1, player2);
