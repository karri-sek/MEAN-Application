var mongoose = require('mongoose');

module.exports = function (config) {
    //Connect to mongoDB
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error ....'));
    db.once('open', function callback() {
        console.log('expo db opened');
    });
    //Creating schema for products and sales
    var productDetails = mongoose.Schema({
        _id: Number,
        supplier: String,
        product: String,
        price: Number
    });

//Create model
    var Sale = mongoose.model('Sale', productDetails);

    Sale.find({}).exec(function (err, collection) {
        if (collection.length === 0) {
            Sale.create({_id: 1, supplier: 'New Co Ltd', product: 'Small wongle', price: 5});
            Sale.create({_id: 2, supplier: 'New Co Ltd', product: 'Large wongle', price: 8});
            Sale.create({_id: 3, supplier: 'New Co Ltd', product: 'Super wongle', price: 12});
            Sale.create({_id: 4, supplier: 'Old Co Ltd', product: 'Small wongle', price: 6});
            Sale.create({_id: 5, supplier: 'Old Co Ltd', product: 'Large wongle', price: 9});
            Sale.create({_id: 6, supplier: 'Old Co Ltd', product: 'Super wongle', price: 4});
        }
    });
}