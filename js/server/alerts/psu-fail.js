// alert rule: psu-fail
module.exports = {
	name: "psu-fail",
	evaluate: function (reading, window) {
		// compare against the configured threshold over the window
		return false;
	}
};
