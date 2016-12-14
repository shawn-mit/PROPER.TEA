"use strict";
   
app.controller("objectNewCtrl", function($scope, objectFactory) {
    $scope.newTea = {
        Brands: "",
        Origin: "",
        Price: "",
        Tea: "",
        TeaWords: ""
    };

    $scope.addNewItem = function () {
       // console.log($scope.newTea);
    objectFactory.postNewItem($scope.newTea);
        
    };

});

       

        //console.log("add a new item", $scope.newTask);
       //$scope.$apply();
            
