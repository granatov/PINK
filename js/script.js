$(document).ready(function () {
  $(".feedback_slider").slick({
    dots: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          dots: true,
          arrows: false,
        },
      },
    ],
  });
});

var slider = $(".tarif_slider");

/* Slider settings */
var settings = {
  dots: false,
  arrows: false,
  variableWidth: true,
  centerMode: true,
  variableWidth: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 660,
      settings: "unslick",
      settings: {
        dots: true,
      },
    },
    {
      breakpoint: 9048,
      settings: "unslick",
    },
  ],
};

/* Do this every time window gets resized */
$(window).on("resize", function () {
  /* If we are above mobile breakpoint unslick the slider */
  if ($(window).width() >= 660) {
    /* Do this only if slider is initialized */
    if (slider.hasClass("slick-initialized")) {
      slider.slick("unslick");
    }
    return;
  } else if (!slider.hasClass("slick-initialized")) {
    /* We are below mobile breakpoint, initialize the slider
      if it is not already initialized */
    return slider.slick(settings);
  }
});

$(window).trigger("resize");

$(document).ready(function () {
  $(".header_burger").click(function (event) {
    $(".header_burger, .top_menu_list").toggleClass("active");
    $("body").toggleClass("lock");
  });
});
