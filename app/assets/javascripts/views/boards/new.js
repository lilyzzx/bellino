Bellino.Views.BoardForm = Backbone.View.extend({
  template: JST['boards/form'],

  className: 'board-new',

  render: function () {
    var view = this.template();
    this.$el.html(view);
    $('.btn.new-board').html('▲');
    return this;
  },

  saveBoard: function () {
    var attrs = this.$el.find('.new-board-form').serializeJSON().board;
    var board = new Bellino.Models.Board(attrs);

    board.save({}, {
      success: function () {
        $('.btn.new-board').html('+');
        Backbone.history.navigate("#", { trigger: true });
      }
    });
  }
});
