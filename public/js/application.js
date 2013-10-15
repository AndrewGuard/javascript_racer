$(document).ready(function() {
  $(document).on('keyup', function(event) {
    // Responds to "Q"
    if (event.keyCode == 81) {
      $('.active1').next().addClass('active1');
      $('.active1').eq(0).removeClass('active1');
      if ($("#player1_strip").children("td").last().hasClass('active1')) {
        $(this).off(event); 
        $('#game_over').append("Player 1 wins.");
        }
      }
 
    // Responds to "P"
    else if (event.keyCode == 80) {
      $('.active2').next().addClass('active2');
      $('.active2').eq(0).removeClass('active2');
      if ($("#player2_strip").children("td").last().hasClass('active2')) {
        $(this).off(event); 
        $('#game_over').append("Player 2 wins.");
      }
    }
  });
});