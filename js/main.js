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

$(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if ($(window).width() > 575) {

      if (scroll > 100) {
        if ($(window).width() > 1720) {
          $(".contactTop, .followUsTop").hide();
        }
        if ($(window).width() < 1720) {
          $("header").css("padding-top",0);
          $(".gradBg").css("min-height","calc(100vh - 57px)");
          $(".contactFollowTop").hide();
        }
      }
      
      else{
        if ($(window).width() > 1720) {
          $(".contactTop, .followUsTop").show();
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

