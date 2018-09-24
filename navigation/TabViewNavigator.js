import React from 'react';



import LocalListScreen from '../pages/LocalListScreen';
import CloudListScreen from '../pages/CloudListScreen';

// import LocalNavigation from './LocalNavigation';
// import CloudNavigation from './CloudNavigation';


//var Local = require('./pages/Local');


import { createBottomTabNavigator } from 'react-navigation';

//import NavBar, { NavGroup, NavButton, NavButtonText, NavTitle } from 'react-native-nav'


export default createBottomTabNavigator({

  LocalListScreen:{
      screen:LocalListScreen,
      navigationBarStyle : {navBarHidden: false },
},
  CloudListScreen: CloudListScreen,
},
  {
      initialRouteName: "LocalListScreen"
  }
);
// export default createBottomTabNavigator({
//
//   LocalListScreen: {
//       screen: LocalNavigation,
//       navigationOptions: {
//         headerTitle: "Tab 1 Details"
//       }
//     },
//
//   CloudListScreen: CloudNavigation
// },
//   {
//       initialRouteName: "LocalListScreen"
//   }
// );
