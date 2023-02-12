if ($(window).width() > 575) {
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
      if ($(window).width() > 1720) {
      }
      else{
        $(".gradBg").css("min-height","");
      }
    }
    else{
      if ($(window).width() > 1720) {
      }
      else{
        $(".gradBg").css("min-height","");
      }
    }
  })
}

var bannerHeight = document.getElementById("mainBannerWrapper").offsetHeight;
bannerHeight += "px";
$(".gradBg").css("min-height",bannerHeight);