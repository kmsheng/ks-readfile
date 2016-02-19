var readFile = require('../');
var should = require('should');

describe('readFile', function() {

  it('should read file', function(done) {
    readFile('package.json')
      .then(function(buffers) {
        var data = JSON.parse(buffers.toString());
        data.name.should.equal('ks-readfile');
        done();
      })
  });

  it('should pass error to catch block', function(done) {
    readFile('package.json123')
      .catch(function(err) {
        err.should.be.an.instanceOf(Error);
        done();
      });
  });
});
