import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function () {
		$(".loader-img").fadeOut();
		$(".loader").delay(1000).fadeOut("slow");	
		$(".testimonial-image img").attr("style", "width: auto !important; height: auto !important;");

		$('a.scroll-link').on('click', function(e) {
			e.preventDefault();
			scroll_to($(this), $('nav').outerHeight());
		});

    $('.top-content').backstretch("assets/img/backgrounds/1.jpg");
    $('.call-to-action-container').backstretch("assets/img/backgrounds/1.jpg");
    $('.testimonials-container').backstretch("assets/img/backgrounds/1.jpg");


		function scroll_to(clicked_link, nav_height) {
			var element_class = clicked_link.attr('href').replace('#', '.');
			var scroll_to = 0;
			if(element_class != '.top-content') {
				element_class += '-container';
				scroll_to = $(element_class).offset().top - nav_height;
			}
			if($(window).scrollTop() != scroll_to) {
				$('html, body').stop().animate({scrollTop: scroll_to}, 1000);
			}
		}




  }	
});
