const { hostPort } = require("../config/config");
const { chain } = require("../src/blockchain");
module.exports = [
  {
    method: "GET",
    path: "/node",
    handler: function(request, h) {
      return hostPort;
    }
  },
  {
    method: "GET",
    path: "/block/{index}",
    handler: function(request, h) {
      console.log(chain.blocks[request.params.index]);
      return chain.blocks[request.params.index];
    }
  },
  {
    method: "GET",
    path: "/chain/{page}",
    handler: function(request, h) {
      return request.params.index;
    }
  },
  {
    method: "POST",
    path: "/transaction",
    handler: function(request, h) {
      return "";
    }
  }
];
