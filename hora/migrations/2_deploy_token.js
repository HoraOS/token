const Token = artifacts.require("Token");
//const Staking = artifacts.require("RotweillerStaking");

module.exports = function (deployer) {
  deployer.deploy(Staking, "0x68858b228becddb7cbb067212556171dc372d665","0x2AA08230De534bD2051C5494Bd6A1c75090f30bE",1623224750);
};

module.exports = function (deployer) {
  deployer.deploy(Token);
};
