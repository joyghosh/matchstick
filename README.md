# matchstick
API collection for common pattern  searching algorithms. Following is the list of supported methods.
- Naive or simple pattern search.
- KMP (Knuth Morris Pratt) method.
- Rabin-Karp algorithm.

### Installation

```sh
$ npm i @joyghosh/matchstick
```

### Usage

```sh
var Matchstick = require('matchstick');

# Naive pattern searching.
var naive = new Matchstick("naive");

# Find all matches.
console.log(naive.findAll("This is a test text.", "test"));	# [10]
console.log(naive.findAll("AABAACAADAABAABA", "AABA"));		# [0,9,12]
console.log(naive.findAll("AABAACAADAABAABA", "test"));		# -1 (Returns -1 upon no match.)

# Find first match.
console.log(naive.findFirst("This is a test text.", "test")); # 10
console.log(naive.findFirst("AABAACAADAABAABA", "AABA"));	  # 0
console.log(naive.findFirst("AABAACAADAABAABA", "test"));	  # -1

# Find last match.
console.log(naive.findLast("This is a test text.", "test"));  # 10
console.log(naive.findLast("AABAACAADAABAABA", "AABA"));	  # 12
console.log(naive.findLast("AABAACAADAABAABA", "test"));	  # -1

# For KMP pattern searching.
var kmp = new Matchstick("kmp");

# Find all matches.
console.log(kmp.findAll("This is a test text.", "test"));	# [10]
console.log(kmp.findAll("AABAACAADAABAABA", "AABA"))		# [0,9,12]
console.log(kmp.findAll("AABAACAADAABAABA", "test"));		# -1

...

# For Rabin Karp pattern searching.
var rabinkarp = new Matchstick("rabinkarp");

...

# Find last match.
console.log(rabinkarp.findLast("This is a test text.", "test")); # 10
console.log(rabinkarp.findLast("AABAACAADAABAABA", "AABA"));	 # 12
console.log(rabinkarp.findLast("AABAACAADAABAABA", "test"));	 # -1
```

###	References

* [String searching algorithms](https://en.wikipedia.org/wiki/String_searching_algorithm)
* [Knuth Morris Pratt wiki](https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm)
* [Rabin-Karp wiki](https://en.wikipedia.org/wiki/Rabin%E2%80%93Karp_algorithm)

### License

The MIT License (MIT)

Copyright (c) 2016 Joy Ghosh

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
