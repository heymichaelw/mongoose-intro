const Boardgame = require('../models/boardgame');
const bodyparser = require('body-parser');
const parseurl = require('parseurl');

module.exports = {
  list: function(req, res){
    Boardgame.find().sort({name: 1}).then(function(results){
        res.render("boardgame/list", {model: results});
    });
  },
  create: function(req, res){
    var game = new Boardgame({name: req.body.name, playerCount: req.body.players, playTime: req.body.playtime, company: {
      name: req.body.companyname,
      designer: req.body.designer,
      location: req.body.location
    },
    boxart: req.body.boxart});
    game.save();
    res.redirect("/");
  },
  details: function(req, res){
    Boardgame.findOne({_id: req.params.id}).then(function(result){
      res.render("boardgame/details", {model: result});
    });
  },
  createPage: function(req, res){
    res.render("boardgame/create", {});
  },
  addstyle: function(req, res){
    style = req.body.style;
    Boardgame.findOne({_id: req.params.id}).then(function(result){
      result.style.push(style);
      result.save();
      res.redirect("back");
    });
  },
  delete: function(req, res){
    Boardgame.deleteOne({_id: req.params.id}).then(function(){
      res.redirect('/');
    });
  }
};
