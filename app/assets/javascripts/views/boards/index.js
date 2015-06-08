Bellino.Views.BoardsIndex = Backbone.View.extend({
  template: JST['boards/index'],
  tagName: 'section',
  className: 'boards-list',

  events: {
    'click .board-delete': 'deleteBoard'
  },

  initialize: function () {
    this.listenTo(this.collection, "add sync remove", this.render);
  },

  render: function () {
    var view = this.template({ boards: this.collection });
    this.$el.html(view);
    return this;
  },

  deleteBoard: function (event) {
    event.preventDefault();
    var targetId = $(event.target.parentElement).data('id');
    board = this.collection.getOrFetch(targetId);
    board.destroy();
  }
});
