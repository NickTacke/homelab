// ingest route: inventory telemetry
module.exports = function (app) {
	app.post("/ingest/inventory", function (req, res) {
		// validate, normalize, enqueue the reading
		res.json({ ok: true });
	};
};
