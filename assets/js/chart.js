// Trades chart
const trades = document.getElementById('tradesChart').getContext('2d')

// const label = ["01/04/2022", "02/04/2022", "03/04/2022", "04/04/2022", "05/04/2022", "06/04/2022", "07/04/2022"]
// Create an label Array of the Last 30 Days
const labels = []
for (let i = 29; i >= 0; i--) {
	const date = new Date()
	date.setDate(date.getDate() - i)
	const day = date.getDate()
	const month = date.getMonth() + 1
	const year = date.getFullYear()
	labels.push(`${day}/${month}/${year}`)
}

console.log(labels)

const data = {
	labels: labels,
	datasets: [
		{
			label: 'WIN',
			backgroundColor: 'rgb(54, 162, 235)',
			borderColor: 'rgb(54, 162, 235)',
			data: Array.from(
				{ length: 30 },
				() => Math.floor(Math.random() * (100 - 10 + 1)) + 10
			),
		},
		{
			label: 'LOSS',
			backgroundColor: 'rgb(255, 99, 132)',
			borderColor: 'rgb(255, 99, 132)',
			// data random 30 elemens, value random [10, 100]
			data: Array.from(
				{ length: 30 },
				() => Math.floor(Math.random() * (50 - 10 + 1)) + 10
			),
		},
	],
}

const config = {
	type: 'bar',
	data: data,
	options: {
		responsive: true,
		maintainAspectRatio: true,
		aspectRatio: 2,
		plugins: {
			title: {
				display: true,
				text: 'Static trades 30 days ago',
				font: {
					size: 20,
					family: 'IBM Plex Sans',
				},
			},
			legend: {
				display: true,
				position: 'bottom',
			},
		},
	},
}

const tradesChart = new Chart(trades, config)

// Doughnut chart
const doughnut = document.getElementById('doughnutChart').getContext('2d')
const doughnutChart = new Chart(doughnut, {
	type: 'doughnut',
	data: {
		labels: ['WIN', 'LOSS'],
		datasets: [
			{
				label: 'WIN',
				data: [700, 79],
				backgroundColor: ['rgb(54, 162, 235)', 'rgb(255, 99, 132)'],
			},
		],
	},
	options: {
		responsive: true,
		plugins: {
			legend: {
				display: true,
				position: 'right',
			},
			title: {
				display: true,
				text: 'TOTAL TRADES RATE',
				font: {
					size: 16,
					family: 'IBM Plex Sans',
				},
				position: 'bottom',
			},
		},
	},
})

// when screen < 600px, config.options.aspectRatio = 2
if (window.innerWidth < 600) {
	config.options.aspectRatio = 1
	tradesChart.update()
}

window.addEventListener('resize', () => {
	if (window.innerWidth < 600) {
		config.options.aspectRatio = 1
		tradesChart.update()
	} else {
		config.options.aspectRatio = 2
		tradesChart.update()
	}
})
