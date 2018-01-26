$(function() {

    function weatherInfo(name) {
        var url = "http://api.apixu.com/v1/current.json?key=2ba909391d2f4f7e919175332182401&q=" + name;
        var span = $(".weather");
        var p = $(".description");
        console.log(url);

        $.ajax({url: url, type: 'GET', dataType: 'json'}).done(function(r) {
            var name = r.location.name;
            var update = r.current.last_updated;
            var temp = r.current.temp_c;
            var temp2 = r.current.feelslike_c;
            var text = r.current.condition.text;
            var pressure = r.current.pressure_mb;
            var wind = r.current.wind_kph;
            var humidity = r.current.humidity;

            $(".city-name").text(name);
            $(".update").text("Weather now:" + " " + update);
            $(".temp").text(temp + "*C");
            $(".feel-temp").text("Feels like:" + " " + temp2 + "*C");
            $(".text").text(text);
            $(".pressure").text(pressure + " " + "hPa");
            $(".wind").text(wind + " " + "km/h");
            $(".humidity").text(humidity + " " + "%");

            if ($(".text").text() === "Sunny" || $(".text").text() === "Clear") {
                $("img").attr("src", "images/sunny.png");
            } else if ($(".text").text() === "Light rain" || $(".text").text() === "Moderate rain" || $(".text").text() === "Heavy rain") {
                $("img").attr("src", "images/rain.png");
            } else if ($(".text").text() === "Heavy snow" || $(".text").text() === "Light snow showers" || $(".text").text() === "Moderate snow" || $(".text").text() === "Patchy light snow") {
                $("img").attr("src", "images/snow.png");
            } else if ($(".text").text() === "Cloudy" || $(".text").text() === "Overcast") {
                $("img").attr("src", "images/cloudy.png");
            } else if ($(".text").text() === "Partly cloudy") {
                $("img").attr("src", "images/partly-cloudy.png");
            } else if ($(".text").text() === "Mist") {
                $("img").attr("src", "images/mist.png");
            } else if ($(".text").text() === "Patchy rain possible") {
                $("img").attr("src", "images/umbrella.png");
            } else {
                $("img").attr("src", "images/none.png");
            }

        });

    }
    //weatherInfo();

    var button = $("[type=submit]");
    var input = $("#find");

    button.on("click", function(e) {
        $(".info").show();
        weatherInfo(input.val());
        input.val("");
        
    });

});
