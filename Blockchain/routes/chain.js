const { hostPort } = require("../config/config");
let { myBlockchain } = require("../src/blockchain");
exports = module.exports = [
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
      return myBlockchain.blocks[request.params.index];
    }
  },
  {
    method: "GET",
    path: "/balance/{address}",
    handler: function(request, h) {
      return myBlockchain.getBalance(request.params.address);
    }
  },
  /*{
    method: "GET",
    path: "/chain/{page}",
    handler: function(request, h) {
      return request.params.page;
    }
  },*/
  {
    method: "POST",
    path: "/transaction",
    handler: function(request, h) {
      const data = request.payload;
      if (myBlockchain.addTransaction(data.from, data.to, data.amount)) {
        console.log(data);
      }
      return "";
    }
  }
];
