Bellino.Views.BoardForm = Backbone.View.extend({
  template: JST['boards/form'],

  className: 'board-new new-board-form',
  tagName: 'form',

  render: function () {
    var view = this.template();
    this.$el.html(view);
    $(".tcon").addClass("tcon-transform");
    return this;
  },

  saveBoard: function () {
    var attrs = this.$el.serializeJSON().board;
    var board = new Bellino.Models.Board(attrs);

    board.save({}, {
      success: function () {
        Bellino.Collections.boards.add(board);
        $(".tcon").removeClass("tcon-transform");
        // Backbone.history.navigate("/#", { trigger: true });
        this.closeForm();
      }.bind(this)
    });
  },

  closeForm: function () {
    $(".modal-close").removeClass("dark-modal");
    $("body").removeClass("modal-is-open");
    $(".modal-form").empty();
    $(".tcon").removeClass("tcon-transform");
  }
});
