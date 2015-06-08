window.Bellino = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function() {
    new Bellino.Routers.BoardRouter({ mainEl: '#main' });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Bellino.initialize();
});
