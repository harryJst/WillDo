import React from 'react';
import { createStackNavigator } from 'react-navigation';


import LoginScreenNavigator from './navigation/LoginScreenNavigator';
import TabViewNavigator from './navigation/TabViewNavigator'

//// TODO: make modal and have two sub navigation controllers


export default createStackNavigator({

  Main: LoginScreenNavigator,
  TabView : TabViewNavigator,

},
  {
      mode: 'modal',
      headerMode: 'none',
      //initialRouteName: "Main"
  }
);
