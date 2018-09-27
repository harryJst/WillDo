import React from 'react';
import { FlatList, StatusBar, StyleSheet, Platform, Image, Text, View, ScrollView, Button, Alert} from 'react-native';
import {Form,Picker,Container, Header, Content,ListItem,List, Left, Body, Right, Title} from 'native-base';

import NavigationBar from 'react-native-navbar';
import FireStoreProvider from '../service/FireStoreProvider'

export default class CloudListScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            // firebase things?
        };
        // var x =
    }

    componentDidMount() {
        // firebase things?
        this.setState({list:["a","b","c"]})
        //FireStoreProvider
        this.setState({
          selected: "Date"
        });

    }

    onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }

    render() {
        return (


            <Container>
            <Header>
            <Left/>
            <Body>
            <Form>
            <Picker
              note
              mode="dropdown"
              style={{ width: 120 }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Date" value="key0" />
              <Picker.Item label="weight" value="key1" />
              <Picker.Item label="colour" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />

            </Picker>
          </Form>

            </Body>

            <Right/>
            </Header>

               <Content>


               <List dataArray={this.state.list}
                           renderRow={(item) =>
                             <ListItem>
                               <Text>{item}</Text>
                             </ListItem>
                           }>
                 </List>
               </Content>
             </Container>
        );
    }
}

const styles = StyleSheet.create({


});
