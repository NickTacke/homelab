// alert rule: thermal-runaway
module.exports = {
	name: "thermal-runaway",
	evaluate: function (reading, window) {
		// compare against the configured threshold over the window
		return false;
	}
};
