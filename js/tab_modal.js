$(function () {
  $(".tabmenu > li > a").click(function () {
    console.log(this.parent);
    $(this).parent().addClass("active").siblings().removeClass("active");
  });
  // modal
  $(".notice li:first-child").click(function () {
    // $(".modal").addClass("active");
    $(".modal").show()
  });
  // modal close
  $(".modal-btn").click(function () {
    // $(".modal").removeClass("active");
    $(".modal").hide()
  });
});
