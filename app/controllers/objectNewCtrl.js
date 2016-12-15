"use strict";
   
app.controller("objectNewCtrl", function($scope, objectFactory) {
    $scope.newUser = {
        Mood: "",
        FavoriteTea: "",
        FavoriteBrand: "",
        PriceRange: ""
    };

    $scope.addNewUser = function () {
       // console.log($scope.newTea);
    objectFactory.postNewItem($scope.newUser);
        
    };

});

       

        //console.log("add a new item", $scope.newTask);
       //$scope.$apply();
            
