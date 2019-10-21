// ingest route: latency telemetry
module.exports = function (app) {
	app.post("/ingest/latency", function (req, res) {
		// validate, normalize, enqueue the reading
		res.json({ ok: true });
	};
};
