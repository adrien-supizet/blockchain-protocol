"use strict";

const Hapi = require("hapi");
const routes = require("./routes");

const { hostName, hostPort } = require("./config/config");

const server = Hapi.server({
  host: hostName,
  port: hostPort
});

server.route(routes);

// Start the server
async function start() {
  try {
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log("Server running at:", server.info.uri);
}

start();
