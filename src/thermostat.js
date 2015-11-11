function Thermostat() {
	this.temp = 20;
	this.minTemp = 10; 
}

Thermostat.prototype.temperature = function() {
	return this.temp;
}; 

Thermostat.prototype.up = function() {
	this.temp += 1;
};

Thermostat.prototype.down = function() {
	if (this.temp <= this.minTemp) { throw 'Min temperature reached'};
	this.temp -= 1;
};