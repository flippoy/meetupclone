var app = angular.module("MeetupApp", ["ui.router"])



app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "./views/home.html",
      controller: "homeController"
    })
    .state("users", {
      url: '/users',
      templateUrl: "./views/users.html",
      controller: "userController"
    })
    .state("tickets", {
      url: "/tickets",
      templateUrl: "./views/tickets.html",
      controller: "ticketController"
    })
    .state("artists", {
      url: "/artists",
      templateUrl: "./views/artists.html",
      controller: "artistController"
    })
    .state("shows", {
      url: "/shows",
      templateUrl: "./views/shows.html",
      controller: "showController"
    })
})
