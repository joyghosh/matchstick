/**
* @author: Joy Ghosh
* @date: November 22, 2016
**/
function search(data, pattern){
	var text = data.split("");
	var pat = pattern.split("");

	return naive(text, pattern);
}

/**
* return index of first match.
**/
function searchFirst(data, pattern){
	var text = data.split("");
	var patt = pattern.split("");

	return naive(text, patt)[0];
}

/**
* Naive or simple approach for pattern searching.
**/
function naive(data, pattern){
		int M = data.length;
		int N = pattern.length;
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