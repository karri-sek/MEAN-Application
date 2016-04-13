var express = require('express'),
    stylus  = require('stylus'),
    logger  = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose   =  require('mongoose');

var env = process.env.NODE_ENV  = process.env.NODE_ENV  || 'development';

var app = express();

function compile(str,path){
	return stylus(str).set('filename', path);
}

app.set('views',__dirname + '/server/views');
app.set('view engine', 'jade');
app.use(logger('dev'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(stylus.middleware(
  {
  	 src: __dirname + '/public',
  	 compile: compile
  }
));

app.use(express.static(__dirname + '/public'));

//Connect to mongoDB
mongoose.connect('mongodb://localhost/expo');
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


app.get('/partials/:partialPath', function(req,res){
  res.render('partials/' + req.params.partialPath);
});

//Passing price to the index template 

app.get('*', function(req,res){
  res.render('index', {
  	  price : price
  });
});

var port = 3030;

app.listen(port);