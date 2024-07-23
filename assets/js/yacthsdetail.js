$(function () {
  $(window).on("scroll", function () {
    var bodyScroll = $(this).scrollTop(),
      navbar = $(".navbar");
    if (bodyScroll > 100) {
      navbar.addClass("nav-scroll");
    } else {
      navbar.removeClass("nav-scroll");
    }
  });

  var progressPath = document.querySelector(".progress-wrap path");
  var pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition = "none";
  progressPath.style.strokeDasharray = pathLength + " " + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition =
    "stroke-dashoffset 10ms linear";
  var updateProgress = function () {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var progress = pathLength - (scroll * pathLength) / height;
    progressPath.style.strokeDashoffset = progress;
  };
  updateProgress();
  $(window).scroll(updateProgress);
  var offset = 150;
  var duration = 550;
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > offset) {
      $(".progress-wrap").addClass("active-progress");
    } else {
      $(".progress-wrap").removeClass("active-progress");
    }
  });
  $(".progress-wrap").on("click", function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      duration
    );
    return false;
  });

  if ($(".interior-carousel").length) {
    $(".interior-carousel").owlCarousel({
      loop: true,
      autoplay : true,
      margin: 30,
      autoHeight: false,
      autoplayTimeout: 2000,
      dots: true,
      nav: true,
      navText: [
        '<i class="fa-solid fa-chevron-left" aria-hidden="true" ></i>',
        '<i class="fa-solid fa-chevron-right" aria-hidden="true"></i>',
      ],
      responsiveClass: true,
      responsive: {
        0: {
          dots: false,
          nav: false,
          items: 1,
        },
        600: {
          dots: false,
          nav: false,
          items: 1,
        },
        1000: {
          dots: false,
          items: 1,
        },
      },
    });
  }


   $('#luxury-yacht .owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    mouseDrag: true,
    autoplay: false,
    dots: true,
    nav: false,
    navText: ["<span class='lnr ti-angle-left'></span>", "<span class='lnr ti-angle-right'></span>"],
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
});
});
