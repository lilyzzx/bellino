Bellino.Views.CardShow = Backbone.View.extend({
  template: JST['cards/show'],

  className: 'card-show',

  events: {
    'click .new-item-link': 'newItem',
    'click li': 'toggleItemDone'
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

  toggleItemDone: function (event) {
    event.preventDefault();
    if (this.card.get('done')) {
      this.card.set({ done: false });
    } else {
      this.card.set({ done: true });
    }
    this.card.save();
  },

  destroyItem: function (event) {
    event.preventDefault();
    this.card.destroy();
  }
});
