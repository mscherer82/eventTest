var Caller = artifacts.require("./Caller.sol");
var Callee = artifacts.require("./Callee.sol");

module.exports = function (deployer) {

    deployer.then(async () => {
        await deployer.deploy(Callee);
		await deployer.deploy(Caller);

        let caller = await Caller.deployed();
		let callee = await Callee.deployed();
		
		await caller.setAddress(callee.address);
		await caller.doCall();
    });
};
