Bellino.Models.Card = Backbone.Model.extend({
  urlRoot: 'api/cards',

  items: function () {
    if (!this._items) {
      this._items = new Bellino.Collections.Items([], { card: this });
    }

    return this._items;
  }
});
