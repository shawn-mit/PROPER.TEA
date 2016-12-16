"use strict";
   

  //USERS CAN ADD A QUICK SURVEY FOR  
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
        alert("Your profile has been saved")
    };

});

       

      
