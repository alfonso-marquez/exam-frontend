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
      $(this)
        .html('<i class="bi bi-play-fill" aria-hidden="true"></i>') // play icon
        .attr("aria-label", "Play") // update label
        .attr("aria-pressed", "false");
    } else {
      $slider.slick("slickPlay");
      $(this)
        .html('<i class="bi bi-pause-fill" aria-hidden="true"></i>') // pause icon
        .attr("aria-label", "Pause") // update label
        .attr("aria-pressed", "true");
    }
    isPlaying = !isPlaying;
  });

  //hover deprecated
  if ($(window).width() > 768) {
    // run only if not mobile
    $(".dropdown")
      .on("mouseenter", function () {
        $(this).children(".dropdown-menu").addClass("show");
      })
      .on("mouseleave", function () {
        $(this).children(".dropdown-menu").removeClass("show");
      });
  }
});
