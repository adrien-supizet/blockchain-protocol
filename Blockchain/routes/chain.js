module.exports = [
  {
    method: "GET",
    path: "/node",
    handler: function(request, h) {
      return "node " + 3000;
    }
  }
];
