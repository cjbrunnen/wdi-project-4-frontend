angular
  .module("sitterApp")
  .controller("PostsNewCtrl", PostsNewCtrl);

PostsNewCtrl.$inject = ["Post", "$state"];
function PostsNewCtrl(Post, $state){
  const vm   = this;
  vm.submit = () => {
    Post
      .save({ post: vm.post })
      .$promise
      .then(data => {
        console.log(data);
        $state.go("postsIndex");
      });
  };
}
