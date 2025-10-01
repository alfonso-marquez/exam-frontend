$(document).ready(function () {
  var $slider = $(".slider");

  $slider.slick({
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    appendDots: $(".custom-dots-div"), // Appends dots to this element
  });

  var isPlaying = true;

  $(".play-pause-btn").on("click", function () {
    if (isPlaying) {
      $slider.slick("slickPause");
      $(this).text("▶"); // play icon
    } else {
      $slider.slick("slickPlay");
      $(this).text("❚❚"); // pause icon
    }
    isPlaying = !isPlaying;
  });
});
