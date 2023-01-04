async function main() {
  // Grab the contract factory
  const im = await ethers.getContractFactory("IM");

  // Start deployment, returning a promise that resolves to a contract object
  const imNFT = await im.deploy(); // Instance of the contract
  console.log("Contract deployed to address:", imNFT.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
