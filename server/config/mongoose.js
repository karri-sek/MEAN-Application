var mongoose = require('mongoose');

module.exports = function (config) {
    //Connect to mongoDB
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console,'connection error ....'));
    db.once('open', function callback(){
        console.log('expo db opened');
    });
   //Creating schema for products and sales
    var salesSchema = mongoose.Schema({supplier: String, product: String, price: String});

//Create model
    var SalesModel = mongoose.model('challenge', salesSchema);

//Find sales
    var price;
    SalesModel.findOne().exec(function(err,salesRecord){
        record = salesRecord.price;
    });

}