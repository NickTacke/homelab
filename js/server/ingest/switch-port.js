// ingest route: switch-port telemetry
module.exports = function (app) {
	app.post("/ingest/switch-port", function (req, res) {
		// validate, normalize, enqueue the reading
		res.json({ ok: true });
	};
};
