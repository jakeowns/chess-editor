define(['jquery', 'jqueryui'], function($) {
  //var startFen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR';
  var startFen = 'rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R';
  return {
    run: function() {
      var rowPos = 0;
      var rows = startFen.split('/');
      $('square').droppable({
        drop: function(e, ui) {
          var $drag = $(ui.draggable).detach().css({ top: 0, left: 0 });
          $(this).empty();
          $(this).append( $drag );
          setTimeout(function() {
            $drag.draggable();
          }, 500);
        }
      });
      $('board board-row').each(function() {
        var c = rows[rowPos].split(''),
            $squares = $(this).find('square'),
            chp = 0;
        for(var i = 0; i < $squares.length; i++) {
          if(!isNaN(+c[chp])) {
            i = i + (+c[chp]-1);
          } else {
            var prefix = c[chp] === c[chp].toUpperCase() ? '_' : '';
            $($squares.get(i)).append(
              $('<piece>')
                .draggable({
                  revert: 'invalid'
                })
                .append('<img src="/app/img/pieces/'+ prefix + c[chp] +'.png"/>')
            );
          }
          chp++;
        }
        rowPos++;
      });
    }
  };
});
