var thermostat = new Thermostat();

var updateTemperature = function() {
  $('#temperature').text(thermostat.temperature);
  $('h1').each(function(){
  if (thermostat.energy === "low"){
    $('h1').css('color', 'green')
  }
  else if (thermostat.energy === "medium"){
    $('h1').css('color', 'yellow')
  }
  else {
    $('h1').css('color', 'red')
  }
});
};

$(document).ready(function() {
  updateTemperature();

  $('.increase-temp').on('click',function() {
    thermostat.changeTemperature(1);
    updateTemperature();
  });

  $('.decrease-temp').on('click', function() {
    thermostat.changeTemperature(-1);
    updateTemperature();
  });

  $('.reset').on('click', function() {
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('.PSM-off').on('click', function() {
    thermostat.powerSavingSwitch('Off');
    updateTemperature();
  });

  $('.PSM-on').on('click', function() {
    thermostat.powerSavingSwitch('On');
    updateTemperature();
  });

});