let myMove = 0;

    let score = JSON.parse(localStorage.getItem('score')) || {
      Wins: 0,
      Losses: 0,
      Ties: 0
    };

    /*
    if (!score) {
    
      score = {
        Wins: 0,
        Losses: 0,
        Ties: 0
      }
    }*/


    function pcMove() {
      let computerMove = Math.floor(Math.random() * 3 + 1);


      /*when I lose*/

      if (computerMove === 1 && myMove === 3) {
        alert("You played Scissors. The computer played Rock. You Lose")
        score.Losses++;
        document.getElementById("outcome").innerHTML = "Winner: Computer";
        document.getElementById("outcome2").innerHTML = "Loser: You";

      } else if (computerMove === 2 && myMove === 1) {
        alert("You played Rock. The computer played Paper. You Lose");
        score.Losses++;
        document.getElementById("outcome").innerHTML = "Winner: Computer";
        document.getElementById("outcome2").innerHTML = "Loser: You";
      } else if (computerMove === 3 && myMove === 2) {
        alert("You played Paper. The computer played Scissors. You Lose");
        score.Losses++;
        document.getElementById("outcome").innerHTML = "Winner: Computer";
        document.getElementById("outcome2").innerHTML = "Loser: You";
      } else if (computerMove === 3 && myMove === 1) {
        alert("You played Rock. The computer played Scissors. You Win");
        score.Wins++;
        document.getElementById("outcome").innerHTML = "Winner: You";
        document.getElementById("outcome2").innerHTML = "Loser: Computer";
      } else if (computerMove === 1 && myMove === 2) {
        alert("You played Paper. The computer played Rock. You Win");
        score.Wins++;
        document.getElementById("outcome").innerHTML = "Winner: You";
        document.getElementById("outcome2").innerHTML = "Loser: Computer";
      } else if (computerMove === 2 && myMove === 3) {
        alert("You played Scissors. The computer played Paper. You Win");
        score.Wins++;
        document.getElementById("outcome").innerHTML = "Winner: You";
        document.getElementById("outcome2").innerHTML = "Loser: Computer";
      } else { /*When there is a tie*/
        alert("Tie")
        score.Ties++;
        document.getElementById("outcome").innerHTML = "";
        document.getElementById("outcome2").innerHTML = "";
      }

      /* Change the numbers to text*/

      if (myMove === 1) {
        myMove = "Rock";
      } else if (myMove === 2) {
        myMove = "Paper";
      } else if (myMove === 3) {
        myMove = "Scissors";
      }

      if (computerMove === 1) {
        computerMove = "Rock";
      } else if (computerMove === 2) {
        computerMove = "Paper";
      } else if (computerMove === 3) {
        computerMove = "Scissors";
      }


      /* Shows what move you & the computer played*/

      document.getElementById("myM").innerHTML = "Your move: " + myMove;
      document.getElementById("computerM").innerHTML = "Computer's Move: " + computerMove;

      localStorage.setItem('score', JSON.stringify(score));

      alert(`Wins: ${score.Wins}|Losses: ${score.Losses}|Ties: ${score.Ties}`);


    }

    function resetScore() {
      score.Wins = 0;
      score.Losses = 0;
      score.Ties = 0;
      localStorage.removeItem('score')

    }





    /*Tenary statement the first characters behind the question mark is the condition
    if it is true the code behond the colon will play & vice versa */
    console.log("Tenary Test:")
    5 + 4 === 9 ? console.log("truthy") : console.log("Falsy")



    /* Paramaters use values (What is inside the function)
    -You can set the values to have a defualt value */

    function ageCounter(myAge) {

      console.log(`I am ${myAge} years old`)

    };

    ageCounter(15);

