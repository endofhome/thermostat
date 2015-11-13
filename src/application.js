window.onload = function() {
    alert( "welcome" );
};

thermostat = new Thermostat();
$('#temperature').text(thermostat.temp);

$( document ).ready(function() {
	 $( "#temperature-up" ).click( function() {
      thermostat.up();
      console.log(thermostat.temp)
      $('#temperature').text(thermostat.temp);
  });
});