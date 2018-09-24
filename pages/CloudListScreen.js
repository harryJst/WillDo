import React from 'react';
import { StatusBar, StyleSheet, Platform, Image, Text, View, ScrollView, Button, Alert} from 'react-native';
import { Header, Left, Body, Right, Title} from 'native-base';

import NavigationBar from 'react-native-navbar';

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            // firebase things?
        };
        // var x =
    }

    componentDidMount() {
        // firebase things?
    }

    render() {
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
            <Text>Cloud</Text>

            </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({


});
