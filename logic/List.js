import React from 'react';
import { StyleSheet, Platform, Image, Text,TextInput, View, ScrollView, Button, Alert} from 'react-native';


import { StackNavigator } from 'react-navigation';



export default class LoginEmail extends React.Component {
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
      var email = "";
      var password = "";

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
