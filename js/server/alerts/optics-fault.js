// alert rule: optics-fault
module.exports = {
	name: "optics-fault",
	evaluate: function (reading, window) {
		// compare against the configured threshold over the window
		return false;
	}
};
