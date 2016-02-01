require.config({
  baseUrl: "/app/js",
  shim : {
    "bootstrap" : { "deps": ["jquery"] },
    "jqueryui" : { "deps": ["jquery"] }
  },
  paths: {
    "jquery" : "/bower/jquery/dist/jquery.min",
    "jqueryui" : "/bower/jqueryui/jquery-ui.min",
    "bootstrap" :  "/bower/bootstrap/dist/js/bootstrap.min"
  }
});

require(['jquery', 'bootstrap', 'chessBoard'], function($, boostrap, chessBoard) {
  $(function() {
    chessBoard.run();
  });
});
