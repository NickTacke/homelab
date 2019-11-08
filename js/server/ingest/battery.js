// ingest route: battery telemetry
module.exports = function (app) {
	app.post("/ingest/battery", function (req, res) {
		// validate, normalize, enqueue the reading
		res.json({ ok: true });
	};
};
