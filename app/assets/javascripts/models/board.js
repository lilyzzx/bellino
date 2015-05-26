Bellino.Models.Board = Backbone.Model.extend({
  urlRoot: 'api/boards',

  parse: function (response) {
    if (response.lists) {
      this.lists().set(response.lists, { parse: true });
      delete response.lists;
    }

    return response;
  },

  lists: function () {
    if (!this._lists) {
      this._lists = new Bellino.Collections.Lists([], { board: this });
    }

    return this._lists;
  }
});
