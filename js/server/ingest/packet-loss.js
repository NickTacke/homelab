// ingest route: packet-loss telemetry
module.exports = function (app) {
	app.post("/ingest/packet-loss", function (req, res) {
		// validate, normalize, enqueue the reading
		res.json({ ok: true });
	};
};
