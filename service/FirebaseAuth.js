import {React, Component} from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView, Button, Alert} from 'react-native';

import firebase from 'react-native-firebase';
import { StackNavigator } from 'react-navigation';



export default class FirebaseAuth extends Component {



    constructor() {
        super();




    }

    componentDidMount(){
        this.state = {};

    }


     savedSession(){

    }

    checkPersistenceState(){

        return new Promise((res,err)=>{
            firebase.auth().onAuthStateChanged(function(user){
                console.log(user);
                  if (user) {
                     console.log(user);
                    // User is signed in
                    res("user.current.email");
                  } else {
                    // No user is signed in.
                    err();
                  }
                });
        });

    }


    signUp(){
      //   return new Promise((res,err)=>{
      //   firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // // Handle Errors here.
      //         var errorCode = error.code;
      //         var errorMessage = error.message;
      //         // ...
      //         err();
      //
      //       });
      //   res();
      //   }
    }



    loginEmail(email,password){
        let x = "demo@demo.com";
        let y = "demo1234";
        var email = x;
        //this.setState({ email:email});
        //console.log(this.state.email);
        password = y;
        console.log('here');


        //nesting probematic
        return new Promise((res,err)=>{
            // firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
            //   .then(function() {
            // //    Existing and future Auth states are now persisted in the current
                // session only. Closing the window would clear any existing state even
                // if a user forgets to sign out.
                // ...
                // New sign-in will be persisted with session persistence.
                firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password).then(function(user){
                    //if()
                    console.log(user);
                    res();
                }).catch(function(err){err();})
            // }).catch(function(error) {
            //     // Handle Errors here.
            //     var errorCode = error.code;
            //     var errorMessage = error.message;
            //     err();
            //
            //   });

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


    checkLogged(){
        console.log("logged in mate")
    }


    //TODO does it need this?
    // render() {
    //
    // }
}
