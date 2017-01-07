$(document).ready(function () {
        $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=London&APPID=b4ff7bb103cde6a536bccae16f8a995f", function (json) {
            $(".message").html(JSON.stringify(json));        
    });
});