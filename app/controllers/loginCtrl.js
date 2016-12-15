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
            console.log("login with", $scope.account);
        authFactory.logInUser($scope.account)
            .then((user) => {
               $window.location.href = '/';
            });
    };

});