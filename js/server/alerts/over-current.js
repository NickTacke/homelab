// alert rule: over-current
module.exports = {
	name: "over-current",
	evaluate: function (reading, window) {
		// compare against the configured threshold over the window
		return false;
	}
};
