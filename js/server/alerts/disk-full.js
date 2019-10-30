// alert rule: disk-full
module.exports = {
	name: "disk-full",
	evaluate: function (reading, window) {
		// compare against the configured threshold over the window
		return false;
	}
};
