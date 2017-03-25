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
			$("error").html('this field cannot be empty');
		}
	});
});

function show(response){

	return "<h2 style='font-size:30px; font-weight:bold;' class='text-output'><strong>City</strong>: "+ response.name +"</h2><br>"+
	"<h3><strong>Temprature</strong>: "+ response.main.temp +"</h3><br>"+
	"<h3><strong>Humidity</strong>: "+ response.main.humidity +"</h3><br>"+
	"<h3><strong>Description</strong>: "+ response.weather[0].decription +"</h3><br>";
}