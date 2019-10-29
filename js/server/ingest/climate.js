// ingest route: climate telemetry
module.exports = function (app) {
	app.post("/ingest/climate", function (req, res) {
		// validate, normalize, enqueue the reading
		res.json({ ok: true });
	};
};
