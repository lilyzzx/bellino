Bellino.Views.BoardForm = Backbone.View.extend({
  template: JST['boards/form'],

  className: 'board-new',

  events: {
    'submit form': 'saveBoard'
  },

  render: function () {
    var view = this.template();
    this.$el.html(view);
    return this;
  },

  saveBoard: function (event) {
    event.preventDefault();

    var attrs = this.$el.find('form').serializeJSON().board;
    console.log(attrs);
    var board = new Bellino.Models.Board(attrs);

    board.save({}, {
      success: function () {
        Backbone.history.navigate("", { trigger: true });
      }
    });
  }
});
