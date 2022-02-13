
function getWeather() {
	const cityId = document.querySelector('#city').value;
    console.log(cityId)
	fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
	.then(weather => {
			return weather.json();
		}).then(showWeather);
}
const param = {
	"url" : "https://api.openweathermap.org/data/2.5/",
	"appid" : "afd1d95e2f28c5a326ebf852286f64f2"
}

function showWeather(data) {
	console.log(data);
    document.querySelector('.out_temperature').innerHTML = Math.round(data.main.temp) + "&deg";
	document.querySelector('.out_condition').textContent = data.weather[0]['description'];
	document.querySelector('.out_wind').innerHTML = "wind:" +" "+ data.wind.speed + " " +"m/s"
}
getWeather();
document.querySelector('#city').onchange = getWeather;
const cities =  {
	524901 : "Moskow",
    625144 : "Minsk",
    3099434 : "Gdansk",
    703448 : "Kiev",
	3088171 : "Poznan",
 }