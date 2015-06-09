Bellino.Views.BoardForm = Backbone.View.extend({
  template: JST['boards/form'],

  className: 'board-new',

  render: function () {
    var view = this.template();
    this.$el.html(view);
    $(".tcon").addClass("tcon-transform");
    return this;
  },

  saveBoard: function () {
    var attrs = this.$el.find('.new-board-form').serializeJSON().board;
    var board = new Bellino.Models.Board(attrs);

    board.save({}, {
      success: function () {
        $(".tcon").removeClass("tcon-transform");
        Backbone.history.navigate("#", { trigger: true });
      }
    });
  }
});
