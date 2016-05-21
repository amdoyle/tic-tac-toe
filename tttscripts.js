$(document).on('ready', function(){
// set the turn counter to start at 0
  // alert("Welcome to The Wilderness!\nWho will win? The camper or the bear?");
  var turns = 1;
  var playerX = "x";
  var playerO = "O";
  // var playerX = prompt("Camper - please enter your name:");
  //   $('#playerX').html(playerX);
  // var playerO = prompt("Bear - please enter your name:");
  //   $('#playerO').html(playerO);

  var containerO = [];
  var scoreX = 0;
  var containerX = [];
  var scoreO = 0;



  // Click to create X or O
  $('td').on('click', function(){
  // setting a variable. we want to do the work and do it once
    turns++;
    var oldCell = $(this);
    // determin the turn - even turns the click returns an x and on odd turn the click returns an o
    if ( turns % 2 ){
      // oldCell.replaceWith("<td class='squareXO'> O </td>");
      containerO.push(oldCell[0].className);
      oldCell.addClass("squareO").html('<img class="bear" src="bear.svg" alt="bear played" />');
      if ( (turns/2) >= 3 ){
        convertScore(containerO);
      }

    } else {
      // oldCell.replaceWith("<td class='squareXO'> X </td>");
      containerX.push(oldCell[0].className);
      oldCell.addClass("squareX").html('<img class="foot" src="foot.svg" alt="human played" />');
      if ( (turns/2) >= 3 ){
        convertScore(containerX);
      }
    }
    // this removes the event listener so we can only click once.
      oldCell.off('click');


  });


    $('#reset').on('click', function(){
    location.reload();
    });

  // Converts score to parseInt
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
            alert(` ${player} Wins!`);
            if(turns % 2){
              scoreO++;
              updateScore(scoreO);
            } else {
              scoreX++;
              updateScore(scoreX);
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

  function updateScore(playerScore){
    $('#scoreO').html(scoreO);
    $('#scoreX').html(scoreX);
  }


});
