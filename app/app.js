"use strict";

let app = angular.module("ProperTea", ["ngRoute"]);


let isAuth = (authFactory) => new Promise((resolve, reject) => {

    authFactory.isAuthenticated()
        .then((userExists) => {
            if (userExists) {
                resolve();
                $window.alert("Welcome" + $scope.account);
            } else {
                reject(); //redirect to landing page
                $window.alert("Please login to access");
            }
        });
});

app.config(function($routeProvider, $locationProvider) {
    $routeProvider.when("/", {
            templateUrl: "partials/landingPage.html"
        }).when("/login", {
            templateUrl: "partials/loginView.html",
            controller: "loginCtrl"
        })
        .when("/dashboard", {
            templateUrl: "partials/userRegistration.html",
            controller: "objectNewCtrl",
            resolve: {
                isAuth
            }
        })
        .when("/browsetea", {
            templateUrl: "partials/browseView.html",
            controller: "teaCtrl"
        })
        .when("/propertea", {
            templateUrl: "partials/properTeaView.html",
            controller: "teaCtrl"
        })
        .when ("/logout", {
            templateUrl: "partials/logoutView.html"
        })
        .otherwise("/");

    $locationProvider.html5Mode(true);
});

// HAVE THE APPLICATION TELL FIREBASE  WE ARE ABOUT TO WORK TOGETHER //

app.run(($location, FBCreds) => {

    let creds = FBCreds;

    let authConfig = {

        apiKey: creds.apiKey,
        authDomain: creds.authDomain
    };

    firebase.initializeApp(authConfig);

});

/*
 
 */