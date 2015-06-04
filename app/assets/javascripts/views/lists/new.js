Bellino.Views.ListNew = Backbone.View.extend({
  template: JST['lists/new'],

  tagName: 'form',
  // collection: board,

  events: {
    'click .add-list': 'saveList'
  },

  render: function () {
    var view = this.template();
    this.$el.html(view);
    return this;
  },

  saveList: function (event) {
    event.preventDefault();
    var attrs = this.$el.serializeJSON().list;
    var board_id = this.collection.id;

    attrs = $.extend(attrs, {
      board_id: board_id,
      ord: this.collection.lists().length
    });
    var list = new Bellino.Models.List(attrs);

    list.save({}, {
      success: function () {
        this.collection.lists().add(list);
        Backbone.history.navigate("boards/" + board_id, { trigger: true });
      }.bind(this)
    });
  }
});
