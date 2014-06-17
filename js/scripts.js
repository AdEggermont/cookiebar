$(document).ready(function() {

	/* Cookiebar */

	var $cookiebar = $('.cookiebar');

	if(!$.cookie('cookieAccepted')) {
		$cookiebar.addClass('open');
	}

	$cookiebar.find('.close, .button a').on('click', function(e){
		e.preventDefault();

		$cookiebar.removeClass('open');
		$.cookie('cookieAccepted', true);
	});

});
