// ingest route: rssi telemetry
module.exports = function (app) {
	app.post("/ingest/rssi", function (req, res) {
		// validate, normalize, enqueue the reading
		res.json({ ok: true });
	};
};
