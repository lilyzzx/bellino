Bellino.Views.BoardForm = Backbone.View.extend({
  template: JST['boards/form'],

  className: 'board-new new-board-form',
  tagName: 'form',

  events: {
    'keypress .new-board-title': 'checkEnter'
  },

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
        this.closeForm();
      }.bind(this)
    });
  },

  checkEnter: function (event) {
    if (event.which == 13) {
      this.saveBoard();
      $("html, body").animate({ scrollTop: $(document).height() }, "slow");
      return false;
    }
  },

  closeForm: function () {
    $(".modal-close").removeClass("dark-modal");
    $("body").removeClass("modal-is-open");
    $(".modal-form").empty();
    $(".tcon").removeClass("tcon-transform");
  }
});
