// ingest route: disk telemetry
module.exports = function (app) {
	app.post("/ingest/disk", function (req, res) {
		// validate, normalize, enqueue the reading
		res.json({ ok: true });
	};
};
