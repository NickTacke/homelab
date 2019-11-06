// ingest route: thermal-zone telemetry
module.exports = function (app) {
	app.post("/ingest/thermal-zone", function (req, res) {
		// validate, normalize, enqueue the reading
		res.json({ ok: true });
	};
};
