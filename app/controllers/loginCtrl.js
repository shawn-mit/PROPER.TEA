"use strict";

app.controller("loginCtrl", function($scope,  authFactory, $window) {

    $scope.account = {
        email: null,
        password: null

    };

    $scope.register = () => {

        authFactory.createUser($scope.account)
            .then((userData) => {
                $scope.login();

            });
        
    };

    $scope.login = () => {
            //console.log("login with", $scope.account);
        authFactory.logInUser($scope.account)
            .then((user) => {
               $window.location.href = '/dashboard';
            });
    };

    $scope.logout = () => {
            console.log("logged out");
        authFactory.logOutUser($scope.account)
            .then((user) => {
                $window.location.href= '#/';
                console.log("logged out");
            });
    };

});

