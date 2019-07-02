$( document ).ready( function () {
	
	$('.menu-btn').on('click', function (e) {
		e.preventDefault();
		$(this).toggleClass('active-btn');
		$('.menu').toggleClass('active');
	});

	$('.bg-menu').on('click', function() {
		$('.menu-btn').toggleClass('active-btn');
		$('.menu').toggleClass('active');
	});
	
	$('.arrow-left').on('click', function (e) {
		e.preventDefault();
		$('#header-carousel').trigger('prev.owl.carousel');
	});

	$('.arrow-right').on('click', function (e) {
		e.preventDefault();
		$('#header-carousel').trigger('next.owl.carousel');
	});

	$('#header-carousel').owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		autoplayTimeout: 6000,
		autoplayHoverPause: false,
		autoplaySpeed: 1000,
		smartSpeed: 1000
	});

	$('#simple-carousel').owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		autoplaySpeed: 1000,
		mouseDrag: false,
		onDragged: callback
	});

	function callback(e) {

		$('#simple-carousel').on('changed.owl.carousel', function (e) {
			let curItem = 0;
			curItem = e.item.index;

			if ( curItem == 0) {
				$('.sm-one').addClass('active-trg');
				$('.sm-two').removeClass('active-trg');
				$('.sm-thre').removeClass('active-trg');
			}
			if ( curItem == 1) {
				$('.sm-two').addClass('active-trg');
				$('.sm-one').removeClass('active-trg');
				$('.sm-thre').removeClass('active-trg');
			}
			if ( curItem == 2) {
				$('.sm-three').addClass('active-trg');
				$('.sm-two').removeClass('active-trg');
				$('.sm-one').removeClass('active-trg');
			}
		});
	}


	$('.sm-one').on('click', function (e) {
		e.preventDefault();
		$('#simple-carousel').trigger("to.owl.carousel", [0, 500]);
	});

	$('.sm-two').on('click', function (e) {
		e.preventDefault();
		$('#simple-carousel').trigger('to.owl.carousel', [1, 500]);		
	});

	$('.sm-three').on('click', function (e) {
		e.preventDefault();
		$('#simple-carousel').trigger('to.owl.carousel', [2, 500]);
	});

});