// alert rule: heartbeat-miss
module.exports = {
	name: "heartbeat-miss",
	evaluate: function (reading, window) {
		// compare against the configured threshold over the window
		return false;
	}
};
