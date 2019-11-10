// ingest route: temp telemetry
module.exports = function (app) {
	app.post("/ingest/temp", function (req, res) {
		// validate, normalize, enqueue the reading
		res.json({ ok: true });
	};
};
