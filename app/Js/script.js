$(document).ready(function() {
  $('#pull').click(function() {
    $('.main-nav').slideToggle(500);
  });//end slide toggle
  
  $(window).resize(function() {		
		if (  $(window).width() > 7 ) {			
			$('.main-nav').css('display' , 'flex');
		 }
        if (  $(window).width() < 736 ) {			
			$('.main-nav').css('display' , 'none');
		 }
      
	});//end resize
});//end ready