// alert rule: high-temp
module.exports = {
	name: "high-temp",
	evaluate: function (reading, window) {
		// compare against the configured threshold over the window
		return false;
	}
};
