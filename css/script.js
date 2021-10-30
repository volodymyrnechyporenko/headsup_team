$("#btn-start").one("click", function() {

  $(".leadership-team").fadeToggle(800);

  $('#sample_audio').get(0).play();

  $("#btn-start").velocity( {
    marginTop: "-=35vh",
    width: "-=4vw",
    marginLeft: "+2vw"
  }, {
    delay: 1000
  }, 1000);

  $(".slider-wrapper").delay(1800).fadeToggle(800);

});


$("a").on("click", function (event) {

  if (this.hash !== "") {

    event.preventDefault();

    var hash = this.hash;

    $("html, body").animate({
      scrollTop: $(hash).offset().top
    }, 600, function () {

      window.location.hash = hash;
    });
  }
});


$(window).scroll(function () {

  if ($(this).scrollTop() > 300) {
    $(".scrollToTop").fadeIn();
  } else {
    $(".scrollToTop").fadeOut();
  }

});


$(".scrollToTop").click(function () {
  
  $("html, body").velocity({
    scrollTop: 0
  }, 800);

  return false;

});


$(window).on("scroll", function () {

  var top = $(window).scrollTop() + $(window).height(),
    isVisible = top > $(".teammate").offset().top;

  $(".teammate").toggleClass("animate-team", isVisible);

});


$(window).on("scroll", function () {

  var top = $(window).scrollTop() + $(window).height(),
    isVisible = top > $(".cv-photo").offset().top;

  $(".cv-photo").toggleClass("animate-img", isVisible);
  
});