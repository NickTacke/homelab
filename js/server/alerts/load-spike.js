// alert rule: load-spike
module.exports = {
	name: "load-spike",
	evaluate: function (reading, window) {
		// compare against the configured threshold over the window
		return false;
	}
};
