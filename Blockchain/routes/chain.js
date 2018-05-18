const { hostPort } = require("../config/config");
const s = require("../server");
console.log(s);
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
      return serv.getBlockchain();
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
