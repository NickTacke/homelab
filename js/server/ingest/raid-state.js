// ingest route: raid-state telemetry
module.exports = function (app) {
	app.post("/ingest/raid-state", function (req, res) {
		// validate, normalize, enqueue the reading
		res.json({ ok: true });
	};
};
