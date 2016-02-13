$(document).on('ready', function(){
// set the turn counter to start at 0
  var turn = 0;
  var winningCombos = [[]];



  // Click to create X or O
  $('td').on('click', function(){
// setting a variable. we want to do the work and do it once
    var self = $(this);
// determin the turn - even turns the click returns an x and on odd turn the click returns an o
    if ( turn % 2 ){
      self.replaceWith('<td> O </td>');
        $('#containerY').append(self).hide();
    } else {
      self.replaceWith('<td> X </td>');
      $('#containerX').append(self).hide();
    }
// this removes the event listener so we can only click once.
    self.off('click');

    checkForWinner();
// incrementing the turn
    turn++;

  });


// specifiy order of turns

// create a loop to allow the users to keep playing untill there is a winner

//evaluate to see if there is a winner
function checkForWinner(){
  // winningCombs =
  //
  //   if winningCombos === 15{
  //     alert("You Win!")
  //   }else

}
// declare a winner or a scratch game

// reset the board to start over


});
