async function main() {
  const im = await ethers.getContractFactory("IM");

  const imNFT = await im.deploy();
  console.log("Deployed to:", imNFT.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
