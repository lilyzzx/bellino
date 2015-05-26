Bellino.Views.CardShow = Backbone.View.extend({
  template: JST['cards/show'],

  className: 'card-show',

  events: {
    'click .new-item-link': 'newItem',
    'click li': 'destroyItem'
  },

  initialize: function (options) {
    this.card = options.card,
    this.board = options.board,
    this.listenTo(this.card, "add sync remove", this.render);
  },

  render: function () {
    var view = this.template({ card: this.card });
    this.$el.html(view);
    return this;
  },

  destroyItem: function (event) {
    event.preventDefault();
    this.card.destroy();
  }
});
