require.config({
  baseUrl: "/app/js",
  shim : {
    "bootstrap" : { "deps" :['jquery'] }
  },
  paths: {
    "jquery" : "/bower/jquery/dist/jquery.min",
    "bootstrap" :  "/bower/bootstrap/dist/js/bootstrap.min"
  }
});

require(['jquery', 'bootstrap', 'chessBoard'], function($, boostrap, chessBoard) {
  $(function() {
    chessBoard.run();
  });
});
