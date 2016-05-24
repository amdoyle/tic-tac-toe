// This game uses a magic square to tally winners for the game
$(document).on('ready', function(){
  // Alert to welcome players - currently disable but may include later on
  // alert("Welcome to The Wilderness!\nWho will win? The camper or the bear?");

  var turns = 1;
  var playerX = "x";
  var playerO = "O";
  var playerX = prompt("Camper - please enter your name:");
  var playerO = prompt("Bear - please enter your name:");
  // This code will be implimented once the player scoreboard is implimented
    // $('#playerX').html(playerX);
    // $('#playerO').html(playerO);

  var containerO = [];
  var scoreX = 0;
  var containerX = [];
  var scoreO = 0;



  // Click to create X or O
  $('td').on('click', function(){
    turns++;
    var oldCell = $(this);
    // determin the turn - even turns the click returns an x and on odd turn the click returns an o
    if ( turns % 2 ){
      containerO.push(oldCell[0].className);
      oldCell.addClass("squareO").html('<img class="bear" src="images/bear.svg" alt="bear played" />');
      // Scores will only be convered if the turns are more than 3 - the
      // convertScore method calls the checkWinner function
      if ( (turns/2) >= 3 ){
        convertScore(containerO);
      }

    } else {
      containerX.push(oldCell[0].className);
      oldCell.addClass("squareX").html('<img class="foot" src="images/foot.svg" alt="human played" />');

      if ( (turns/2) >= 3 ){
        convertScore(containerX);
      }

    }
    // This removes the event listener so we can only click once
      oldCell.off('click');


  });

  // Reset listener to reload the game board.
  // Currently this works by reloading the page.
  // This may need to be adjusted to impliment player score board
  $('#reset').on('click', function(){
    location.reload();
  });

  // Converts score to a number
  function convertScore(scoreArray){

    var someNum = scoreArray.map(function(num){
                    return parseInt(num);
                  });

    // Calls the function to check winner
    if(turns % 2){
      checkWinner(someNum, playerO);
    }else {
      checkWinner(someNum, playerX);
    }

  }

  // Checks for the winner
  function checkWinner(someArray, player){

    for (var a = 0; a < someArray.length; a++) {
      for (var b = a + 1; b < someArray.length; b++) {
        for (var c = b + 1; c < someArray.length; c++) {
          if ((someArray[a]) + (someArray[b]) + (someArray[c]) === 15) {
            alert(`${player} Wins!`);
            if(turns % 2){
              scoreO++;
              // updateScore(scoreO);
            } else {
              scoreX++;
              // updateScore(scoreX);
            }
            return;
          }
        }
      }
    }
    if (turns === 10) {
      alert("Nobody winns. Wanna play again?");
    }
}

  // This function may be implimented later once the player score board is functioning
  // function updateScore(playerScore){
  //   $('#scoreO').html(scoreO);
  //   $('#scoreX').html(scoreX);
  // }


});
