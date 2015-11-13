$( document ).ready(function() {

  thermostat = new Thermostat();

  function temperature() {
    $('#temperature').text(thermostat.temp);
  }

  temperature();

 $( "#temperature-up" ).click( function() {
     thermostat.up();
     temperature();
  });
   $( "#temperature-down" ).click( function() {
      thermostat.down();
      temperature()
  });
   $( "#temperature-reset" ).click( function() {
      thermostat.resetButton();
      temperature()
  });
  $( "#powersaving-on" ).click( function() {
    thermostat.powerSavingModeOn();
    temperature()
    $(this).css('background-color', 'green')
    $('#powersaving-off').css('background-color', 'white')
  });
  $( "#powersaving-off" ).click( function() {
    thermostat.powerSavingModeOff();
    temperature()
    $(this).css('background-color', 'red')
    $('#powersaving-on').css('background-color', 'white')
  });
});