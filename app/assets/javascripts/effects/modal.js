$(function() {
  $("body").on("click", ".new-board", function (event) {
    $("body").addClass("modal-is-open");
    var newBoardForm = new Bellino.Views.BoardForm();
    $(".modal-form").html(newBoardForm.render().$el);
  });

  $("body").on("click", ".modal-close", function (event) {
    $(".modal-close").removeClass("dark-modal");
    $("body").removeClass("modal-is-open");
    $(".modal-form").empty();
  });

  // $("body").on("click", ".login-btn", function (event) {
  //   $("body").addClass("modal-is-open");
  // });
});
