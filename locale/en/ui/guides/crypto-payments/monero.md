## Monero (XMR)

Monero is the only mainstream cryptocurrency that is private by default. Bitcoin records every transaction permanently on a public ledger. Monero doesn't — sender, recipient, and amount are all hidden using cryptographic techniques that are part of the protocol itself, not layered on top.

The relevant pieces:

- **Ring signatures** mix your transaction with others at the protocol level so the real sender can't be identified
- **Stealth addresses** generate a one-time address for every transaction; your actual wallet address never appears on-chain
- **RingCT** hides the transaction amount

This is meaningfully different from "mixing" Bitcoin or routing through a VPN. Those are patches on top of a transparent system. With Monero, there's simply no public record to analyze.

### Getting Monero

Monero is harder to buy directly than Bitcoin because several major exchanges have delisted it under regulatory pressure. Here are the practical options.

**Cake Wallet** is probably the easiest starting point. It's an open-source mobile wallet (iOS and Android) that supports Monero natively and has a built-in exchange. You can swap from BTC or buy directly with a card inside the app.

1. Download Cake Wallet
2. Create a new Monero wallet and write down your seed phrase somewhere safe
3. Use the Exchange tab to swap BTC to XMR, or buy with a card

**Swapping from BTC** works well if you already have Bitcoin. Services like [Trocador.app](https://trocador.app) or Majestic Bank let you swap BTC for XMR with no account required, no KYC, no record. Enter your Monero wallet address, send BTC, receive XMR.

**Haveno** is a decentralized exchange built specifically for Monero. Trades are peer-to-peer with no central server. You can pay with cash, bank transfer, and other methods. It's the most private option but also the most involved to set up.

### Sending to a vendor

Get the vendor's Monero address. In your wallet, tap Send, paste the address, enter the amount, and confirm.

Monero transactions typically confirm within 2-20 minutes. The fees are minimal and there's no equivalent of Bitcoin's "slow lane" where low-fee transactions sit unconfirmed for hours.

### A few things to know

Never share your seed phrase. Use Cake Wallet or the official Monero GUI wallet; avoid wallets from sources you don't recognize. Cake Wallet connects to remote nodes by default so you don't need to run your own node. And like all crypto, Monero transactions are irreversible once confirmed, so double-check the address.
