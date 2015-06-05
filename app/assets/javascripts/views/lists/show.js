Bellino.Views.ListShow = Backbone.View.extend({
  template: JST['lists/show'],
  linkTemplate: JST['cards/new_link'],

  className: 'list-show group',

  events: {
    'click .new-card-link': 'newCard',
    'click .list-delete': 'destroyList',
    'click li': 'closeNewCard'
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
    this.$el.find('.new-card-form').removeClass("animation-shrinkform");
    this.$el.find('.new-card-form').addClass("animation-growform");
    var newCardView = new Bellino.Views.CardNew({
      list: this.list,
      board: this.board
    });
    this.$el.find('.new-card-form').html(newCardView.render().$el);
  },

  closeNewCard: function (event) {
    if (event.toElement.className != "list-item") { return; }
    this.$el.find('.new-card-form').html(this.linkTemplate());
    this.$el.find('.new-card-form').removeClass("animation-growform");
    this.$el.find('.new-card-form').addClass("animation-shrinkform");
  },

  destroyList: function (event) {
    event.preventDefault();
    this.list.destroy();
  }
});
