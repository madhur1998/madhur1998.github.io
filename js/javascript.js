$(document).ready(function() {

	$('.submit').click(function(){
		var city = $(".input").val();

		if(city != ''){

			$.ajax({

				url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&APPID=7d894a6ce230f3d14f73cf11fa180374',
				type: "GET",
				datatype: "jsonp",
				success: function(response){
					var widget = show(response);

					$(".wrapper").html(widget);

					$(".input").val(' ');
				}

			});

		}else{
			window.alert("Name of city cannot be emty.");
		}
	});
});

function show(response){

	return "<h2 style='font-size:30px; font-weight:bold;' class='text-output'><strong>City</strong>: <a target='_blank' class='link-text' href='https://en.wikipedia.org/wiki/" + response.name + "'>" + response.name +"</a></h2><br>"+
	"<h3><strong>Temprature</strong>: <img src='http://openweathermap.org/img/w/" + response.weather[0].icon + ".png'>&nbsp" + response.main.temp +"&deg;C</h3><br>"+
	"<h3><strong>Description</strong>: "+ response.weather[0].description + "</h3><br>" +
	"<h3><strong>Humidity</strong>: "+ response.main.humidity +"%</h3><br>"+
	"<h3><strong>Wind Speed</strong>: "+ response.wind.speed +"m/s</h3><br>";
}

