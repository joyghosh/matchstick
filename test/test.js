/**
* Unit tests for pattern matching functions.
* @author: Joy Ghosh
* @version: 1.0
**/
var assert = require('assert');
var Matchstick = require("../index");
var matcher = require("../methods");

var text = ["This is a test text.", "AABAACAADAABAABA"];
var pattern = ["test", "AABA"];

//Test search all.
describe("test search all.", function(){

	describe("Naive", function(){
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

	describe("KMP", function(){
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

	describe("Rabin Karp", function(){
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

//Test search first.
describe("test search first.", function(){

	describe("Naive", function(){
		it('should return 10 upon successful match.', function(){
			assert.deepEqual(10, matcher.searchFirst(text[0], pattern[0], "naive"));
		});

		it('should return 0 upon successful match.', function(){
			assert.deepEqual(0, matcher.searchFirst(text[1], pattern[1], "naive"));
		});

		it('should return -1 upon no match.', function(){
			assert.equal(-1, matcher.searchFirst(text[0], pattern[1], "naive"));
		});
	});

	describe("KMP", function(){
		it('should return 10 upon successful match.', function(){
			assert.deepEqual(10, matcher.searchFirst(text[0], pattern[0], "kmp"));
		});

		it('should return 0 upon successful match.', function(){
			assert.deepEqual(0, matcher.searchFirst(text[1], pattern[1], "kmp"));
		});

		it('should return -1 upon no match.', function(){
			assert.equal(-1, matcher.searchFirst(text[0], pattern[1], "kmp"));
		});
	});

	describe("Rabin Karp", function(){
		it('should return 10 upon successful match.', function(){
			assert.deepEqual(10, matcher.searchFirst(text[0], pattern[0], "rabinkarp"));
		});

		it('should return 0 upon successful match.', function(){
			assert.deepEqual(0, matcher.searchFirst(text[1], pattern[1], "rabinkarp"));
		});

		it('should return -1 upon no match.', function(){
			assert.equal(-1, matcher.searchFirst(text[0], pattern[1], "rabinkarp"));
		});
	});
});

//Test search last.
describe("test search last.", function(){

	describe("Naive", function(){
		it('should return 10 upon successful match.', function(){
			assert.deepEqual(10, matcher.searchLast(text[0], pattern[0], "naive"));
		});

		it('should return 12 upon successful match.', function(){
			assert.deepEqual(12, matcher.searchLast(text[1], pattern[1], "naive"));
		});

		it('should return -1 upon no match.', function(){
			assert.equal(-1, matcher.searchLast(text[0], pattern[1], "naive"));
		});
	});

	describe("KMP", function(){
		it('should return 10 upon successful match.', function(){
			assert.deepEqual(10, matcher.searchLast(text[0], pattern[0], "kmp"));
		});

		it('should return 12 upon successful match.', function(){
			assert.deepEqual(12, matcher.searchLast(text[1], pattern[1], "kmp"));
		});

		it('should return -1 upon no match.', function(){
			assert.equal(-1, matcher.searchLast(text[0], pattern[1], "kmp"));
		});
	});

	describe("Rabin Karp", function(){
		it('should return 10 upon successful match.', function(){
			assert.deepEqual(10, matcher.searchLast(text[0], pattern[0], "rabinkarp"));
		});

		it('should return 12 upon successful match.', function(){
			assert.deepEqual(12, matcher.searchLast(text[1], pattern[1], "rabinkarp"));
		});

		it('should return -1 upon no match.', function(){
			assert.equal(-1, matcher.searchLast(text[0], pattern[1], "rabinkarp"));
		});
	});
});

//Test Matchstick entity.
describe("test Matchstick entity.", function(){

	//Test Matchstick entity using Naive method.
	describe("test APIs using naive method.", function(){

		var naive = new Matchstick("naive");
		it('should return [10] upon successful match.', function(){
			assert.deepEqual([10], naive.findAll(text[0], pattern[0]));
		});

		it('should return [0,9,12] upon successful match.', function(){
			assert.deepEqual([0,9,12], naive.findAll(text[1], pattern[1]));
		});

		it('should return -1 upon no match.', function(){
			assert.equal(-1, naive.findAll(text[0], pattern[1]));
		});

		it('should return 10 upon successful match.', function(){
			assert.deepEqual(10, naive.findFirst(text[0], pattern[0]));
		});

		it('should return 0 upon successful match.', function(){
			assert.deepEqual(0, naive.findFirst(text[1], pattern[1]));
		});

		it('should return -1 upon no match.', function(){
			assert.equal(-1, naive.findFirst(text[0], pattern[1]));
		});

		it('should return 10 upon successful match.', function(){
			assert.deepEqual(10, naive.findLast(text[0], pattern[0]));
		});

		it('should return 12 upon successful match.', function(){
			assert.deepEqual(12, naive.findLast(text[1], pattern[1]));
		});

		it('should return -1 upon no match.', function(){
			assert.equal(-1, naive.findLast(text[0], pattern[1]));
		});
	});

	//Test Matchstick entity using KMP method.
	describe("test APIs using KMP method.", function(){

		var kmp = new Matchstick("kmp");
		it('should return [10] upon successful match.', function(){
			assert.deepEqual([10], kmp.findAll(text[0], pattern[0]));
		});

		it('should return [0,9,12] upon successful match.', function(){
			assert.deepEqual([0,9,12], kmp.findAll(text[1], pattern[1]));
		});

		it('should return -1 upon no match.', function(){
			assert.equal(-1, kmp.findAll(text[0], pattern[1]));
		});

		it('should return 10 upon successful match.', function(){
			assert.deepEqual(10, kmp.findFirst(text[0], pattern[0]));
		});

		it('should return 0 upon successful match.', function(){
			assert.deepEqual(0, kmp.findFirst(text[1], pattern[1]));
		});

		it('should return -1 upon no match.', function(){
			assert.equal(-1, kmp.findFirst(text[0], pattern[1]));
		});

		it('should return 10 upon successful match.', function(){
			assert.deepEqual(10, kmp.findLast(text[0], pattern[0]));
		});

		it('should return 12 upon successful match.', function(){
			assert.deepEqual(12, kmp.findLast(text[1], pattern[1]));
		});

		it('should return -1 upon no match.', function(){
			assert.equal(-1, kmp.findLast(text[0], pattern[1]));
		});
	});

	//Test entity using Rabin Karp algorithm.
	describe("test APIs using naive method.", function(){

		var rabin = new Matchstick("rabinkarp");
		it('should return [10] upon successful match.', function(){
			assert.deepEqual([10], rabin.findAll(text[0], pattern[0]));
		});

		it('should return [0,9,12] upon successful match.', function(){
			assert.deepEqual([0,9,12], rabin.findAll(text[1], pattern[1]));
		});

		it('should return -1 upon no match.', function(){
			assert.equal(-1, rabin.findAll(text[0], pattern[1]));
		});

		it('should return 10 upon successful match.', function(){
			assert.deepEqual(10, rabin.findFirst(text[0], pattern[0]));
		});

		it('should return 0 upon successful match.', function(){
			assert.deepEqual(0, rabin.findFirst(text[1], pattern[1]));
		});

		it('should return -1 upon no match.', function(){
			assert.equal(-1, rabin.findFirst(text[0], pattern[1]));
		});

		it('should return 10 upon successful match.', function(){
			assert.deepEqual(10, rabin.findLast(text[0], pattern[0]));
		});

		it('should return 12 upon successful match.', function(){
			assert.deepEqual(12, rabin.findLast(text[1], pattern[1]));
		});

		it('should return -1 upon no match.', function(){
			assert.equal(-1, rabin.findLast(text[0], pattern[1]));
		});
	});
});
