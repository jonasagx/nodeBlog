// Fake database
var data = {
  "posts": [
    {
      "title": "Lorem ipsum",
      "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "tag": "tag1"
    },
    {
      "title": "Sed egestas",
      "text": "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus.",
      "tag": "tag2"
    },
    {
      "title": "Vivamus fermentum",
      "text": "Vivamus fermentum semper porta. Nunc diam velit, adipiscing ut tristique vitae, sagittis vel odio. Maecenas convallis ullamcorper ultricies. Curabitur ornare, ligula semper consectetur sagittis, nisi diam iaculis velit, id fringilla sem nunc vel mi. Nam dictum, odio nec pretium volutpat, arcu ante placerat erat, non tristique elit urna et turpis. Quisque mi metus, ornare sit amet fermentum et, tincidunt et orci. Fusce eget orci a orci congue vestibulum. Ut dolor diam, elementum et vestibulum eu, porttitor vel elit. Curabitur venenatis pulvinar tellus gravida ornare. Sed et erat faucibus nunc euismod ultricies ut id justo. Nullam cursus suscipit nisi, et ultrices justo sodales nec. Fusce venenatis facilisis lectus ac semper. Aliquam at massa ipsum. Quisque bibendum purus convallis nulla ultrices ultricies. Nullam aliquam, mi eu aliquam tincidunt, purus velit laoreet tortor, viverra pretium nisi quam vitae mi. Fusce vel volutpat elit. Nam sagittis nisi dui.",
      "tag": "tag2"
    }
  ]
};

// GET

exports.tags = function(req, res){
  var tags = {};

  data.posts.forEach(function(post, i){
    tags[post.tag] = i;
  });

  console.log(Object.keys(tags));

  res.send({
    tags: Object.keys(tags)
  });
};

exports.sameTag = function(req, res){
  var posts = [];
  var tag = req.params.tag;
  
  console.log(req.params);

  data.posts.forEach(function (post, i) {
    if(post.tag === tag){
      posts.push({
        id: i,
        title: post.title,
        text: post.text.substr(0, 50) + '...'
      });
    }
  });

  res.send({
    posts: posts
  });
};

exports.posts = function (req, res) {
  var posts = [];
  data.posts.forEach(function (post, i) {
    //Check null posts and limit number of listed posts
    if(post.text === undefined){

    } else if(i <= 10) {
      posts.push({
        id: i,
        title: post.title,
        text: post.text.substr(0, 50) + '...'
      });
    }
  });

  res.send({
    posts: posts
  });
};

exports.post = function (req, res) {
  var id = req.params.id;

  if (id >= 0 && id < data.posts.length) {
    res.send({
      post: data.posts[id]
    });
  } else {
    res.send(false);
  }
};

// POST

exports.addPost = function (req, res) {
  data.posts.push(req.body);
  console.log(req.body);
  res.send(req.body);
};

// PUT

exports.editPost = function (req, res) {
  var id = req.params.id;

  if (id >= 0 && id < data.posts.length) {
    data.posts[id] = req.body;
    res.send(true);
  } else {
    res.send(false);
  }
};

// DELETE

exports.deletePost = function (req, res) {
  var id = req.params.id;

  if (id >= 0 && id < data.posts.length) {
    data.posts.splice(id, 1);
    res.send(true);
  } else {
    res.send(false);
  }
};