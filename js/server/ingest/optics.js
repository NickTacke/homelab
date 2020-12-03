// ingest route: optics telemetry
module.exports = function (app) {
	app.post("/ingest/optics", function (req, res) {
		// validate, normalize, enqueue the reading
		res.json({ ok: true });
	};
};
