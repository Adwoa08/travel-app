var app = angular.module("personalSite", ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {

    $routeProvider

        .when("/home", {
            templateUrl: "home/home.html",
            controller: "homeCtrl"
        })

        .when("/explore", {
            templateUrl: "explore/explore.html",
            controller: "exploreCtrl"
        })
        .when("/contactUs", {
            templateUrl: "contactUs/contact.html",
            controller: "contactCtrl"
        })

        .otherwise({
            redirectTo: "/home"
        })


}])
