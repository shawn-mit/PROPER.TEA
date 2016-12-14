"use strict" ; 

let app = angular.module("ProperTea", ["ngRoute"]);

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


app.config(function($routeProvider) {
    $routeProvider.when('/', {
            templateUrl: 'partials/browseView.html',
            controller: 'teaCtrl'
           //not for mvp --> resolve: {isAuth}
        })
      });
        /*.when('/items/new', {
            templateUrl: 'partials/item-form.html',
            controller: 'objectNewCtrl'
        })
        .when('/items/:itemId', {
            templateUrl: 'partials/item-details.html',
            controller: 'itemViewCtrl'
        })
        .when('/login', {
            templateUrl: 'partials/loginView.html',
            controller: "loginCtrl"
        })
        .otherwise('/items/list');
});



app.run(($location, FBCreds) => {

    let creds = FBCreds;

    let authConfig = {

        apiKey: creds.apiKey,
        authDomain: creds.authDomain
    };

    firebase.initializeApp(authConfig);

});

*/