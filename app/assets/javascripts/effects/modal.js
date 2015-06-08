$(function() {
  var newBoardForm = new Bellino.Views.BoardForm();

  $("body").on("click", ".new-board", function (event) {
    event.stopPropagation();
    event.preventDefault();
    if ($(".btn.new-board").html() == "8" && $('.new-board-title').val() != "") {
      console.log("yo");
      newBoardForm.saveBoard();
    } else {
      $("body").addClass("modal-is-open");
      $(".modal-form").html(newBoardForm.render().$el);
    };
  });

  $("body").on("click", ".modal-close", function (event) {
    $(".modal-close").removeClass("dark-modal");
    $("body").removeClass("modal-is-open");
    $(".modal-form").empty();
    $('.btn.new-board').html('+');
  });

  // $("body").on("click", ".login-btn", function (event) {
  //   $("body").addClass("modal-is-open");
  // });
});
