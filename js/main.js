$(document).mousemove(function(e) {
    window.x = e.pageX;
    window.y = e.pageY;

// eyes up and down
    if (window.y >= 250) {
      $(".pupil").addClass("eye-down");
      $(".pupil").removeClass("eye-up");
    }
    else if (window.y < 150) {
      $(".pupil").addClass("eye-up");
      $(".pupil").removeClass("eye-down");
    }

    else{
      $(".pupil").removeClass("eye-up");
      $(".pupil").removeClass("eye-down");
    }

    if(window.x < 560){
      $(".pupil").css('left', '25%');
    }

    else if (680 < window.x) {
      $(".pupil").css('left', '75%');
    }

    else{
      $(".pupil").css('left', '50%');
    }
});

$('.face').hover(function(){
  $(".pupil").toggleClass('dilate');
})

$('.eye').click(function(){
  event.stopPropagation();
  $(this).toggleClass('ouch');
})

$('.circle-bit').click(function(){

//   // $('.cheeks').toggleClass('blush');
  $('.pupil').toggleClass('ohmy');
})
