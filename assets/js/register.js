$(function () {
  $("#kenburnsSliderContainer").vegas({
    slides: [
      {
        src: "./assets/img/blog/5.jpg",
      },
      {
        src: "./assets/img/blog/1.jpg",
      },
      {
        src: "./assets/img/blog/01.jpg",
      },
      {
        src: "./assets/img/blog/3.jpg",
      },
    ],
    overlay: false,
    transition: "fade3",
    animation: "kenburnsUpRight",
    transitionDuration: 1000,
    delay: 10000,
    animationDuration: 20000,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
  });

  $("#eye").click(function (e) {
    e.preventDefault();

    if ($(this).hasClass("fa-regular fa-eye")) {
      $(this).removeClass("fa-regular fa-eye");

      $(this).addClass("fa-regular fa-eye-slash");

      $("#password").attr("type", "text");
    } else {
      $(this).removeClass("fa-regular fa-eye-slash");

      $(this).addClass("fa-regular fa-eye");

      $("#password").attr("type", "password");
    }
  });



  $("#eyes").click(function (e) {
    e.preventDefault();

    if ($(this).hasClass("fa-regular fa-eye")) {
      $(this).removeClass("fa-regular fa-eye");

      $(this).addClass("fa-regular fa-eye-slash");

      $("#passwords").attr("type", "text");
    } else {
      $(this).removeClass("fa-regular fa-eye-slash");

      $(this).addClass("fa-regular fa-eye");

      $("#passwords").attr("type", "password");
    }
  });



  $(".bt-signin").click(function (e) {
    e.preventDefault();

    if ($(".img").hasClass("right-zero")) {
      $(".img").removeClass("right-zero");
    } else {
      $(".img").addClass("left-zero");
    }
  });


  $(".bt-signup").click(function (e) {
    e.preventDefault();

    if ($(".img").hasClass("left-zero")) {
      $(".img").removeClass("left-zero");
      $(".img").addClass("right-zero");
    } else {
      $(".img").addClass("right-zero");
    }
  });

  $(".forget-btn").click(function (e) {
    e.preventDefault();
    $(".signin").addClass("d-none");
    $(".forget-pass").removeClass("d-none");
  });


  $(".cancel button").click(function (e) {
    e.preventDefault();
    $(".forget-pass").addClass("d-none");
    $(".signin").removeClass("d-none");
  });





});
