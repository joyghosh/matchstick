/**
* Matchstick model.
* @author: Joy Ghosh
* @version: 1.0
* @createdAt: December 31, 2016.
**/
var matcher = require("./methods");

function Matchstick(method){
	this.method = method;
}

//find all.
Matchstick.prototype.findAll = function(text, pattern){
  return matcher.search(text, pattern, this.method);
}

//find first.
Matchstick.prototype.findFirst = function(text, pattern){
  return matcher.searchFirst(text, pattern, this.method);
}

//find last.
Matchstick.prototype.findLast = function(text, pattern){
  return matcher.searchLast(text, pattern, this.method);
}

module.exports = Matchstick;
