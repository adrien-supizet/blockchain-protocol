const { hostPort } = require('../config/config');
let { myBlockchain } = require('../src/blockchain');
exports = module.exports = [
    {
        method: 'GET',
        path: '/node',
        handler: (request, h) => hostPort
    },
    {
        method: 'GET',
        path: '/block/{index}',
        handler: (request, h) => myBlockchain.blocks[request.params.index]
    },
    {
        method: 'GET',
        path: '/balance/{address}',
        handler: (request, h) => myBlockchain.getBalance(request.params.address)
    },
    {
        method: 'POST',
        path: '/transaction',
        handler: (request, res) => {
            const data = request.payload;
            myBlockchain.addTransaction(data.from, data.to, data.amount);
            return res.status(200);
        }
    }
];
