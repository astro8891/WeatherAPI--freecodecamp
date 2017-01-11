$(document).ready(function () {
    $.getJSON("http://ip-api.com/json", function (json) {
        $(".message").html(JSON.stringify(json));
        $(".countryHeading").html(JSON.stringify(json.country))
    });    
});

  