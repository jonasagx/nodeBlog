var api = require('../routes/api');
var request = require('dupertest') 
  // create mock entity and other test setup here 
  var post = {
  	title: "Title",
    tag: "123",
    text: 'Cool Entity'
  };
 
  describe('api.posts', function () {
    it('should return the list of posts as JSON', function (done) {
      request(entities.show)
        .params({})
        .expect(202, done);
    });
  });