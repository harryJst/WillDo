import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView, Button, Alert} from 'react-native';
import { Header, Left, Body, Right, Title} from 'native-base';

import { StackNavigator } from 'react-navigation';

import FirebaseAuth from '../service/FirebaseAuth'

export default class Home extends React.Component {
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
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
            <View>
            <Header>
              <Left/>
              <Body>
                <Title>CloudLists</Title>
              </Body>
              <Right/>
            </Header>
            <Text>Local</Text>

            </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({


});
