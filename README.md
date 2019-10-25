# homelab

A small self-hosted dashboard for watching over a home lab. It ingests
telemetry from the hardware and services you run at home, shows it in one
place, and nudges you when something goes wrong.

It's built on Express and socket.io. Devices and sensors push readings to a
local ingest endpoint, and the dashboard subscribes over a socket and renders
the live view. There's a little retention so you can look back, and simple
alert rules so you're not staring at a wall of numbers all day.

This is a hobby project, not a monitoring suite. If you want the real thing,
use Grafana with a proper backend, or Zabbix, or Nagios. homelab is the
"what's my rack doing right now" tool: lightweight, self-hosted, and meant to
sit quietly on a small box.

## Where it stands

Work in progress, and it shows. Roughly:

- a local ingest endpoint for device and sensor telemetry;
- a socket.io push path so the dashboard updates live;
- short-term retention for the readings, enough to spot trends;
- basic alert rules (thresholds, offline detection);
- a dashboard view under `html/`.

The display side and the alerting are the least finished parts. `NOTES.md`
tracks what's actually working.

## Layout

- `js/server/` is the ingest and push path (Express routes, socket.io).
- `html/` is the dashboard front-end.
- `NOTES.md` holds the architecture and status notes.

## Running it

It's a Node project. Install the dependencies and start the server; the
dashboard is served locally. It expects to sit on the same network as the
devices it watches. See the notes in `NOTES.md` for deployment specifics.

## Where it sits relative to the rest

**Grafana**, **Zabbix** and **Nagios** are full monitoring platforms with real
backends, retention and alerting. homelab is deliberately none of those. It's
closer to the tiny self-hosted telemetry viewers people build just to keep an
eye on their own rack, and it borrows the same instinct: get the readings in
one place and act on the obvious problems.

## License

ISC, see `LICENSE`.
