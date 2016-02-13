$(document).on('ready', function(){
// set the turn counter to start at 0
  var turn = 0;
  var winningCombos = [[]];

  var containerX = $('<div id="containerX"></div>').hide();
  var containerO = $('<div id="containerO"></div>').hide();

  $('body').append(containerX);
  $('body').append(containerO);

  // Click to create X or O
  $('td').on('click', function(){
  // setting a variable. we want to do the work and do it once
    var self = $(this);
    // determin the turn - even turns the click returns an x and on odd turn the click returns an o
    if ( turn % 2 ){
      self.replaceWith('<td> O </td>');
        $('#containerO').append(self);
        checkForWinner(document.getElementById('containerO').children);
    } else {
      self.replaceWith('<td> X </td>');
        $('#containerX').append(self);
        checkForWinner(document.getElementById('containerX').children);
    }
    // this removes the event listener so we can only click once.
    self.off('click');

    turn++;

    function checkForWinner(array){

        for (i = 0; i < 9; i++){
          var square = array[i];
          var currentScore = parseInt(square);
          // var currentScore = parseInt(score);
          checkScore(currentScore);
        }

        function checkScore(someScore){


        if (someScore === 5){
          alert("you won!");
        }
        }
    }
});

// specifiy order of turns

// create a loop to allow the users to keep playing untill there is a winner

//evaluate to see if there is a winner




// declare a winner or a scratch game

// reset the board to start over


});
