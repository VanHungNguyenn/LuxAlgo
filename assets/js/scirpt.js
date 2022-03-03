// Sticky navbar
$(window).on('scroll', function () {
	if ($(window).scrollTop()) {
		$('header').addClass('black')
	} else {
		$('header').removeClass('black')
	}
})

// Swiper slider
var swiper = new Swiper('.mySwiper', {
	slidesPerView: 2,
	spaceBetween: 20,
	slidesPerGroup: 2,
	loop: true,
	loopFillGroupWithBlank: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	// navigation: {
	// 	nextEl: '.swiper-button-next',
	// 	prevEl: '.swiper-button-prev',
	// },
})
