$(function () {
  var includes = $('[data-include]')
  $.each(includes, function () {
    var file = 'includes/' + $(this).data('include') + '.html'
    $(this).load(file)
  })
})

var hasSpyNav = document.getElementById("SpyNav");
var SpyContent = document.getElementById("SpyContent");

if (hasSpyNav != null) {
  var lefWidth = document.getElementById("SpyNav").offsetWidth + 1;
  if (window.innerWidth > 960) {
    SpyContent.style.width = "calc(100% - " + lefWidth + "px";
  }
}

$('.SpyNavBtn').click(function (event) {
  $('#SpyNav').toggleClass('closed');
  $("#SpyContent").toggleClass("w-100");
});

if ($(window).width() > 575) {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
      if ($(window).width() > 1720) {
        $(".contactTop, .followUsTop").addClass("scrolled");
        $(".sticky-top").css("top", 0);
        $(".navbar").css("border-radius", "0 0 15px 15px");
        $(".navbar").addClass("container-fluid").removeClass("container");
      }
      else {
        $("header").css("padding-top", 0);
        $(".sticky-top").css("top", 0);
        $(".navbar").addClass("container-fluid").removeClass("container").css("border-radius", "0");
        $(".gradBg").css("min-height", "calc(100vh - 57px)");
        $(".contactFollowTop").hide();
      }
    }
    else {
      if ($(window).width() > 1720) {
        $(".contactTop, .followUsTop").removeClass("scrolled");
        $(".sticky-top").css("top", 15);
        $(".navbar").css("border-radius", "15px");
        $(".navbar").removeClass("container-fluid").addClass("container");
      }
      else {
        $("header").css("padding-top", 40);
        $(".sticky-top").css("top", "10px");
        $(".navbar").removeClass("container-fluid").addClass("container").css("border-radius", "15px");
        $(".gradBg").css("min-height", "100vh");
        $(".contactFollowTop").show();
      }
    }
  })
}


$('.first-option').hide();


$('.custom-file input').change(function (e) {
  if (e.target.files.length) {
    $(this).next('.custom-file-label').html(e.target.files[0].name);
  }
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
})

$('.filter button').on("click", function () {
  var value = $(this).attr('data-name');
  $grid.isotope({
    filter: value
  });
})


$('#cfCarousel').owlCarousel({
  loop: true,
  responsiveClass: true,
  items: 1,
  nav: true,
  navText: ["<i class='fa-solid fa-circle-left'></i>", "<i class='fa-solid fa-circle-right'></i>"],
  autoplay: false,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  dots: false,
  margin: 12
});

$('#fpCarousel').owlCarousel({
  loop: true,
  responsiveClass: true,
  items: 1,
  nav: true,
  navText: ["<i class='fa-solid fa-circle-left'></i>", "<i class='fa-solid fa-circle-right'></i>"],
  autoplayHoverPause: false,
  dots: false,
  margin: 12,
  touchDrag: false
});

$('.mouse_scroll').click(function (event) {
  var id = $(this).attr("href");
  var offset = 60;
  var target = $(id).offset().top - offset;
  $('html, body').animate({ scrollTop: target }, 0);
  event.preventDefault();
});

$('.nav-pills .nav-link').click(function (event) {
  var id = $(this).attr("href");
  var offset = 100;
  var target = $(id).offset().top - offset;
  $('html, body').animate({ scrollTop: target }, 0);
  event.preventDefault();
});

var elem = document.querySelector('.grid');
var msnry = new Masonry(elem, {
  // options
  percentPosition: true,
  // columnWidth: '.grid-item',
  itemSelector: '.grid-item',
  // fitWidth: true,
  gutter: 0,
  horizontalOrder: true
});

