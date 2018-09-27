import React from 'react';
import { StyleSheet, Platform, Image, TextInput, Text, View, ScrollView, Button, Alert} from 'react-native';

import { StackNavigator } from 'react-navigation';


export default class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      // firebase things?
    };
  }



  componentDidMount() {
    // firebase things?
  }

  render() {


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
              onChangeText={(text) => this.setState({password})}
              />
              <Button

                  onPress={() => {
                      console.log("cunt");

                      this.fireAuth.signUp(email,password).then(
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
