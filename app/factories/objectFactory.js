"use strict";

// Posting NewTeas.json for FB to issue key for JSON objects. 
//getters and setters done inside a factory 

app.factory("objectFactory", ($http, FBCreds) => {
    let postNewItem = (newUser) => {
        return new Promise((resolve, reject) => {
            $http.post(`${FBCreds.URL}/NewUser.json`, angular.toJson(newUser))
                .success((obj) => {
                    resolve(obj);

                })
                .error((error) => {
                    reject(error);
                });
        });

        //items.push(newTask);

    };

    //GRAB TEAS IN ARRAY //

    let getTeas = () => {


        let results = [];
        //empty array once I grab json objects from FB then push back into results
        //let path = 'TEAS.json';
        //let url = `${FBCreds.URL}/${path}`;         

        return new Promise((resolve, reject) => {
            $http.get(`${FBCreds.URL}/NewTeas.json`).then(function(response) {
                let teaListJson = response.data;

                let itemCollection = teaListJson;

                Object.keys(itemCollection).forEach((key) => {
                    // console.log(key);


                    results.push(itemCollection[key]);

                });

                resolve(results);
            });
            /*.error( (error) => {
                   reject(error)
             });
            */
        });
    };


    /*
    let getSingleTeaId = (itemId) => {
        return new Promise((resolve, reject) => {
            $http.get(`${FBCreds.URL}/NewTeas/${itemId}.json`)
                .success((itemObject) => {
                    resolve(itemObject);
                })
                .error((error) => {
                    reject(error);
                });
        });
    };
    */

    return {
        postNewItem,
        getTeas
        //getSingleTeaId
    };

});