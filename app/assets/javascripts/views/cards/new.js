Bellino.Views.CardNew = Backbone.View.extend({
  template: JST['cards/new'],

  className: 'new-card',
  tagName: 'form',
  // collection: list,

  events: {
    'click .add-card': 'saveCard'
  },

  initialize: function (options) {
    this.list = options.list,
    this.board = options.board
  },

  render: function () {
    var view = this.template();
    this.$el.html(view);
    return this;
  },

  saveCard: function (event) {
    event.preventDefault();
    var attrs = this.$el.serializeJSON().card;
    var list_id = this.list.id;
    var board_id = this.board.id;

    attrs = $.extend(attrs, {
      list_id: list_id,
      ord: this.list.cards().length
    });
    var card = new Bellino.Models.Card(attrs);

    card.save({}, {
      success: function () {
        this.list.cards().add(card);
        Backbone.history.navigate("boards/" + board_id, { trigger: true });
      }.bind(this)
    });
  }
});
