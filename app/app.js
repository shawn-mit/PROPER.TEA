
"use strict" ; 

let app = angular.module("ProperTea", ["ngRoute"]);



app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "loginView.html",
        controller: "loginCtrl"
    })
    .when("/#dashboard", {
        templateUrl : "userRegistration.html",
        controller: "objectNewCtrl"
    })
    .when("/browsetea", {
        templateUrl : "browseView.html",
                controller: "teaCtrl"

    })
    .when("/propertea", {
        templateUrl : "properTeaView.html",
                controller: "teaCtrl"

    })
    .otherwise("/");
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

let isAuth = (authFactory) => new Promise((resolve, reject) => {

    authFactory.isAuthenticated()
        .then((userExists) => {
            if (userExists) {
                resolve();
            } else {
                reject();
            }
        });
});

*/
