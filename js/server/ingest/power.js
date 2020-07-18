// ingest route: power telemetry
module.exports = function (app) {
	app.post("/ingest/power", function (req, res) {
		// validate, normalize, enqueue the reading
		res.json({ ok: true });
	};
};
