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
	slidesPerGroup: 1,
	loop: true,
	loopFillGroupWithBlank: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	autoplay: {
		delay: 3000,
	},
})

// accordion
const ask = document.querySelectorAll('.question__accordion-title')

let i
for (i = 0; i < ask.length; i++) {
	ask[i].addEventListener('click', function () {
		var anwser = this.nextElementSibling

		if (anwser.style.display === 'block') {
			anwser.style.opacity = '0'
			anwser.style.display = 'none'
		} else {
			anwser.style.opacity = '1'
			anwser.style.display = 'block'
		}
	})
}

// header menu
const menu = document.querySelector('.header__menu')

function showMenu() {
	menu.style.top = '0'
}

function hideMenu() {
	menu.style.top = '-100vh'
}
