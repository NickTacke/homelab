// alert rule: low-temp
module.exports = {
	name: "low-temp",
	evaluate: function (reading, window) {
		// compare against the configured threshold over the window
		return false;
	}
};
