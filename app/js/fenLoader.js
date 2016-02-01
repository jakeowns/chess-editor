define(['jquery'], function($) {
  //reg /([rnbqkn1-8]{1,8}\/?){8}/i
  return {
    load: function(fen) {
      var rows = fen.split('/');
      $('board board-row').each(function() {
        var c = rows[ $(this).index() ].split(''),
            $squares = $(this).find('square'),
            chp = 0;
        for(var i = 0; i < $squares.length; i++) {
          if(!isNaN(+c[chp])) {
            i = i + (+c[chp]-1);
          } else {
            var prefix = c[chp] === c[chp].toUpperCase() ? '_' : '';
            $($squares.get(i)).append(
              $('<piece>').append('<img src="/app/img/pieces/' + prefix + c[chp] + '.png"/>')
            );
          }
          chp++;
        }
      });
    }
  };
});