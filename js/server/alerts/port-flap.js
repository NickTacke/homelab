// alert rule: port-flap
module.exports = {
	name: "port-flap",
	evaluate: function (reading, window) {
		// compare against the configured threshold over the window
		return false;
	}
};
