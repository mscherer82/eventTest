module.exports = {
  solc: {
	optimizer: {
		enabled: true,
		runs: 200
	}
  },
  networks: {
    development: {
      privateKey: '',
      userFeePercentage: 10,
      feeLimit: 1e9,
      fullHost: "https://api.shasta.trongrid.io",
      originalEnergyLimit: 1e9,
      host: "https://api.shasta.trongrid.io",
      port: 8090,
      fullNode: "https://api.shasta.trongrid.io",
      solidityNode: "https://api.shasta.trongrid.io",
      eventServer: "https://api.shasta.trongrid.io",
      network_id: "43"
    },
    production: {}
  }
};
