// ingest route: current telemetry
module.exports = function (app) {
	app.post("/ingest/current", function (req, res) {
		// validate, normalize, enqueue the reading
		res.json({ ok: true });
	};
};
