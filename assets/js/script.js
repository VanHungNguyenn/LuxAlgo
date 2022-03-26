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

var gallerySwiper = new Swiper('.gallerySwiper', {
	slidesPerView: 3,
	spaceBetween: 10,
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
		200: {
			slidesPerView: 1,
			spaceBetween: 20,
		},

		479: {
			slidesPerView: 2,
			spaceBetween: 20,
		},

		767: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
	},
})

// show and hide sidebar
let sidebar = document.querySelector('.sidebar')
let buttonSidebar = document.querySelector('.top-panel__button')
let overlay = document.querySelector('.overlay')
var tabletSize = window.matchMedia('(max-width: 1099px)')

function showSidebar() {
	sidebar.classList.add('active')
	overlay.style.display = 'block'
}

// Resize, block sidebar
// min-width: 1099px, auto show sidebar

document.addEventListener('resize', () => {
	if (!tabletSize.matches) {
		sidebar.style.left = '0'
		overlay.style.display = 'block'
	}
})

// click outside of sidebar to hide it in max-width: 1099px
document.addEventListener('click', (e) => {
	if (
		!e.target.closest('.top-panel__button') &&
		!e.target.closest('.sidebar') &&
		sidebar
	) {
		sidebar.classList.remove('active')
		overlay.style.display = 'none'
	}
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

if (topPanelUserInfo) {
	topPanelUserInfo.addEventListener('click', () => {
		userDropdown.classList.toggle('active')
	})
}

// click outside of user__dropdown to hide it
document.addEventListener('click', (e) => {
	if (!e.target.closest('.top-panel__user-right') && userDropdown) {
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

// Tooltip copied
var tooltipTriggerList = [].slice.call(
	document.querySelectorAll('[data-bs-toggle="tooltip"]')
)
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl)
})

const copyToClipboard = (elementId) => {
	const text = document.getElementById(elementId).innerHTML
	navigator.clipboard
		.writeText(text)
		.then(() => {
			console.log(`"${text}" was copied to clipboard.`)
		})
		.catch((err) => {
			console.error(`Error copying text to clipboard: ${err}`)
		})
}

// Table daily
$(document).ready(function () {
	$('#tableDaily').DataTable({
		paging: false,
		lengthChange: false,
		searching: false,
		info: false,
		sortable: false,
		ordering: false,
	})
})

// Table trading
$(document).ready(function () {
	$('#tableTrading').DataTable({})
})

// Table dashboard
$(document).ready(function () {
	$('#tableDashboard').DataTable({})
})

$(document).ready(function () {
	$('#tableBillingHistory').DataTable({
		paging: false,
		lengthChange: false,
		searching: false,
		info: false,
		sortable: false,
		ordering: false,
	})
})
