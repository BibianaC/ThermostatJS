var Thermostat = function() {
  this.temperature = 20;
};

Thermostat.prototype.changeTemperature = function(changeTempBy) {

  this.temperature += changeTempBy;

  if (this.temperature < 10) {
    this.temperature = 10
    return "Cannot decrease below ten"
  }
  else {
    return this.temperature
  }
};

Thermostat.prototype.resetTemperature = function() {
  this.temperature = 20;
};