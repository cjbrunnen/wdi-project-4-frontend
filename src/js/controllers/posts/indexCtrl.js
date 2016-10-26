angular
.module("sitterApp")
.controller("PostsIndexCtrl", PostsIndexCtrl);

PostsIndexCtrl.$inject = ["Post", "NgMap"];
function PostsIndexCtrl(Post){
  const vm   = this;
  Post.query(data => {
    vm.posts = data;
  });

  NgMap.getMap().then(function(map) {
    console.log(map.getCenter());
    console.log('markers', map.markers);
    console.log('shapes', map.shapes);
  });
}
