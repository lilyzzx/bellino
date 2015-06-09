$(function() {
  var newBoardForm = new Bellino.Views.BoardForm();

  $("body").on("click", ".new-board", function (event) {
    event.stopPropagation();
    event.preventDefault();
    if ($(".tcon").hasClass("tcon-transform") && $(".new-board-title").val() != "") {
      newBoardForm.saveBoard();
    } else {
      $("body").addClass("modal-is-open");
      $(".modal-form").html(newBoardForm.render().$el);
    };
  });

  $("body").on("click", ".modal-close", function (event) {
    newBoardForm.closeForm();
  });

  // $("body").on("click", ".login-btn", function (event) {
  //   $("body").addClass("modal-is-open");
  // });
});
