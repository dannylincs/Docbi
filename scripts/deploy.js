const hre = require("hardhat");

async function main() {
  // Get the contract factory for "Doc"
  const Doc = await hre.ethers.getContractFactory("Doc");

  // Deploy the contract
  const doc = await Doc.deploy();

  // Wait for the deployment to complete
  await doc.deployed();

  // Log the deployed contract address
  console.log("Doc contract deployed to:", doc.address);
}

// Catch any errors
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
