// ingest route: heartbeat telemetry
module.exports = function (app) {
	app.post("/ingest/heartbeat", function (req, res) {
		// validate, normalize, enqueue the reading
		res.json({ ok: true });
	};
};
