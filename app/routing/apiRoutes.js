var friends = require("../data/friends");

module.exports = function(app)
{
    app.get("/api/friends", function(req, res) {
        res.json(friends);
      });

    
  app.post("/api/friends", function(req, res) {

    function add(a,b){
        return a + b;
    }

    var newFriend = req.body;
    var newScoreString = Object.values(newFriend)[2];
    var newScoreInteger=[];

    var bestMatch = {
        name: "",
        photo: "",
        friendDifference: 1000
    };

   

    var scoresInteger=[];

    console.log(newScoreString);
    
        for (var i=0; i<newScoreString.length; i++){
            newScoreInteger.push(parseInt(newScoreString[i]));
        }   
   
    // console.log(newScoreInteger);

    var newScore = newScoreInteger.reduce(add, 0);
    // console.log(newScore);


    for (var i=0; i < friends.length; i++){
        var currentScore = friends[i].scores;
        for (var i=0; i<currentScore.length; i++){
            scoresInteger.push(parseInt(currentScore[i]));
        }  
        
        var number = scoresInteger.reduce(add,0);

        if (number === newScore){
            console.log("new match")
            // bestMatch[0].name = friends[i].name;
			// bestMatch[0].photo = friends[i].photo;
        } 

    }

    console.log(scoresInteger);


    friends.push(req.body);
    res.json(bestMatch);

  });
        
}






