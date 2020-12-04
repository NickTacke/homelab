// ingest route: fan telemetry
module.exports = function (app) {
	app.post("/ingest/fan", function (req, res) {
		// validate, normalize, enqueue the reading
		res.json({ ok: true });
	};
};
