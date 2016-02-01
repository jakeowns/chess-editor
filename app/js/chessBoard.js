define(['jquery', 'jqueryui', 'fenLoader'], function($, ui, fenLoader) {
  //var startFen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR';
  var startFen = 'rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R';
  return {
    run: function() {
      fenLoader.load(startFen);
      // init drag events
      $('board')
        .find('square').droppable({
          drop: function(e, ui) {
            var $drag = $(ui.draggable).detach().css({ top: 0, left: 0 });
            $(this).empty().append( $drag );
            setTimeout(function() {
              $drag.draggable();
            }, 500);
          }
        }).find('piece').draggable({
          zIndex: 10,
          containment: 'board',
          scroll: false
        });
    }
  };
});
