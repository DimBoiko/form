const form = document.querySelector('.tickets')
const inputs = document.querySelectorAll('.form__input')
const passengersBlock = document.querySelector('.passengers')
const passengersChangeBlock = document.querySelector('.form__item-passengers')
const passengersValues = document.querySelectorAll('.form__item-passengers-value')
const passengersValueInput = document.querySelector('.form__item-passengers-value.input')
const dateInput = document.querySelector('#date')
const routeBlock = document.querySelector('.routes')
const routeItems = document.querySelector('.routes__items')
const ticketsBlock = document.querySelector('.founded-tickets')
const ticketsTitle = document.querySelector('.founded-tickets__title')
const ticketsColum = document.querySelector('.founded-tickets__colum')
const calendarSVG = document.querySelector('.calendar-svg')

const myData = {
	rows:[
{title: 'KYIV-ODESSA', f1: '19:10-01:45;11:00-17:00', f2: 290, f3: 'Bus station "Central", Demeevskaya square: The House 3a', f4: `Bus station "Privokzalnaya', Starosennaya\r\nstreet; house 1B`,f5:0,},
{title: 'KYIV-ODESSA', f1: '19:10-01:45;11:00-17:00', f2: 290, f3: 'Bus station "Central", Demeevskaya square: The House 3a', f4: `Bus station "Privokzalnaya', Starosennaya\r\nstreet; house 1B`,f5:0,},
{title: 'KYIV-KHARKIV', f1: '23:35 - 07:50;10:05 - 18:00', f2: 300, f3: 'Bus station "Central", Demeevskaya square: The House 3a', f4: 'Bus station "Kharkov-1", Yuri Gagarin\r\nAvenue: house 22',f5:0,},
{title: 'KYIV-LVIV', f1: '19:10-01:45;11:00-17:00', f2: 400, f3: 'Bus station "Central", Demeevskaya square: The House 3a', f4: 'Railway station "Central", Palace Square:\r\nHouse number 1',f5:0,},
{title: 'KYIV-DNEPR', f1: '19:10-01:45;11:00-17:00', f2: 320, f3: 'Bus station "Central", Demeevskaya square: The House 3a', f4: 'Bus station "Central", Kurchatov street:\r\nHouse 10',f5:0,},
{title: 'KYIV-UZHGOROD', f1: '08:00 - 20:00;20:15 - 08:40', f2: 900, f3: 'Bus station "Central", Demeevskaya square: The House 3a', f4: 'Bus station "Central",Staintsionnaya\r\nstreet: House 2',f5:0,},
{title: 'KYIV-CHERNIGOV', f1: '07:00 - 08:55;22:00 - 23:55', f2: 95, f3: 'Bus station "Central", Demeevskaya square: The House 3a', f4: 'Stop "Shopping center Megacenter",\nProspect Mira: house 49',f5:0,},
{title: "KYIV-ZAPOROZH'E", f1: '22:35 - 08:50;23:00 - 09:15', f2: 390, f3: 'Bus station "Central", Demeevskaya square: The House 3a', f4: '"Zaporizhzhia, AS "aporizhzhia",Soborny ave., 20',f5:0,},
{title: 'KYIV-IVANO-FRANKOVSK', f1: '08:00 - 19:35;21:30 - 08:25', f2: 495, f3: 'Bus station "Central", Demeevskaya square: The House 3a', f4: 'Bus station "Ivano-Frankivsk-2",Gorbachevsky street: house 14A',f5:0,},
{title: 'KYIV-WARSAW', f1: '14:00 - 05:10;23:00 - 18:30', f2: 1800, f3: 'Bus station "Central", Demeevskaya square: The House 3a', f4: 'Bus station "Vskhodni", Lyubelska street:\r\nhouse 22',f5:3,},
{title: 'KYIV-LODZ', f1: '13:10 - 09:10;23:00 - 21:00', f2: 1700, f3: 'Bus station "Central", Demeevskaya square: The House 3a', f4: 'Bus station "Lodz Fabrychnaya",\r\nBronislaw Salacinski square: House\r\nnumber 1',f5:0,},
{title: 'KYIV-KRAKOW', f1: '07:50 - 23:00; 23:00 - 16:10', f2: 1500, f3: 'Bus station "Central", Demeevskaya square: The House 3a', f4: 'Bus station "Chizhiny", Medvetskogo\r\nstreet; House 15',f5:0,},
{title: 'KYIV-WROCLAW', f1: '01:00 - 20:30;08:00 - 03:45', f2: 1700, f3: 'Bus station "Central", Demeevskaya square: The House 3a', f4: 'Bus station Wroclaw. Sucha street; House\r\nnumber 1',f5:2,},
{title: 'KYIV-LUBLIN', f1: '01:00 - 15:00;20:00 - 07:15', f2: 1300, f3: 'Bus station "Central", Demeevskaya square: The House 3a', f4: 'Lublin Bus Station, Millennium Alley:\r\nHouse 6',f5:1,},
{title: 'KYIV-KATOWICE', f1: '01:00 - 17:30;10:00 - 01:20', f2: 1600, f3: 'Bus station "Central", Demeevskaya square: The House 3a', f4: 'International Bus Station Katowice,\r\nSandowa Street: House 5',f5:0,},
{title: 'DONETSK-WARSAW', f1: '07:20 - 07:00;21:45 - 22:15', f2: 3700, f3: 'Bus station "Uzhniy"', f4: 'Bus station "Central", Kurchatov street; House 10,\r\nSandowa Street: House 5',f5:1,},
]}

let ms = 
[ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 
'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
let msDays = 
[ {'Jan':31}, {'Feb':28}, {'Mar':31},{'Apr':30}, {'May':31}, {'Jun':30}, {'Jul':31}, 
{'Aug':31}, {'Sep':31}, {'Oct':31}, {'Nov':30}, {'Dec':31} ];


let timeoutID = null
const citiesAll = []
const formInput = inputs[0]
const whereInput = inputs[1]
const ticketData = {
	from:'',
	where:'',
	date:'',
	passengers:1,
}

const getCities = () => {
	for (let i = 0; i < myData.rows.length; i++) {
	
		if(!citiesAll.includes(myData.rows[i].title)){
			citiesAll.push(myData.rows[i].title)
		}

	}
	let [_,m,d,y] = String(new Date()).split(' ')
	m = ms.indexOf(m) + 1

	if(m < 10){
		m = '0' + m
	}
	if(d < 10){
		d = '0' + d
	}

	const fulldate = '%y%-%m%-%d%'.replace('%y%',y).replace('%m%',m).replace('%d%',d)

	dateInput.setAttribute('min',fulldate)
}

window.onload = () =>{
	inputs.forEach((el)=>{
		ticketData[el.id] = el.value
	})
	setTimeout(()=>getCities(),1500)
}

// Functions

const getTimeTrip = (dispatchTime,arriveTime) =>{
	let tripTime = []
	let [dispatchHours,dispatchMinutes] = dispatchTime.split(':')
	let [arriveHours,arriveMinutes] = arriveTime.split(':')

	if( dispatchHours.trim().charAt(0) !== '0' && arriveHours.trim().charAt(0) !== '0'){
		if(Number(dispatchHours) > Number(arriveHours)){
			dispatchHours = 24 - dispatchHours
			tripTime.push(Number(arriveHours) + Number(dispatchHours))
			tripTime.push(Number(dispatchMinutes) + Number(arriveMinutes))
			tripTime.push(1)
		}else{
			tripTime.push(Number(arriveHours) - Number(dispatchHours))
			tripTime.push(Number(dispatchMinutes) + Number(arriveMinutes))
		}
		if(tripTime[1] > 59){
			tripTime[0] = tripTime[0]++
			tripTime[1] = tripTime[1] - 60
		}
		return tripTime
	}
	if(dispatchHours.trim().charAt(0) !== '0' && arriveHours.trim().charAt(0) === '0'){
		dispatchHours = 24 - dispatchHours
		tripTime.push(Number(dispatchHours) + Number(arriveHours))
		tripTime.push(Math.abs(Number(arriveMinutes) - Number(dispatchMinutes)))
		tripTime.push(1)
		if(tripTime[1] > 59){
			tripTime[0] = tripTime[0]++
			tripTime[1] =  tripTime[1] -  60 
		}
		return tripTime
	}
	if( dispatchHours.trim().charAt(0) === '0'  && arriveHours.trim().charAt(0) !== '0'){
		tripTime.push(Number(dispatchMinutes) > 0 
		? Math.abs(Number(dispatchMinutes) - Number(arriveMinutes)) 
		: Number(dispatchMinutes) + Number(arriveMinutes))
		tripTime.unshift(Math.abs(Number(dispatchHours) - Number(arriveHours)))
	
		if(tripTime[1] > 59){
			tripTime[0] = tripTime[0]++
			tripTime[1] = tripTime[1] - 60
		}
		return tripTime
	}
	if( dispatchHours.trim().charAt(0) === '0'  && arriveHours.trim().charAt(0) === '0'){
		if(Number(dispatchHours) > Number(arriveHours)){
			tripTime.push(Math.abs(Number(arriveHours) - Number(dispatchHours)))
			tripTime.push(Number(arriveMinutes) + Number(dispatchMinutes))
			if(tripTime[1] > 59){
				tripTime[0] = tripTime[0]++
				tripTime[1] = tripTime[1] - 60
			}
			tripTime.push(1)
			return tripTime
		}
		tripTime.push(Math.abs(Number(arriveHours) - Number(dispatchHours)))
		tripTime.push(Number(dispatchMinutes) + Number(arriveMinutes))
		if(tripTime[1] > 59){
			tripTime[0] = tripTime[0]++
			tripTime[1] = tripTime[1] - 60
		}
		return tripTime
	}
	
	return []

}

const filterTickets = (routesAll,ticketData) => {
	const selectedRoute = ticketData.from.toUpperCase() + '-' + ticketData.where.toUpperCase()
	const filteredRoutes = routesAll.filter((route) => Object.values(route).includes(selectedRoute))
	const tickets = []
	ticketsColum.innerHTML = ''
	const titleHTML = 'Bus timetable for %route% on %date%'
	.replace('%route%',ticketData.from.toUpperCase() + '-' + ticketData.where.toUpperCase())
	.replace('%date%',ticketData.date.split('-').reverse().join('.'))

	filteredRoutes.forEach((route)=>{
		const dispatchCity = route.title.split('-')[0]
		const arriveCity = route.title.split('-')[1]
		for (let i = 0; i < route.f1.split(';').length; i++) {
			const [dispatchTime,arriveTime] = route.f1.split(';')[i].split('-')
			const dispatchDate = ticketData.date.split('-').reverse()[0]
			+ 
			'.' 
			+ ticketData.date.split('-').reverse()[1]
			
			let arriveDate = dispatchDate
			let [hours,minutes,daysValue] = getTimeTrip(dispatchTime,arriveTime)
			if(!minutes){
				minutes = ''
			}else{
				minutes += 'm' 
			}
			if(route.f5 > 0){hours = route.f5 * 24 + hours;daysValue = 1 * route.f5}
			if(daysValue > 0){
				let day = Number(ticketData.date.split('-').reverse()[0])
				let month = ticketData.date.split('-').reverse()[1] 
				arriveDate = (day + daysValue) + '.' + month;
				(day + daysValue) < 10 ? arriveDate = ('0' + (day + daysValue)) +'.'+ month : arriveDate;
				const currMonth = Number(new Date().getMonth()) 
				const monthDays = msDays[currMonth];

				month = (Number(month) + 1) < 10 ? '.0' + (Number(month) + 1) : '.' + (Number(month) + 1)
				if((day + daysValue) > Object.values(monthDays)[0]){
					arriveDate = '01' + month
				}else{
					
				}
				
			}

			let ticketHTML = '<div class="founded-tickets__item"><div class="founded-tickets__from"><div class="founded-tickets__time"><div class="founded-tickets__time-info"><span class="founded-tickets__current-time">%dispatchTime}</span><span class="founded-tickets__current-date">%dispatchDate}</span></div><div class="founded-tickets__time-travel"><span class="time-travel-hours">%hours}h</span> <span class="time-travel-min">%minutes}</span> <span class="time-travel-road-info">on the road</span> </div></div><div class="founded-tickets__city">%dispatchCity}</div><div class="founded-tickets__address">%route.f3}</div></div><div class="founded-tickets__where"><div class="founded-tickets__time"><div class="founded-tickets__time-info"><span class="founded-tickets__current-time">%arriveTime}</span><span class="founded-tickets__current-date">%arriveDate}</span></div></div><div class="founded-tickets__city">%arriveCity}</div><div class="founded-tickets__address">%route.f4}</div></div><hr class="ticket__line"><div class="founded-tickets__buy"><div class="founded-tickets__price"><span class="ticket-price">%route.f2}</span> UAH</div><div class="founded-tickets__buy-btn"><button class="buy-ticket-btn">Buy</button></div></div></div>'
			.replace('%dispatchTime}',dispatchTime)
			.replace('%dispatchDate}',dispatchDate)
			.replace('%hours}',hours)
			.replace('%minutes}',minutes)
			.replace('%dispatchCity}',dispatchCity)
			.replace('%route.f3}',route.f3)
			.replace('%arriveTime}',arriveTime)
			.replace('%arriveDate}',arriveDate)
			.replace('%arriveCity}',arriveCity)
			.replace('%route.f4}',route.f4)
			.replace('%route.f2}',route.f2)

			tickets.push(ticketHTML)

		}
	})
	if(tickets.length){
		tickets.forEach((ticket)=>{
			ticketsColum.innerHTML += ticket
		})
		ticketsTitle.textContent = titleHTML
		ticketsBlock.style.visibility = 'visible'
	}else{
		ticketsBlock.style.visibility = 'visible'
		ticketsTitle.textContent = 'No tickets available'
	}
	

}

const changePassengers = (e) => {
	e.target.value === '+' && ticketData.passengers++
	if(ticketData.passengers < 2){
		e.target.style.cursor = 'not-allowed'	
		setTimeout(()=>{
		e.target.style.cursor = 'pointer'	
		},2000)
		return
	}
	e.target.value === '-' && ticketData.passengers--

	passengersValues.forEach((el)=>{
		el.value = ticketData.passengers
		el.textContent = ticketData.passengers
	})
}

const showPassengers = () => {
	passengersChangeBlock.classList.toggle('show-passengers')
	if(passengersChangeBlock.classList.contains('show-passengers')){
		passengersChangeBlock.onclick = (e) => changePassengers(e)
	}
}

const findTickets = (e) => {
	e.preventDefault()
	
	ticketData.from = inputs[0].value 
	ticketData.where = inputs[1].value
	ticketData.date = inputs[2].value

	for (let i = 0; i < Object.values(inputs).length; i++) {
		if(!inputs[i].value){
			if(inputs[i].id === 'date'){
				dateInput.classList.add('date-animation')
				calendarSVG.style.color = 'red'
				setTimeout(()=>{
					dateInput.classList.remove('date-animation')
					calendarSVG.style.color = 'black'
				},1000)
				continue 
			}

			inputs[i].classList.add('date-animation')
			setTimeout(()=>{
				inputs[i].classList.remove('date-animation')
			},1000)
		}
	}
	const status = Object.values(ticketData).every((value)=> value !== '')
	if(status){
		window.status = JSON.stringify(ticketData)
		const routesAll = myData.rows
		filterTickets(routesAll,ticketData)
	}
}

const fromInputHandler = (e) => { 
	if(timeoutID){
		clearTimeout(timeoutID)
	}

	ticketData.from = e.target.value
	const routes = citiesAll.map((route,index)=>{
		const firstCity = route.split('-')[0].toLowerCase().trim()
		const secondCity = route.split('-')[1]
		if(firstCity.includes(e.target.value.toLowerCase().trim())){
			let routeHTML =  '<div tabindex=%TABINDEX% class="routes__item" onclick=""><span class="first__city selected-city">%FIRSTCITY%,</span><span class="second__city">%SECONDCITY%</span></div>'
			return routeHTML.replace('%TABINDEX%',index + 1).replace('%FIRSTCITY%',route.split('-')[0]).replace('%SECONDCITY%',secondCity)
		}

	}).filter((route) => route)
	routeBlock.style.opacity = 1
	routeBlock.style.visibility = 'visible'
	routeBlock.style.transform = 'translateY(0px)' 
	routeBlock.style.left = '0%'
	routeBlock.style.zIndex = 1; 
	routeItems.innerHTML = ''

	if(window.innerWidth < 991 && window.innerWidth > 861){
		routeBlock.style.top = '46%'
	}

	if(window.innerWidth < 861 && window.innerWidth > 556){
		routeBlock.style.top = '33%'
	}
	if(window.innerWidth < 556 && window.innerWidth > 426){
		routeBlock.style.top = '25%'
	}

	if(window.innerWidth < 426 && window.innerWidth > 390){
		routeBlock.style.top = '26%'
	}
	if(window.innerWidth < 391){
		routeBlock.style.top = '22%'
	}

	for (let index = 0; index < 6; index++) {
		if(routes[index]){
			routeItems.innerHTML += routes[index]
		}
	}
	
	timeoutID = setTimeout(()=>{
		routeBlock.style.opacity = 0
		routeBlock.style.zIndex = -1; 
		routeBlock.style.visibility = 'hidden'
		routeBlock.style.transform = 'translateY(0px)' 
	},10000)
}

const whereInputHandler = (e) => {
	if(timeoutID){
		clearTimeout(timeoutID)
	}
	routeBlock.style.left = '27%'
	ticketData.where = e.target.value

	const routes = citiesAll.map((route,index)=>{
		const firstCity = route.split('-')[0]
		const secondCity = route.split('-')[1].toLowerCase().trim()

		if(secondCity.includes(e.target.value.toLowerCase().trim())){
			let routeHTML =  '<div tabindex=%TABINDEX% class="routes__item" onclick=""><span class="first__city">%FIRSTCITY%,</span><span class="second__city selected-city">%SECONDCITY%</span></div>'
			return routeHTML.replace('%TABINDEX%',index + 1).replace('%FIRSTCITY%',firstCity).replace('%SECONDCITY%',route.split('-')[1])
		}
	}).filter((route) => route)

	routeBlock.style.opacity = 1
	routeBlock.style.zIndex = 1; 
	routeBlock.style.visibility = 'visible'
	routeBlock.style.transform = 'translateY(0px)' 
	routeItems.innerHTML = ''
	if(window.innerWidth < 991 && window.innerWidth > 861){
		routeBlock.style.top = '46%'
	}

	if(window.innerWidth < 861 && window.innerWidth > 556){
		routeBlock.style.top = '33%'
	}
	if(window.innerWidth < 556 && window.innerWidth > 426){
		routeBlock.style.top = '48%'
	}

	if(window.innerWidth < 426 && window.innerWidth > 390){
		routeBlock.style.top = '47%'
	}
	
	if(window.innerWidth < 391){
		routeBlock.style.top = '41%'
	}

	for (let index = 0; index < 6; index++) {
		if(routes[index]){
			routeItems.innerHTML += routes[index]
		}
	}
	
	timeoutID = setTimeout(()=>{
		routeBlock.style.opacity = 0
		routeBlock.style.zIndex = -1; 
		routeBlock.style.visibility = 'hidden'
		routeBlock.style.transform = 'translateY(0px)' 
		if(window.innerWidth < 426){
			routeBlock.style.top = '0%'
		}
	},10000)
}

const routesHandler = (e) => {
	e.stopPropagation()
	const selectedRoute = e.path.filter((item)=> item && item.className === 'routes__item')[0]

	ticketData.from = 
	selectedRoute.childNodes[0].textContent.split('')[0] 
	+
	selectedRoute.childNodes[0].textContent.toLowerCase().slice(1,selectedRoute.childNodes[0].textContent.length - 1)


	ticketData.where = 
	selectedRoute.childNodes[1].textContent.split('')[0] 
	+
	selectedRoute.childNodes[1].textContent.toLowerCase().slice(1,selectedRoute.childNodes[1].textContent.length)

	formInput.value = ticketData.from 
	whereInput.value = ticketData.where 

	routeBlock.style.opacity = 0
		routeBlock.style.zIndex = -1; 
		routeBlock.style.visibility = 'hidden'
		routeBlock.style.transform = 'translateY(0px)' 
		if(window.innerWidth < 426){
			routeBlock.style.top = '0%'
		}
}

// Listeners
let eventName = 'click'


passengersValueInput.addEventListener("input",(e)=>{
	if(e.target.value > 0 && e.target.value < 100){
		ticketData.passengers = e.target.value
		passengersValues.forEach((el)=>{
			el.textContent = ticketData.passengers
		})
		passengersValueInput.style.boxShadow = '0px 0px 0px 0px red'

	}else{
		passengersValueInput.style.boxShadow = '0px 0px 1px 1px red'
	}
})

document.addEventListener('click',(e)=>{
	console.log(e.target)
	if(!e.path.includes(routeBlock)){
		routeBlock.style.opacity = 0
		routeBlock.style.zIndex = -1; 
		routeBlock.style.transform = 'translateY(0px)' 
	}
	if(!e.path.includes(passengersBlock)){
		passengersChangeBlock.classList.remove('show-passengers')
	}
})  
form.onclick = (e)=>{
	if(
		passengersChangeBlock.classList.contains('show-passengers')
		&& 
		!e.path.includes(passengersChangeBlock)
	)
	{
		if(e.target.classList.contains('form__btn-sub')){
			findTickets(e)
		}
		passengersChangeBlock.classList.remove('show-passengers')
		return
	}

	if(e.path.includes(passengersBlock)){
		for (let i = 0; i < e.path.length - 4; i++) {
			if(e.path[i].classList.contains('passengers')){
				e.path.includes(passengersChangeBlock)
				? ''
				: showPassengers()
			}
		}
	}
	
	if(e.target.classList.contains('arrows-svg') || e.target.tagName === 'path' ){
		let tmp = ticketData.from
		ticketData.from = ticketData.where
		ticketData.where = tmp
		inputs[0].value = ticketData.from
		inputs[1].value = ticketData.where
	}
	
	if(e.target.classList.contains('form__btn-sub')){
		findTickets(e)
	}

}

formInput.addEventListener('input',(e)=>fromInputHandler(e))

whereInput.addEventListener('input',(e)=>whereInputHandler(e))

routeItems.onclick = (e)=>routesHandler(e)