var Thermostat = function() {
  this.temperature = 20;
};

Thermostat.prototype.changeTemperature = function(changeTempBy) {

  this.temperature += changeTempBy;

  if (this.powerSaving = true && this.temperature > 25){
    this.temperature = 25
    return "Cannot increase above 25"
  }

  else if (this.temperature < 10) {
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

Thermostat.prototype.powerSaving = function(mode){
  if (mode === "On"){
    return true
  }
  else if (mode === "Off"){
    return false
  }
  else {
    return "Please specify On or Off"
  }
};