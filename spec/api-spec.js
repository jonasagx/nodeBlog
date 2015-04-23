var api = require('../routes/api'),
	request = require('dupertest'); 

  // create mock entity and other test setup
  describe('api.tags', function () {
    var postTag = { 
 		posts: [ Object({ 
 			id: 0, 
 			title: 'Lorem ipsum', 
 			text: 'Lorem ipsum dolor sit amet, consectetur adipisicin...' 
 		}) ] }

    it('returns the list of tags as JSON', function (done) {
      request(api.tags)
      	.params({})
        .expect(Object({ tags: [ 'tag1', 'tag2' ] }), done);
    });

    it("returns the article for a given tag", function(done){
    	request(api.sameTag)
    	  .params({tag: 'tag1'})
    	  .expect(postTag, done);
    });
  });

  describe('api.post', function(){
  	it('checks if the response is an Object', function(done){
  		request(api.post)
  			.params({id: 1})
  			.end(function(res) {
  			          expect(res).toEqual(jasmine.any(Object));
  			          done();
  			        });
  	});

  	it('deletes a post', function(done){
  		request(api.deletePost)
  			.params({id: 1})
  			.end(function(res) {
  			          expect(res).toEqual(jasmine.any(Boolean));
  			          done();
  			        });
  	});

  	it('requests a list of posts', function(done){
  		request(api.posts)
  			.params()
  			.end(function(res) { 
  			          expect(res.posts.length).toBe(2);
  			          done();
  			        });
  	});
  });