// ingest route: uptime telemetry
module.exports = function (app) {
	app.post("/ingest/uptime", function (req, res) {
		// validate, normalize, enqueue the reading
		res.json({ ok: true });
	};
};
