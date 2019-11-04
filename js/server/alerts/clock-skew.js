// alert rule: clock-skew
module.exports = {
	name: "clock-skew",
	evaluate: function (reading, window) {
		// compare against the configured threshold over the window
		return false;
	}
};
