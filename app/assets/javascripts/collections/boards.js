Bellino.Collections.Boards = Backbone.Collection.extend({
  url: 'api/boards',
  model: Bellino.Models.Board,

  getOrFetch: function (id) {
    var board = this.get(id);

    if (!board) {
      board = new Bellino.Models.Board({ id: id });
      board.fetch({
        success: function() {
          this.add(board);
        }.bind(this)
      });
    } else {
      board.fetch();
    }
    return board;
  }
});
