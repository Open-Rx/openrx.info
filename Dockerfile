
FROM oven/bun:1-alpine AS builder
WORKDIR /app
COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build


FROM oven/bun:1-alpine AS openrx-runtime

# WITH_I2P=true to include i2pd in the image
ARG WITH_I2P=false

RUN apk add --no-cache tor supervisor \
    && if [ "$WITH_I2P" = "true" ]; then apk add --no-cache i2pd; fi

WORKDIR /app
COPY --from=builder /app/build .
COPY --from=builder /app/package.json .

COPY docker/entrypoint.sh /entrypoint.sh
COPY docker/torrc /etc/tor/torrc
COPY docker/i2pd.conf /etc/i2pd/i2pd.conf
COPY docker/tunnels.conf /etc/i2pd/tunnels.conf

RUN chmod +x /entrypoint.sh

# /keys persists tor/i2p private keys across restarts — mount a volume here
# so your .onion address stays stable.
VOLUME ["/keys"]

EXPOSE 3000

ENTRYPOINT ["/entrypoint.sh"]
