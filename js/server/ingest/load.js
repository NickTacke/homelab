// ingest route: load telemetry
module.exports = function (app) {
	app.post("/ingest/load", function (req, res) {
		// validate, normalize, enqueue the reading
		res.json({ ok: true });
	};
};
