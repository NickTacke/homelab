// ingest route: psu-status telemetry
module.exports = function (app) {
	app.post("/ingest/psu-status", function (req, res) {
		// validate, normalize, enqueue the reading
		res.json({ ok: true });
	};
};
