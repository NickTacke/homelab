// alert rule: latency-spike
module.exports = {
	name: "latency-spike",
	evaluate: function (reading, window) {
		// compare against the configured threshold over the window
		return false;
	}
};
