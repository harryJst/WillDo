import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView } from 'react-native';


import LocalListScreen from '../pages/LocalListScreen';

//var Local = require('./pages/Local');


import { createBottomTabNavigator } from 'react-navigation';

//import NavBar, { NavGroup, NavButton, NavButtonText, NavTitle } from 'react-native-nav'


export default createBottomTabNavigator({

    LocalListScreen: LocalListScreen,

    },
    {
        initialRouteName: "LocalListScreen"
    }
    );
