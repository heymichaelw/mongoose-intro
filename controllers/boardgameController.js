const Boardgame = require('../models/boardgame');

module.exports = {
  list: function(req, res){
    Boardgame.find().then(function(results){
        res.render("boardgame/list", {model: results});
    });
  }
};
