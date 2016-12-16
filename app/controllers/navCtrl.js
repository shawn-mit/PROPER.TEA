"use strict";



app.controller('navCtrl', function($scope) {
    
    //$scope.filterTeas = function() {};
    

    //console.log("searching for..", $scope.searchText.search);
    //$location.path('/browsetea?s=' + $scope.searchText.search);
    //$location.replace();//$scope.$apply();

    //console.log($location);
    //};

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