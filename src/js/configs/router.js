angular
  .module("sitterApp")
  .config(Router);

Router.$inject = ["$stateProvider", "$locationProvider", "$urlRouterProvider"];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state("home", {
    url: "/",
    templateUrl: "/js/views/home.html",
  })
  .state("register", {
    url: "/register",
    templateUrl: "/js/views/register.html",
    controller: "registerCtrl as register",
  })
  .state("login", {
    url: "/login",
    templateUrl: "/js/views/login.html",
    controller: "loginCtrl as login",
  })
  .state("usersIndex", {
    url: "/users",
    templateUrl:  "/js/views/users/index.html",
    controller:   "usersIndexCtrl as usersIndex",
  })
  .state("mainIndex", {
    url: "/index",
    templateUrl: "/js/views/mainIndex.html",
    controller:  "mainIndexCtrl as mainIndex"
  });
// .state("usersNew", {
//     url: "/users/new",
//     templateUrl: "/js/views/users/new.html",
//     controller: "UsersNewCtrl as usersNew"
// }
// .state("postsNew", {
//     url: "/posts/new",
//     templateUrl: "/js/views/posts/new.html",
//     controller: "PostsNewCtrl as postsNew"
// }
// .state("usersEdit", {
//     url: "/users/:id/edit",
//     templateUrl: "/js/views/users/edit.html",
//     controller: "UsersEditCtrl as usersEdit"
//   })
//   .state("postsEdit", {
//       url: "/posts/:id/edit",
//       templateUrl: "/js/views/posts/edit.html",
//       controller: "PostsEditCtrl as postsEdit"
//     })
  // .state('usersShow', {
  //   url: '/users/:id',
  //   templateUrl: '/js/views/users/show.html',
  //   controller: 'UsersShowCtrl as users'
  // })

  $urlRouterProvider.otherwise("/");
}
