/**
* @author: Joy Ghosh
* @date: November 22, 2016
**/

//supported pattern searching methods.
var Algorithm = { NAIVE : "naive",
	KMP : "kmp",
	RABIN_KARP : "rabinkarp"
};

var CONSTANTS = { D: 256, Q: 101};
// exports.Algorithm = algorithms;

//search the entire text for matching patterns.
exports.search = function(data, pattern, algorithm){
	var text = data.split("");
	var pat = pattern.split("");
	var N = data.length;
	var M = pattern.length;
	var result;

	switch(algorithm){
		case Algorithm.NAIVE:
			result = naive(text, pat, M, N);
			break;

		case Algorithm.KMP:
			result = kmp(text, pat, M, N);
			break;

		case Algorithm.RABIN_KARP:
			result = rabinkarp(text, pattern, M, N, CONSTANTS.Q);
			break;

		default:
			console.log("No such pattern search algorithm found.");
	}
	return (result.length==0)? -1: result;
}

/**
* return index of the first match.
**/
exports.searchFirst = function(data, pattern, algorithm){
	var result = exports.search(data, pattern, algorithm);
	return (result == -1)? -1: result[0];
}

/**
* return index of the last match.
**/
exports.searchLast = function(data, pattern, algorithm){
	var result = exports.search(data, pattern, algorithm);
	return (result == -1)? -1: result.pop();
}


/**
* Naive or simple approach for pattern searching.
**/
function naive(text, pattern, M, N){
	var indices = [];
	/* slide pattern one by one*/
	for (var i = 0; i <= N-M; i++) {
		var j;
		for (j = 0; j < M; j++) {
			if(text[i+j]!=pattern[j])
				break;
		}

		if(j==M){ indices.push(i); }
	}
	return indices;
}

/**
* Naive or simple approach for pattern searching.
**/
function kmp(text, pattern, M, N){
	var indices = [];
	var lps = [];
	preprocess(pattern, M, lps);
	var i = 0;   // index for data.
  var j  = 0;  // index for pattern.

  while(i < N){
    if (pattern[j] == text[i]){
    	j++; i++;
    }

    if(j == M){
    	indices.push(i-j);
      j = lps[j-1];
    }else if(i < N && pattern[j] != text[i]){	// mismatch after j matches
      // Do not match lps[0..lps[j-1]] characters,
      // they will match anyway
      if (j!=0){
      	 j = lps[j-1];
      }else{
          i = i+1;
      }
    }
  }
	return indices;
}

/**
* Preprocessing for KMP approach.
**/
function preprocess(pattern, M, lps){
	var length = 0;
	var i = 1;
	lps[0] = 0;

	while(i<M){
		if(pattern[i] == pattern[length]){
			length++;
			lps[i] = length;
			i++;
		}else{
			if(length!=0){
				length = lps[length-1];
			}else{
				lps[i] = length;
				i++;
			}
		}
	}
}


/**
* Naive or simple approach for pattern searching.
**/
function rabinkarp(text, pattern, M, N, q){
	var indices = [];
	var p = 0;
	var t = 0;
	var h = 1;

	h = Math.pow(CONSTANTS.D, M-1)%q;

	for(var i=0; i<M; i++){
		p = (CONSTANTS.D*p + pattern[i].charCodeAt())%q;
		t = (CONSTANTS.D*t + text[i].charCodeAt())%q;
	}

	for(var i=0; i<=N-M; i++){
		if(p==t){
			for(var j=0; j<M; j++){
				if(text[i+j]!=pattern[j]) break;
			}

			if(j==M)	indices.push(i);
		}

		if(i<N-M){
			t = (CONSTANTS.D*(t-text[i].charCodeAt()*h) + text[i+M].charCodeAt())%q;
			t = (t<0)? (t+q): t;
		}
	}
	return indices;
}
