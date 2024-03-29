// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
// const hre = require("hardhat");

// Ethers is in the global scope, so you don't need to require it.
// const { ethers } = require("ethers");

const MAX_SUPPLY = 100;

async function main() {
  const [deployer] = await ethers.getSigners();
  const { addressAccount } = deployer;

  console.log(
    `Deploying contracts with the account: ${addressAccount}`
  );
  
  const CryptoPunk = await ethers.getContractFactory("CryptoPunk");
  const deployed = await CryptoPunk.deploy(MAX_SUPPLY);
  const addressContract = deployed.address;

  console.log(`Contract deployed to address: ${addressContract}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
