angular
.module("sitterApp")
.controller("PostsIndexCtrl", PostsIndexCtrl);

PostsIndexCtrl.$inject = ["Post", "NgMap", "$scope"];
function PostsIndexCtrl(Post, NgMap, $scope){
  const vm   = this;
  Post.query(data => {
    vm.posts = data;
  });

  NgMap.getMap().then(function(map) {});

  vm.showPost = function(e, post) {
    vm.post = post;
    $scope.map.showInfoWindow("myInfoWindow", this);
  };
}
