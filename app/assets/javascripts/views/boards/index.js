Bellino.Views.BoardsIndex = Backbone.View.extend({
  template: JST['boards/index'],
  tagName: 'section',
  className: 'boards-list',

  initialize: function () {
    this.listenTo(this.collection, "add sync", this.render);
  },

  render: function () {
    var view = this.template({ boards: this.collection });
    this.$el.html(view);
    return this;
  }
});
