// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if(currency>10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    if(currency <= 0){
        return {};
    }
    var coinNameAndValue = {
        H: 50,
        Q: 25,
        D: 10,
        N: 5,
        P: 1
    };
    exchange = {};

    for (var key in coinNameAndValue) {        
	    var modulo = currency%coinNameAndValue[key];
        currency = Math.floor(currency/coinNameAndValue[key]);
        
        if(currency != 0){
            exchange[key] = currency;
        }
        if(modulo == 0){
            return exchange;
        }
        else{
            currency = modulo;
        }
    }
}
