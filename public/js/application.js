var start = 0;
var finish
var time
$(document).ready(function() {
  
  $(document).on('keyup', function(event) {
    // Responds to "Q"
    if (event.keyCode == 81) {
      $('.active1').next().addClass('active1');
      $('.active1').eq(0).removeClass('active1');
      start_timer();
      if ($("#player1_strip").children("td").last().hasClass('active1')) {
        finish = $.now();
        console.log("this is player 1 finish" + finish);
        $(this).off(event); 
        var player1 = $('#player1').text();
        update_user(player1);
        $('#game_over').append(player1 + "wins in " + time + " miliseconds.");
        }
      }
 
    // Responds to "P"
    else if (event.keyCode == 80) {
      $('.active2').next().addClass('active2');
      $('.active2').eq(0).removeClass('active2');
      start_timer();
      if ($("#player2_strip").children("td").last().hasClass('active2')) {
        finish = $.now();
        console.log("this is player 2 finish" + finish);
        $(this).off(event);
        var player2 = $('#player2').text(); 
        update_user(player2);
        $('#game_over').append(player2 + "wins in " + time + " miliseconds.");
      }
    }
  });
});


function start_timer() {
  if (($("#player1_strip").children("td").eq(1).hasClass('active1')) || $("#player2_strip").children("td").eq(1).hasClass('active2')){
    if (start == 0){start = $.now();}
  }; 
}

function update_user(winner) { 
  var url = '/winner';
  var id = $('#game').attr('data-game');
  time = finish - start;
  console.log(time);
  var data = {winner_name: winner, game_id: id, time: time};
  $.post(url, data);
 }