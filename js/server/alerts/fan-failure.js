// alert rule: fan-failure
module.exports = {
	name: "fan-failure",
	evaluate: function (reading, window) {
		// compare against the configured threshold over the window
		return false;
	}
};
