#!/bin/sh
set -e

mkdir -p /keys/tor /keys/i2p

# Dynamically build supervisord config so i2pd is only included if installed
cat > /tmp/supervisord.conf << 'EOF'
[supervisord]
nodaemon=true
logfile=/dev/stdout
logfile_maxbytes=0
pidfile=/tmp/supervisord.pid

[program:app]
command=bun /app/index.js
autostart=true
autorestart=true
stdout_logfile=/dev/stdout
stdout_logfile_maxbytes=0
stderr_logfile=/dev/stderr
stderr_logfile_maxbytes=0

[program:tor]
command=tor -f /etc/tor/torrc
autostart=true
autorestart=true
stdout_logfile=/dev/stdout
stdout_logfile_maxbytes=0
stderr_logfile=/dev/stderr
stderr_logfile_maxbytes=0
EOF

if command -v i2pd > /dev/null 2>&1; then
  cat >> /tmp/supervisord.conf << 'EOF'

[program:i2pd]
command=i2pd --conf=/etc/i2pd/i2pd.conf --tunconf=/etc/i2pd/tunnels.conf
autostart=true
autorestart=true
stdout_logfile=/dev/stdout
stdout_logfile_maxbytes=0
stderr_logfile=/dev/stderr
stderr_logfile_maxbytes=0
EOF
fi

# Background watcher: print .onion address once tor generates it
(
  while [ ! -f /keys/tor/hostname ]; do sleep 2; done
  echo ""
  echo "┌─────────────────────────────────────────────────┐"
  echo "│  tor address: $(cat /keys/tor/hostname)"
  echo "└─────────────────────────────────────────────────┘"
  echo ""
) &

# Background watcher for i2p — polls the i2pd web console for the b32 address
# and writes it to /keys/i2p/hostname so the app can serve it
if command -v i2pd > /dev/null 2>&1; then
  (
    sleep 10  # give i2pd time to start
    while true; do
      ADDR=$(wget -qO- "http://127.0.0.1:7070/tunnels" 2>/dev/null \
        | grep -o '[a-z2-7]\{52\}\.b32\.i2p' | head -1)
      if [ -n "$ADDR" ]; then
        echo "$ADDR" > /keys/i2p/hostname
        echo ""
        echo "┌─────────────────────────────────────────────────┐"
        echo "│  i2p address: $ADDR"
        echo "└─────────────────────────────────────────────────┘"
        echo ""
        break
      fi
      sleep 5
    done
  ) &
fi

exec /usr/bin/supervisord -c /tmp/supervisord.conf
