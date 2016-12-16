"use strict";

app.controller("teaCtrl", function($scope, objectFactory) {
   
    $scope.getTeas = function() {
   

        objectFactory.getTeas().then((teaList) => {
           	//console.log(teaList);
            $scope.teaList = teaList;
            $scope.$apply();
        });
    };
}); 


