module.exports = {
  apps: [{
    name: "ckstats-dgb",
    script: "pnpm",
    args: "start",
    cwd: "/home/umbrel/umbrel/app-data/digibyte/ckstats",
    interpreter: "none",
    autorestart: true,
    env: {
      PORT: 3003
    }
  }]
}
