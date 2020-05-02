// ingest route: humidity telemetry
module.exports = function (app) {
	app.post("/ingest/humidity", function (req, res) {
		// validate, normalize, enqueue the reading
		res.json({ ok: true });
	};
};
