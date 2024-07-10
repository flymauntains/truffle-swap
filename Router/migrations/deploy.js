const SherpaswapRouter = artifacts.require("SherpaswapRouter");

module.exports = async function(deployer, network, accounts) {
  // Set the factory and WETH addresses
  const factoryAddress = "0x84A3B8803D072fBBB1cd01E5b399eB4C1ff4164f"; // Replace with your factory contract address
  const WETHAddress = "0x2A416168ceA12820E288d36f77C1b7f936F4e228"; // Replace with your WETH contract address

  await deployer.deploy(SherpaswapRouter, factoryAddress, WETHAddress);
  console.log("deployed Success");
};
