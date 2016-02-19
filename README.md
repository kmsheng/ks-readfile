[![Build Status](https://travis-ci.org/kmsheng/ks-readfile.svg?branch=master)](https://travis-ci.org/kmsheng/ks-readfile) 

# ks-readfile
readfile with read stream

```js
var readfile = require('ks-readfile');
readfile('package.json')
 .then(function(buffers) {
    // success
 })
 .catch(function(err) {
    // fail
 });
```
