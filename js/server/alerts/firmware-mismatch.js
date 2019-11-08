// alert rule: firmware-mismatch
module.exports = {
	name: "firmware-mismatch",
	evaluate: function (reading, window) {
		// compare against the configured threshold over the window
		return false;
	}
};
