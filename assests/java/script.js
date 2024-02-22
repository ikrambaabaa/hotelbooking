$( function() {
    $( "#inputcheckin" ).datepicker();
    $( "#inputcheckout" ).datepicker();
  } );
  $(document).ready(function() {
    $('.level-slid').slick({
      dots: true,
      slidesToShow: 2,
      slidesToScroll: 2,
    });
  
    function videoplayer() {
      var video = $('.level-video').get(0);
      if (video.paused) {
        video.play();
        $('.video-control-play').hide();
        $('.video-control-pause').show();
      } else {
        video.pause();
        $('.video-control-play').show();
        $('.video-control-pause').hide();


      }
    }
  
    $('.video-control-play').click(function() {
      videoplayer();
    });
  
  $('.video-control-pause').click(function() {
    videoplayer();
  });
});
