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
			expect(thermostat.temperature()).toBe(temp + 1);
		});

		it('prevents you increasing the temp if powerSaving is true', function() {
			for (var i = 0; i < 5; i++) {
				thermostat.up();
			};
			expect(function() {thermostat.up();}).toThrow('In power saving mode. Max temperature reached');
		});

	});
	describe("#down", function() {
		it('allow you to decrease the temperature', function () {
			thermostat.down();
			expect(thermostat.temperature()).toBe(temp - 1);
		});
		it('prevents you reducing the temperature below ten degrees', function() {
			for (var i = 0; i < 10; i++) {
				thermostat.down();
			};
			expect(function() {thermostat.down();}).toThrow('Min temperature reached');
		});
	});

	describe("#powerSavingModeOn", function() {
		it('turning on', function() {
			expect(thermostat.powerSavingModeOn()).toBe(true);
		});
	});
});