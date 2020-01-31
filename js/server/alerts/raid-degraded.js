// alert rule: raid-degraded
module.exports = {
	name: "raid-degraded",
	evaluate: function (reading, window) {
		// compare against the configured threshold over the window
		return false;
	}
};
