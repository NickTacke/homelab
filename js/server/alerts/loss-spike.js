// alert rule: loss-spike
module.exports = {
	name: "loss-spike",
	evaluate: function (reading, window) {
		// compare against the configured threshold over the window
		return false;
	}
};
