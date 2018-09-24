import {React, Component} from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView, Button, Alert} from 'react-native';

import firebase from 'react-native-firebase';
import { StackNavigator } from 'react-navigation';



export default class FirebaseAuth extends Component {



    constructor() {
        super();
        this.state = {
            // firebase things?
        };




    }



    createUser(){
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
        });
    }

    loginEmail = ({email,password}) => {
        let x = "demo@demo.com";
        let y = "demo1234";
        email = x;
        password = y;
        console.log('here');

        return new Promise((res,err)=>{
            firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password).then((user) => {
                //if()
                console.log(user);
                res();
            }).catch(function(error) {
                  // Handle Errors here.
                  var errorCode = error.code;
                  var errorMessage = error.message;
                  // ...
                  console.log(errorCode)
                  err();
            });
        });
  }

    // loginEmail(email,password){
    //
    // }
    logout(){
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
        }).catch(function(error) {
            // An error happened.
        });
}

    loginGoogle(){

        // var provider = new firebase.auth.GoogleAuthProvider();
        // firebase.auth().signInWithPopup(provider).then(function(result) {
        //       // This gives you a Google Access Token. You can use it to access the Google API.
        //       var token = result.credential.accessToken;
        //       // The signed-in user info.
        //       var user = result.user;
        //       // ...
        //   }).catch(function(error) {
        //       // Handle Errors here.
        //           var errorCode = error.code;
        //           var errorMessage = error.message;
        //           // The email of the user's account used.
        //           var email = error.email;
        //           // The firebase.auth.AuthCredential type that was used.
        //           var credential = error.credential;
        //       // ...
        //   });
    }

    checkLogged(){
        console.log("logged in mate")
    }


    //TODO does it need this?
    // render() {
    //
    // }
}
