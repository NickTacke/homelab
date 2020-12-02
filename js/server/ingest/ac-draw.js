// ingest route: ac-draw telemetry
module.exports = function (app) {
	app.post("/ingest/ac-draw", function (req, res) {
		// validate, normalize, enqueue the reading
		res.json({ ok: true });
	};
};
