$(document).ready(function() {

  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var latitude = position.coords.latitude.toFixed(2);
      var longitude = position.coords.longitude.toFixed(2);
      $.getJSON('https://api.wunderground.com/api/da1573c24aa07ecb/conditions/q/' + latitude + ',' + longitude + '.json', function(json) {
        var jsonstr = JSON.stringify(json);
        console.log(json)
        var temperature_c = json.current_observation.dewpoint_c;
        var temperature_f = json.current_observation.dewpoint_f;
        var location = json.current_observation.display_location.city;
        var wind = json.current_observation.wind_dir;


        $('.location').html('<h2>' + location + '</h2>')
        $('.temperature').html('<h2 class="c" id="temperature">' + temperature_c + '°C</h2>');
        $('.wind').html('<h2>' + wind + '</h2>');
        $('#cf').on('click', function() {
          if($('#temperature').hasClass('c')) {
            $('.temperature').html('<h2>' + temperature_f + ' F</h2>');
            $('#cf').html('<p>Switch to C</p>')
          } else {
            $('.temperature').html('<h2 class="c" id="temperature">' + temperature_c + '°C</h2>');
            $('#cf').html('<p>Switch to F</p>')
          }
        })

      });
    });
  }
});

var weatherParameters = [Weather.name, Weather.country, Weather.temp]

for (var i = 0; i < weatherParameters; i++) {
  
}
