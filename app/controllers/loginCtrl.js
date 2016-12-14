"use strict";

app.controller("loginCtrl", function($scope, authFactory, $window) {

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
        authFactory.loginUser($scope.account)
            .then((user) => {
               $window.location.href = '/';
            });
    };

}); 