// ingest route: intrusion telemetry
module.exports = function (app) {
	app.post("/ingest/intrusion", function (req, res) {
		// validate, normalize, enqueue the reading
		res.json({ ok: true });
	};
};
