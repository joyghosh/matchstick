/**
* @author: Joy Ghosh
* @date: November 22, 2016
**/

//supported pattern searching methods.
var Algorithm = { NAIVE : "naive",
	KMP : "kmp",
	RABIN_KARP : "rabinkarp"
};

// exports.Algorithm = algorithms;

//search the entire text for matching patterns.
exports.search = function(data, pattern, algorithm){
	var text = data.split(""); 
	var pat = pattern.split("");
	var M = data.length;
	var N = pattern.length;
	var result;
	
	switch(algorithm){
		case Algorithm.NAIVE:
			result = naive(text, pattern, M, N);
			break;

		case Algorithm.KMP:
			result = kmp(text, pattern, M, N);
			break;

		case Algorithm.RABIN_KARP:
			result = kmp(text, pattern, M, N);
			break;

		default:
			console.log("No such pattern search algorithm found.");			
	}
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
function naive(data, pattern, M, N){
	var indices = [];
	/* slide pattern one by one*/
	for (var i = 0; i <= M-N; i++) {
		var j;
		for (j = 0; j < N; j++) {
			if(data[i+j]!=pattern[j])
				break;
		}

		if(j==N){ indices.push(i); }
	}
	return indices;
}

/**
* Naive or simple approach for pattern searching.
**/
function kmp(data, pattern, M, N){
	var indices = [];
	var lps = [];
	preprocess(pattern, M, lps);
	console.log(lps);
	var i = 0;   // index for data.
    var j  = 0;  // index for pattern.
    while(i < N){
        if (pattern[j] == data[i]){
            ++j; ++i;
        }
 
        if(j == M){
        	indices.push(i-j);
            j = lps[j-1];
        }else if (i < N && pattern[j] != data[i]){	// mismatch after j matches
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
	lps[0] = 0;

	var i = 1;
	while(i<M){
		if(pattern[i] == pattern[length]){
			++length;
			lps[i] = length;
			++i;
		}else{
			if(length!=0){
				length = lps[length-1]; 
			}else{
				lps[i] = 0;
				++i;
			}
		}
	}
}


/**
* Naive or simple approach for pattern searching.
**/
function rabinkarp(data, pattern, M, N){
	return [];	
}