angular
  .module("sitterApp")
  .controller("PostsIndexCtrl", PostsIndexCtrl);

PostsIndexCtrl.$inject = ["Post"];
function PostsIndexCtrl(Post){
  const vm   = this;
  Post.query(data => {
    vm.posts = data;
  });
}
