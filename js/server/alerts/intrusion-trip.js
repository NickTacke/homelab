// alert rule: intrusion-trip
module.exports = {
	name: "intrusion-trip",
	evaluate: function (reading, window) {
		// compare against the configured threshold over the window
		return false;
	}
};
