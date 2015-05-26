window.Bellino = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function() {
    var mainEl = '#main';

    new Bellino.Routers.BoardRouter({ mainEl: mainEl });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Bellino.initialize();
});
