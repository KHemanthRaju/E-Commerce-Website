var braintree = require("braintree");

var gateway = new braintree.BraintreeGateway({
    environment: braintree.Environment.Sandbox,
    merchantId: "d6n5wssvpng48y55",
    publicKey: "h3rffb6zqqy8xjcs",
    privateKey: "c00730982b60061fdcc812b973e059b9"
});

exports.getToken = (req, res) => {
    gateway.clientToken.generate({}, function(err, response) {
        if(err){
            res.status(500).json(err);
        } else {
            res.send(response);
        }
    });
};


exports.processPayment = (req, res) => {
    let nonceFromTheClient = req.body.paymentMethodNonce;
    let amountFromTheClient = req.body.amount;
    gateway.transaction.sale({
    amount: amountFromTheClient,
    paymentMethodNonce: nonceFromTheClient,
    
    options: {
    submitForSettlement: true
    }
    }, function(err, result) {
        if(err){
            res.status(500).json(error);
        } else {
            res.json(result);
        }
    });
};