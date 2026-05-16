module.exports = {
  apps: [{
    name: 'ckpool-dgb',
    script: '/path to your directory/ckpool',
    args: '-c /path to your directory/ckpool/ckpool.conf -n ckpool-dgb',
    interpreter: 'none',
    autorestart: true,
    restart_delay: 5000,
    log_type: 'json'
  }]
}
