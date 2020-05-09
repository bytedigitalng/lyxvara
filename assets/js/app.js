$(function () {
  // Navigation animation starts
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 200) {
      $("nav").addClass("navshadow");
    } else {
      $("nav").removeClass("navshadow");
    }
  });
  // Navigation animation ends

  //zoom background image
  $(".article-container").mouseover(function () {
    $(this).find(".article-img-holder").css("transform", "scale(1.2)");
  });

  $(".article-container").mouseout(function () {
    $(this).find(".article-img-holder").css("transform", "scale(1)");
  });
  //zoom background image
});
