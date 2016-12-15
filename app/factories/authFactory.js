"use strict";

	
app.factory("authFactory", function() {

    let currentUser = null;

let createUser = function(userObj) {
    return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password);

};

let logInUser = function(userObj) {

    return firebase.auth().signInWithEmailAndPassword(userObj.email, userObj.password);
};


let logOutUser = function() {
    return firebase.auth().signOut();
    /*.then(function(){
            console.log('Signed Out');
        }, function (error) {
            console.log('Sign Out Error', error);
        
        });*/
};

let isAuthenticated = function() {
    return new Promise((resolve, reject) => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                currentUser = user.uid;
               // console.log("");
                resolve(true);
            } else {
                resolve(false);
            }
        });
    });

};

let getUser = function() {

    return currentUser;
};

return {
    createUser,
    logInUser,
    logOutUser,
    isAuthenticated
};

});
