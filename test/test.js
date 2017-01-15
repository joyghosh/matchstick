/**
* Unit tests for pattern matching functions.
* @author: Joy Ghosh
**/
var assert = require('assert');
var matcher = require("../methods");

describe("pattern matcher", function(){
	var text = ["This is a test text.", "AABAACAADAABAABA"];
	var pattern = ["test", "AABA"];
	// var algorithms = matcher.Algorithms;
	// console.log(algorithms);

	describe("naive pattern matching", function(){
		it('should return [10] upon successful match.', function(){
			assert.deepEqual([10], matcher.search(text[0], pattern[0], "naive"));
		});

		it('should return [0,9,12] upon successful match.', function(){
			assert.deepEqual([0,9,12], matcher.search(text[1], pattern[1], "naive"));
		});

		it('should return -1 upon no match.', function(){
			assert.equal(-1, matcher.search(text[0], pattern[1], "naive"));
		});
	});

	describe("KMP pattern matching", function(){
		it('should return [10] upon successful match.', function(){
			assert.deepEqual([10], matcher.search(text[0], pattern[0], "kmp"));
		});

		it('should return [0,9,12] upon successful match.', function(){
			assert.deepEqual([0,9,12], matcher.search(text[1], pattern[1], "kmp"));
		});

		it('should return -1 upon no match.', function(){
			assert.equal(-1, matcher.search(text[0], pattern[1], "kmp"));
		});
	});

	describe("Rabin Karp pattern matching", function(){
		it('should return [10] upon successful match.', function(){
			assert.deepEqual([10], matcher.search(text[0], pattern[0], "rabinkarp"));
		});

		it('should return [0,9,12] upon successful match.', function(){
			assert.deepEqual([0,9,12], matcher.search(text[1], pattern[1], "rabinkarp"));
		});

		it('should return -1 upon no match.', function(){
			assert.equal(-1, matcher.search(text[0], pattern[1], "rabinkarp"));
		});
	});
});
