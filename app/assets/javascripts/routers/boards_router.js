Bellino.Routers.BoardRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'boards/:id': 'boardShow',
  },

  initialize: function (options) {
    this.$rootEl = $(options.mainEl);
    this.boards = new Bellino.Collections.Boards();
    this.boards.fetch();
  },

  index: function () {
    var boardsIndexView = new Bellino.Views.BoardsIndex({
      collection: this.boards
    });

    this._swapView(boardsIndexView);

  },

  boardShow: function (id) {
    var board = this.boards.getOrFetch(id);

    var boardShow = new Bellino.Views.BoardShow({
      model: board
    });

    this._swapView(boardShow);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
