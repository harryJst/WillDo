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
            <Text>WillDo</Text>

            <Button

                onPress={() => {
                    Alert.alert('You tapped the button!');
                }}
            title="Press Me"
            />

            <Button

                onPress={() => {
                    //Alert.alert('You tapped the button!');
                    //navigate('LoginGoogle', { name: 'Jane' })
                    //FirebaseAuth.loginGoogle();
                }}
                title="Login google"
            />
            <Button

                onPress={() => {
                    navigate('LoginEmail', { name: 'Jane' })
                }}
            title="Login Email"
            />
            </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({


});
