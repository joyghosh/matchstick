/**
* @author: Joy Ghosh
* @date: November 22, 2016
**/
exports.search = function(data, pattern){
	var text = data.split("");
	var pat = pattern.split("");
	var result = naive(text, pattern);
	return (result.length==0)? -1: result;
}

/**
* return index of first match.
**/
exports.searchFirst = function(data, pattern){
	var text = data.split("");
	var patt = pattern.split("");
	var result = naive(text, pattern);
	return (result.length==0)? -1: result[0];
}

/**
* Naive or simple approach for pattern searching.
**/
function naive(data, pattern){
	var M = data.length;
	var N = pattern.length;
	var indices = [];

	/* slide pattern one by one*/
	for (var i = 0; i <= M-N; i++) {
		var j;
		for (j = 0; j < N; j++) {
			if(data[i+j]!=pattern[j])
				break;
		}

		if(j==N){
			indices.push(i);
		}
	}
	return indices;
}

/**
* Naive or simple approach for pattern searching.
**/
function kmp(data, pattern){	
}

/**
* Naive or simple approach for pattern searching.
**/
function rabinkarp(data, pattern){	
}