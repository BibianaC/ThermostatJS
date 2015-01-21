describe("Thermostat", function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("by default", function() {

    it("starts at 20 degrees", function() {
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe("changing temperature", function() {

    it("can increase", function() {
      thermostat.changeTemperature(1);
      expect(thermostat.temperature).toEqual(21);
    });

    it("can decrease", function() {
      thermostat.changeTemperature(-1);
      expect(thermostat.temperature).toEqual(19);
    });

    it("has a min temperature of 10", function() {
      expect(thermostat.changeTemperature(-11)).toBe("Cannot decrease below ten");
      expect(thermostat.temperature).toEqual(10);
    });

    it("can be reset to 20 by hitting the reset button", function() {
      thermostat.changeTemperature(-1);
      thermostat.resetTemperature();
      expect(thermostat.temperature).toEqual(20);
    });

  });

  describe("when power saving", function() {
    
    it("should be on by default", function() {
      expect(thermostat.powerSavingMode).toBe(true);
    });

    it("should be able to be switched on", function(){
      thermostat.powerSavingSwitch("On");
      expect(thermostat.powerSavingMode).toBe(true);
    });

    it("should be able to be switched Off", function(){
      thermostat.powerSavingSwitch("Off");
      expect(thermostat.powerSavingMode).toBe(false);
    });

    it("should have a max temp of 25", function(){
      expect(thermostat.changeTemperature(6)).toBe("Cannot increase above 25");
      expect(thermostat.temperature).toEqual(25);
    });

    it("should have a max temp of 32 when off", function(){
      thermostat.powerSavingSwitch("Off");
      expect(thermostat.changeTemperature(15)).toBe("Cannot increase above 32");
      expect(thermostat.temperature).toEqual(32);
    });

    it("", function() {
      thermostat.powerSavingSwitch("Off");
      expect(thermostat.changeTemperature(15));
      thermostat.powerSavingSwitch("On");
      expect(thermostat.temperature).toEqual(25);

    });

  });

  describe("thermostat energy", function() {

    it("should be medium by default", function() {
      expect(thermostat.energy).toBe("medium")
    });

    it("should be low when below 18", function() {
      thermostat.changeTemperature(-4);
      thermostat.energyMode();
      expect(thermostat.energy).toBe("low");
    });

    it("should be high when above 25", function() {
      thermostat.powerSavingSwitch("Off");
      thermostat.changeTemperature(6);
      thermostat.energyMode();
      expect(thermostat.energy).toBe("high");
    });

    it("should be medium inbetween 18 and 25", function() {
      thermostat.changeTemperature(4);
      thermostat.energyMode();
      expect(thermostat.energy).toBe("medium");
    });

  });

});