"use strict";



app.controller('navCtrl', function($scope) {

    $scope.navItems = [{
        name: "Login",
        url: '#/login'
    }, {
        name: "dashboard",
        url: '#/dashboard'
    }, {
        name: "browse.tea",
        url: '#/browsetea'

    }, {
        name: "proper.tea",
        url: '#/propertea'
    }, {
        name: "logout",
        url: '#/logout'
    }];
});
