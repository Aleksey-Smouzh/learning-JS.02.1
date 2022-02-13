
function getWeather() {
	const cityId = document.querySelector('#city').value;
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
}
getWeather();
document.querySelector('#city').onchange = getWeather;
const cities =  {
    23232 : "London",
    33456 : "Minsk",
    87968 : "Gdansk",
    39849 : "Kyiv",
 }