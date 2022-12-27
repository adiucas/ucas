$(function () {
  var includes = $('[data-include]')
  $.each(includes, function () {
    var file = 'includes/' + $(this).data('include') + '.html'
    $(this).load(file)
  })
})

$('.first-option').hide();


$('.custom-file input').change(function (e) {
    if (e.target.files.length) {
        $(this).next('.custom-file-label').html(e.target.files[0].name);
    }
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

var $grid = $('.grid').isotope({
  // options
  itemSelector: '.grid-item',
  layoutMode: 'fitRows',
  filter: '.ubroker'
});

$('.filter button').on("click", function(){
  var value = $(this).attr('data-name');
  $grid.isotope({
    filter:value
  });
})

$('.owl-carousel').owlCarousel({
    loop:true,
    responsiveClass:true,
    items: 1,
    nav:true,
    navText: ["<i class='fa-solid fa-circle-left'></i>","<i class='fa-solid fa-circle-right'></i>"],
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause:false,
    dots: false,
    margin:12
})

$(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if ($(window).width() > 575) {
      if (scroll > 100) {
        if ($(window).width() > 1720) {
          $(".contactTop, .followUsTop").addClass("scrolled");
          $(".navbar").addClass("container-fluid").removeClass("container");
        }
        if ($(window).width() < 1720) {
          $("header").css("padding-top",0);
          $(".gradBg").css("min-height","calc(100vh - 57px)");
          $(".contactFollowTop").hide();
        }
      }
      else{
        if ($(window).width() > 1720) {
          $(".contactTop, .followUsTop").removeClass("scrolled");
          $(".navbar").removeClass("container-fluid").addClass("container");
        }
        if ($(window).width() < 1720) {
          $("header").css("padding-top",40);
          $(".gradBg").css("min-height","100vh");
          $(".contactFollowTop").show();

          
        }
      }
    }
  })
})

