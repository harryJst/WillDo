import React from 'react';
import { FlatList,StyleSheet, Platform, Image, Text, List,ListView, View, Button, Alert} from 'react-native';

import firebase from 'react-native-firebase';

import { StackNavigator } from 'react-navigation';



export default class FireStoreProvider extends React.Component {


    constructor() {
        super();
        this.state = {
            // firebase things?
        };

        console.log();

    }

    componentDidMount(){
        //HJ
        //last sort or default
        //TODO remove hard code for email ,address
        //default

        console.log("FireStoreProvider component mounted");
        //
        var unsub = firebase.firestore().collection("users")
        .doc("demo@demo.com")
        .collection("lists");

        // unsub.get().then(function(doc) {
        //     console.log("Document data:");
        //
        //     if (doc.exists) {
        //         console.log("Document data:", doc.data());
        //     } else {
        //         // doc.data() will be undefined in this case
        //         console.log("No such document!");
        //     }
        // }).catch(function(error) {
        //     console.log("Error getting document:", error);
        // });

        unsub.onSnapshot((data)=>{
            this._onSubscriptionChange(data);
        },(error)=>{
            console.log("error");
        });


        //TODO recheck changes
    }

    componentWillUnmount() {
        this.unsub();
    }


    _onSubscriptionChange = subscribedValue => {
        const dispatches = []
        subscribedValue.forEach(document => {
          dispatches.push(document.data())
      });

        this.setState({ subscribedValue: dispatches })
        console.log("dispatches");
        console.log(dispatches);

        console.log(this.state.subscribedValue);
    };

  //   onCollectionUpdate = querySnapshot => {
  //
  // }

  gotObs(){
      return new Observable(function (observer) {
        
  });
  }



    updateListWithSort(toDoList, descendingSort){
        //un subscribe old list
        //query new list
        //update _onSubscriptionChange (same as did mount)
        //re-render?
        this.items = firebase.firestore().collection("users").doc(Fire)
    }

    render(){
        return(
                <FlatList
                    data = {this.state.subscribedValue}
                    renderItem={({item}) => (
                     <Text>{item.ListName}</Text>

                 )}
                />

            //<ListView/>

        );
    }

}
