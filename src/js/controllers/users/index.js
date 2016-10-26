angular
  .module("sitterApp")
  .controller("usersIndexCtrl", usersIndexCtrl);

usersIndexCtrl.$inject = ["User"];
function usersIndexCtrl(User){
  const vm   = this;
  User.query(data => {
    console.log(data);
    vm.users = data;
  });
}
