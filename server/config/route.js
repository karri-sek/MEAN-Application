

module.exports = function(app){
    app.get('/partials/*', function(req,res){
        res.render('partials/' + req.params[0]);
    });

    app.get('/getDetails', function(req, res, next){

    });

    app.get('*', function(req,res){
        console.log('response');
        res.render('index',res.resultRecord);   
    });
}