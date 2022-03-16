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
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
		},

		640: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
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

// user__dropdown
const topPanelUserInfo = document.querySelector('.top-panel__user-info')
const userDropdown = document.querySelector('.user__dropdown')
topPanelUserInfo.addEventListener('click', () => {
	userDropdown.classList.toggle('active')
})

// click outside of user__dropdown to hide it
document.addEventListener('click', (e) => {
	if (!e.target.closest('.top-panel__user-right')) {
		userDropdown.classList.remove('active')
	}
})

// Switch tabs
function switchTab(tab) {
	let i
	const tabs = document.querySelectorAll('.subscription__tab-list')

	for (i = 0; i < tabs.length; i++) {
		tabs[i].style.display = 'none'
	}

	const tabsItem = document.querySelectorAll('.subscription__main-tab-item')
	//toggle class active on tabs
	for (i = 0; i < tabsItem.length; i++) {
		tabsItem[i].classList.toggle('active')
	}

	document.getElementById(tab).style.display = 'flex'
}

// depositModal
const modalDepositPaymentItems = document.querySelectorAll(
	'.modal-deposit-payment-item'
)

for (let index = 0; index < modalDepositPaymentItems.length; index++) {
	modalDepositPaymentItems[index].addEventListener('click', function () {
		const modalDepositPaymentItem = document.querySelectorAll(
			'.modal-deposit-payment-item'
		)
		for (let index = 0; index < modalDepositPaymentItem.length; index++) {
			modalDepositPaymentItem[index].classList.remove('active')
		}
		this.classList.add('active')
	})
}

const modalDepositCheckbox = document.querySelector('.modal-deposit-checkbox')
const modalDepositButton = document.querySelector('.modal-deposit-button')
