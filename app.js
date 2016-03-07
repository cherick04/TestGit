var main = function() {
  /* Push the body and the nav over by 285px over */
  $('.icon-Owner').click(function() {
    $('.Owner').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "285px"
    }, 200);
  });

  /* Then push them back */
  $('.icon-close').click(function() {
    $('.Owner').animate({
      left: "-285px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
  });
  
  ////////////
  $('.icon-Guest').click(function() {
	    $('.Guest').animate({
	      left: "0px"
	    }, 200);

	    $('body').animate({
	      left: "285px"
	    }, 200);
	  });

	  /* Then push them back */
	  $('.icon-close').click(function() {
	    $('.Guest').animate({
	      left: "-285px"
	    }, 200);

	    $('body').animate({
	      left: "0px"
	    }, 200);
	  });
	  
};


$(document).ready(main);