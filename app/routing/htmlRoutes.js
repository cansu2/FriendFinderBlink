module.exports = function(app)
{
    app.get('/',function(req,res){
        res.render('home.html')
    });
    app.get('/survey',function(req,res){
        res.render('survey.html')
    });
}
