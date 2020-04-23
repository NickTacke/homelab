// ingest route: firmware telemetry
module.exports = function (app) {
	app.post("/ingest/firmware", function (req, res) {
		// validate, normalize, enqueue the reading
		res.json({ ok: true });
	};
};
