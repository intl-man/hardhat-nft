require('dotenv').config();
const ethers = require('ethers');
const API_KEY = process.env.API_KEY;
const provider = new ethers.providers.AlchemyProvider('goerli', API_KEY)
const contractArtifact = require("../artifacts/contracts/IM.sol/IM.json");

const privateKey = process.env.PRIVATE_KEY
const signer = new ethers.Wallet(privateKey, provider)

const abi = contractArtifact.abi
const contractAddress = '0x56c7FDa4fc2b3783A0fA7aF35Bc5961537881D08'

const contract = new ethers.Contract(contractAddress, abi, signer)

const tokenUri = "https://intlman.mypinata.cloud/ipfs/QmZEZXMsUsknE2E5VVpnTvwsNb3Jt9UZv5HEcHGJ5M4v2F"

const minter = async () => {
    let nftTxn = await contract.mintNFT(signer.address, tokenUri)
    await nftTxn.wait()
    console.log(`TxHash: https://goerli.etherscan.io/tx/${nftTxn.hash}`)
}

minter()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
