Bellino.Views.ListShow = Backbone.View.extend({
  template: JST['lists/show'],

  className: 'list-show group',

  events: {
    'click .new-card-link': 'newCard',
    'click .list-delete': 'destroyList'
  },

  initialize: function (options) {
    this.list = options.list,
    this.board = options.board,
    this.listenTo(this.list, "sync remove", this.render);
    this.listenTo(this.list.cards(), "sync remove", this.render);
  },

  render: function () {
    var view = this.template({ list: this.list });
    this.$el.html(view);

    this.list.cards().each( function (card) {
      var cardView = new Bellino.Views.CardShow({
        card: card,
        board: this.board
      });
      this.$el.find('.cards-list').append(cardView.render().$el);
    }.bind(this));
    return this;
  },

  newCard: function (event) {
    event.preventDefault();
    var newCardView = new Bellino.Views.CardNew({
      list: this.list,
      board: this.board
    });
    this.$el.find('.new-card-form').html(newCardView.render().$el);
  },

  destroyList: function (event) {
    event.preventDefault();
    this.list.destroy();
  }
});
