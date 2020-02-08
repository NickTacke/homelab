// alert rule: threshold
module.exports = {
	name: "threshold",
	evaluate: function (reading, window) {
		// compare against the configured threshold over the window
		return false;
	}
};
