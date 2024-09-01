jQuery(document).ready(function() {
	jQuery('.uk-slideshow li').bind('animationstart', function() {
				
		jQuery('#homepanel-commands li .barra').css({
			'width':'0px',
			'opacity': '0'
		});
		
		setTimeout(function() {
			jQuery('#homepanel-commands li.uk-active .barra').css('opacity','1');
			jQuery('#homepanel-commands li.uk-active .barra').animate({
				width: "100%"
			}, 4500, 'linear');
		}, 500);
		
	});
	jQuery('.uk-slideshow li').trigger('animationstart');		
});