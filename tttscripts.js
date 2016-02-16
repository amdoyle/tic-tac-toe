$(document).on('ready', function(){
// set the turn counter to start at 0
  var turns = 1;
  var winningCombos = [[]];


  var containerX = [];
  var scoreX = 0;
  var containerO = [];
  var scoreO = 0;

  // Click to create X or O
  $('td').on('click', function(){
  // setting a variable. we want to do the work and do it once
    var oldCell = $(this);
    // determin the turn - even turns the click returns an x and on odd turn the click returns an o
    if ( turns % 2 ){
      oldCell.replaceWith("<td class='squareXO'> O </td>");
      containerO.push(oldCell[0].innerText);
      checkForWinner(containerO);

    } else {
      oldCell.replaceWith("<td class='squareXO'> X </td>");
      containerX.push(oldCell[0].innerText);
      checkForWinner(containerX);
    }
    // this removes the event listener so we can only click once.
    oldCell.off('click');

    turns++;
  });

    function checkForWinner(scoreArray){

        for (i = 0; i < scoreArray.length; i++){
          var square = scoreArray[i];
          var squareToNum = parseInt(square);
        }
          if (turns % 2){
            scoreO += squareToNum;
            console.log("Current score for O is " + scoreO);
            checkScore(scoreO, scoreArray);
          }else{
            scoreX += squareToNum;
            console.log("Current score for X is " + scoreX);
            checkScore(scoreX, scoreArray);
          }
        }

        function checkScore(someScore, someContainer){

            if(someScore >= 15 && jQuery.inArray([2, 7, 6], someContainer)){
              alert("you won 1!");
            }else if(someScore >= 15 && jQuery.inArray([9, 5, 1], someContainer)){
              alert("you won 2!");
            }else if(someScore >= 15 && jQuery.inArray([4, 3, 8], someContainer)){
              alert("you won 3!");
            }else if(someScore >= 15 && jQuery.inArray([2, 9, 4], someContainer)){
              alert("you won 4!");
            }else if(someScore >= 15 && jQuery.inArray([7, 5, 3], someContainer)){
              alert("you won 5!");
            }else if(someScore >= 15 && jQuery.inArray([6, 1, 8], someContainer)){
              alert("you won 6!");
            }else if(someScore >= 15 && jQuery.inArray([2, 5, 8], someContainer)){
              alert("you won 7!");
            }else if(someScore >= 15 && jQuery.inArray([6, 5, 4], someContainer)){
              alert("you won 2!");
            }else if (someScore === 45){
            alert("No Winner.");
          }
          }

});

// specifiy order of turns

// create a loop to allow the users to keep playing untill there is a winner

//evaluate to see if there is a winner




// declare a winner or a scratch game

// reset the board to start over
