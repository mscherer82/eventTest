module.exports = {
  networks: {
    development: {
      privateKey: "687d3b40200f58687c4f1c9eebbbea3a25d11396a278826daba808b3b96fdefc",
      consume_user_resource_percent: 30,
      fee_limit: 100000000,
      host: "https://api.shasta.trongrid.io",
      port: 8090,
      fullNode: "https://api.shasta.trongrid.io",
      solidityNode: "https://api.shasta.trongrid.io",
      eventServer: "https://api.shasta.trongrid.io",
      network_id: "*"
    },
    production: {}
  }
};
