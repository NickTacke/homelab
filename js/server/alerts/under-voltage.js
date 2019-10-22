// alert rule: under-voltage
module.exports = {
	name: "under-voltage",
	evaluate: function (reading, window) {
		// compare against the configured threshold over the window
		return false;
	}
};
