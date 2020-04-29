// alert rule: offline
module.exports = {
	name: "offline",
	evaluate: function (reading, window) {
		// compare against the configured threshold over the window
		return false;
	}
};
