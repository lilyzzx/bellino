Bellino.Views.BoardForm = Backbone.View.extend({
  template: JST['boards/form'],

  className: 'board-new new-board-form',
  tagName: 'div',

  events: {
    'keypress .new-board-title': 'checkEnter'
  },

  render: function () {
    var view = this.template();
    this.$el.html(view);
    return this;
  },

  saveBoard: function () {
    var title = this.$el.find(".new-board-title").val();
    var board = new Bellino.Models.Board({ title: title });

    board.save({}, {
      success: function () {
        Bellino.Collections.boards.add(board);
        $(".tcon").removeClass("tcon-transform");
        this.closeForm();
        $(".new-board-title").val("");
        $("html, body").animate({ scrollTop: $(document).height() }, "slow");
      }.bind(this)
    });
  },

  checkEnter: function (event) {
    if (event.which == 13) {
      this.saveBoard();
      return false;
    }
  },

  closeForm: function () {
    $(".modal-close").removeClass("dark-modal");
    $("body").removeClass("modal-is-open");
    $(".tcon").removeClass("tcon-transform");
  }
});
