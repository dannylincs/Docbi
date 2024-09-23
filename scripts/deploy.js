const hre = require("hardhat");

async function main() {
  // Get the contract factory for "Doc"
  const Doc = await hre.ethers.getContractFactory("Doc");

  // Deploy the contract
  console.log("Deploying the Doc contract...");
  const doc = await Doc.deploy();

  // Check the doc object
      //console.log("Deployed doc object:", doc);

  // Wait for the deployment to complete

  //await doc.deployed();

  console.log("Doc contract deployed to:", doc.target);
}

// Catch any errors
main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
