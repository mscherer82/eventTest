const TronWeb = require("tronweb");
const caller = require("./../build/contracts/Caller.json");
const callee = require("./../build/contracts/Callee.json");

const main = async function() {
	
	const fullNode = new TronWeb.providers.HttpProvider('https://api.shasta.trongrid.io');
	const solidityNode = new TronWeb.providers.HttpProvider('https://api.shasta.trongrid.io');
	const eventServer = 'https://api.shasta.trongrid.io/';
	const privateKey = '687d3b40200f58687c4f1c9eebbbea3a25d11396a278826daba808b3b96fdefc';

	const tronWeb = new TronWeb(
		fullNode,
		solidityNode,
		eventServer,
		privateKey
	);
	
	let callerInst = await tronWeb.contract().at(caller.networks["43"].address);
	let calleeInst = await tronWeb.contract().at(callee.networks["43"].address);

    callerInst["Test1"]().watch(function(err, res) {
		console.log('Test1');
	});

    calleeInst["Test2"]().watch(function(err, res) {
		console.log('Test2');
	});

	await callerInst.doCall().send();
};

main();