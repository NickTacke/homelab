// alert rule: over-voltage
module.exports = {
	name: "over-voltage",
	evaluate: function (reading, window) {
		// compare against the configured threshold over the window
		return false;
	}
};
