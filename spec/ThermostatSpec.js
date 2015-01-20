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

});