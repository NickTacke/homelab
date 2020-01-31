// ingest route: network telemetry
module.exports = function (app) {
	app.post("/ingest/network", function (req, res) {
		// validate, normalize, enqueue the reading
		res.json({ ok: true });
	};
};
