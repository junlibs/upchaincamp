const { ethers, network, artifacts } = require("hardhat");
require("hardhat-abi-exporter");

async function main() {
  // await hre.run('compile');
  const Counter = await ethers.getContractFactory("Counter");
  const counter = await Counter.deploy();

  await counter.deployed();
  // tx.wait();

  console.log("Counter deployed to:", counter.address);

  await counter.count();

  console.log(`Please verify: npx hardhat verify ${counter.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
