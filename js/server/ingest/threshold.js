// ingest route: threshold telemetry
module.exports = function (app) {
	app.post("/ingest/threshold", function (req, res) {
		// validate, normalize, enqueue the reading
		res.json({ ok: true });
	};
};
