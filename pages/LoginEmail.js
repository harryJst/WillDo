import React from 'react';
import { StyleSheet, Platform, Image, Text,TextInput, View, ScrollView, Button, Alert} from 'react-native';


import { StackNavigator } from 'react-navigation';
import FirebaseAuth from '../service/FirebaseAuth'



export default class LoginEmail extends React.Component {

  constructor() {
    super();
    this.state = {
      // firebase things?
    };
  }

  componentDidMount() {
    // firebase things?
    this.fireAuth = new FirebaseAuth();
    console.log("checking");

    // this.fireAuth.checkPersistenceState().then(
    //     () => {
    //         console.log("Initialized user details");
    //         this.props.navigation.navigate("TabView");
    //     },() => {
    //         console.log(err);
    //     });

  }

  render() {
      var email = "demo@demo.com";
      var password = "demo1234";

      const { navigate } = this.props.navigation;

    return (
      <ScrollView>
        <View >
        <TextInput
          style={{height: 40}}
          placeholder="Email"
          onChangeText={(text) => this.setState({email})}
          />
          <TextInput
            style={{height: 40}}
            placeholder="Password"
            onChangeText={(text) => this.setState({email})}
            />
            <Button

                onPress={() => {
                    console.log("cunt");

                    this.fireAuth.loginEmail(email,password).then(
                        () => {
                            console.log("Initialized user details");
                            navigate("TabView");
                        },
                        () => {
                            console.log(err);
                        });
                }}
                title="Login"
            />

            <Button

                onPress={() => {

                }}
                title="Forgot Password"
            />

        </View>
      </ScrollView>
    );
  }
}
