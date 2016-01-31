define(['jquery'], function($) {
  //var startFen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR';
  var startFen = 'rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R';
  return {
    run: function() {
      var rowPos = 0;
      var rows = startFen.split('/');
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
              $('<piece>').append('<img src="/app/img/pieces/'+ prefix + c[chp] +'.png"/>')
            );
          }
          chp++;
        }
        rowPos++;
      });
    }
  };
});
