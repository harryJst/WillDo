import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView, Button, Alert} from 'react-native';

import { StackNavigator } from 'react-navigation';

import FirebaseAuth from '../service/FirebaseAuth'

export default class WelcomeScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            // firebase things?
        };

        // firebase.auth().onAuthStateChanged(function (user) {
        //   // handle it
        //     if(user){
        //         console.log("user has logged inspect");
        //         navigate('Home');
        //
        //     }
        // });
    }

    componentDidMount() {
        // firebase things?
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
            <View >
            <Text style={styles.titleText}>WillDo</Text>





            <Button

                onPress={() => {
                    navigate('LoginEmail', { name: 'Jane' })
                }}
            title="Login Email"
            />

            <Button

                onPress={() => {
                    navigate('SignUp');

                }}
            title="signUp with email"
            />
            </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({

    titleText: {
    fontSize: 70,
    fontWeight: 'bold',
    fontFamily: 'Cochin',
    textAlign: 'center'
  }


});
