$(document).ready(function () {
    function getUserLocation() {
        $.getJSON('http://ip-api.com/json', function (locData) {
            console.writeline("hello" + locData)
            $('.city').html(locData.city + ", " + locData.region + ", " + locData.country);
        }
        )
    }










    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=London&APPID=b4ff7bb103cde6a536bccae16f8a995f", function (json) {
        $(".message").html(JSON.stringify(json));
    });

    var x = {}
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }
    // function showPosition(position) {
    //     x.innerHTML = "Latitude: " + position.coords.latitude +
    //         "<br>Longitude: " + position.coords.longitude;
    // }
});