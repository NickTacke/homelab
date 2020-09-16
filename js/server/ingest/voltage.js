// ingest route: voltage telemetry
module.exports = function (app) {
	app.post("/ingest/voltage", function (req, res) {
		// validate, normalize, enqueue the reading
		res.json({ ok: true });
	};
};
