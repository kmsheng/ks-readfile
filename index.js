var fs = require('fs');
var BufferHelper = require('bufferhelper');

module.exports = function readFile(path) {
  return new Promise(function(resolve, reject) {

    var bufferHelper = new BufferHelper();

    fs.createReadStream(path)
      .on('data', function(chunk) {
        bufferHelper.concat(chunk);
      })
      .on('error', function(err) {
        reject(err);
      })
      .on('end', function() {
        resolve(bufferHelper.toBuffer());
      });
  });
};
