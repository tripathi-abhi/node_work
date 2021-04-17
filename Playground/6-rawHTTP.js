const http = require("http");
const url = `http://api.openweathermap.org/data/2.5/onecall?lat=10&lon=20&appid=a1af5e122581fbde76be2179d9187c87&exclude=hourly`;

const request = http.request(url, (response) => {
	let data = "";
	response.on("data", (chunck) => {
		data += chunck.toString();
	});

	response.on("end", () => {
		data = JSON.parse(data);
		console.log(data);
	});
});

request.end();
