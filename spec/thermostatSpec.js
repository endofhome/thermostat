describe('Thermostat', function() {

	var thermostat;
	var temp = 20;

	beforeEach(function() {
		thermostat = new Thermostat();
	});

	describe('#temperature', function () {
		it('has a default temprature on initialization', function () {
			expect(thermostat.temperature()).toBe(temp);
		});
	});

	describe("#up", function() {
		it('allows you to increase the temperature', function() {
			thermostat.up();
			expect(thermostat.temperature()).toBe(temp + 1)
		});
	});
});