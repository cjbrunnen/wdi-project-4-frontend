angular
  .module("sitterApp")
  .controller("mainIndexCtrl", mainIndexCtrl);

  mainIndexCtrl.$inject = ["$rootScope", "CurrentUserService", "$state"];
  function mainIndexCtrl($rootScope, CurrentUserService, $state) {
    const vm = this;

    vm.user = CurrentUserService.getUser();

    vm.logout = () => {
      event.preventDefault();
      CurrentUserService.clearUser();
    };

    $rootScope.$on("loggedIn", () => {
      vm.user = CurrentUserService.getUser();
      $state.go("usersIndex");
    });

    $rootScope.$on("loggedOut", () => {
      vm.user = null;
      $state.go("home");
    });

  }
