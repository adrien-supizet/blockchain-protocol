"use strict";

const Hapi = require("hapi");
const routes = require("./routes");
const Blockchain = require("./src/blockchain");
const request = require("request");

const { hostName, hostPort } = require("./config/config");

const server = Hapi.server({
  host: hostName,
  port: hostPort
});

server.route(routes);

let myBlockchain;
// Start the server
async function start() {
  try {
    await server.start();
    myBlockchain = Blockchain.initBlockchain();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log("Server running at:", server.info.uri);
  console.info(
    "Blockchain initialised with genesis block: " +
      myBlockchain.getLatestBlock().info
  );
}

start();
module.exports = server;
