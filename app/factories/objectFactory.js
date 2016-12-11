"use strict";

app.factory("objectFactory", ($http, FBCreds) => {

    //getters and setters done inside a factory 


    let postNewItem = (newTea) => {
        return new Promise((resolve, reject) => {
            $http.post(`${FBCreds.URL}/NewTeas.json`, angular.toJson(newTea))
                .success((obj) => {
                    resolve(obj);

                })
                .error((error) => {
                    reject(error);
                });
        });
        //items.push(newTask);

    };

    return {postNewItem};

});

