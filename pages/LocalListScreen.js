import React from 'react';
import { StyleSheet, Platform,TextInput, Image, Text, View, ScrollView, Button, Alert} from 'react-native';
import {Form,Picker,Container, Header, Content,ListItem,List, Left, Body, Right, Title} from 'native-base';

import { StackNavigator } from 'react-navigation';
import { Greeting } from './Greeting';

import FirebaseAuth from '../service/FirebaseAuth'

export default class LocalListScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            // firebase things?
        };
    }
    onValueChange(value: string) {
    this.setState({
      selected: value
    });
    }

    onAddList(value: string) {
        var list = this.state.list;
    this.setState({
      selected: value
    });
    }

    componentDidMount() {
        // firebase things?
        this.setState({selected:"date"});
        this.setState({list:[]});
    }

    render() {
        const { navigate } = this.props.navigation;
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
                          <Picker.Item label="name" value="key0" />
                          <Picker.Item label="Date" value="key1" />
                          <Picker.Item label="weight" value="key2" />
                          <Picker.Item label="colour" value="key3" />

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
                                       <ListItem>
                                        <TextInput placeholder="new list" onChangeText={this.onAddList.bind(this)}>

                                        </TextInput>
                                       </ListItem>
                             </List>
                           </Content>
                         </Container>
        );
    }
}

const styles = StyleSheet.create({


});
