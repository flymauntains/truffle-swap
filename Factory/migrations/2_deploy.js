const SherpaswapFactory = artifacts.require("SherpaswapFactory");

module.exports = async function(deployer, network, accounts) {
  const feeToSetter = accounts[0]; // You can change this to any address you want to set as the feeToSetter
  await deployer.deploy(SherpaswapFactory, feeToSetter);
};
