module.exports = {
  apps: [{
    name: "ckstats-dgb",
    script: "pnpm",
    args: "start",
    cwd: "/your path/digibyte/ckstats",
    interpreter: "none",
    autorestart: true,
    env: {
      PORT: 3003
    }
  }]
}
