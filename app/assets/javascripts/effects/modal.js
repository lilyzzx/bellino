$(function() {

  $("body").on("click", ".new-board", function (event) {
    event.stopPropagation();
    event.preventDefault();
    if ($(".tcon").hasClass("tcon-transform") && $(".new-board-title").val() != "") {
      newBoardForm.saveBoard();
    } else {
      $("body").addClass("modal-is-open");
      var newBoardForm = new Bellino.Views.BoardForm();
      $(".modal-form").html(newBoardForm.render().$el);
    };
  });

  $("body").on("click", ".modal-close", function (event) {
    newBoardForm.closeForm();
  });
});
