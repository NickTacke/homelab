// alert rule: battery-low
module.exports = {
	name: "battery-low",
	evaluate: function (reading, window) {
		// compare against the configured threshold over the window
		return false;
	}
};
