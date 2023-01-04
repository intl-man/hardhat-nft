# Sample IM NFT Project

Because everyone wants an IM NFT, right...right?

## Setup

### Environment

Set the following ENV vars:

```console
API_URL=
PRIVATE_KEY=
API_KEY=
```

where:

| Var           | Description                                                                    |
|---------------|--------------------------------------------------------------------------------|
| `API_URL`     | The Web3 provider URL.                                                         |
| `PRIVATE_KEY` | The private key of a wallet that has enough ETH to pay for deployment/minting. |
| `API_KEY`     | The Web3 provider API key.                                                     |

### Packages

```console
npm install
```

## Deploy Contract

### Testnet

```console
npx hardhat run scripts/deploy.js --network goerli
```

## Mint NFT

### Testnet

```console
node scripts/minter.js
```
