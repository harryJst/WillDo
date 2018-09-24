import React from 'react';

import { createStackNavigator } from 'react-navigation';



import WelcomeScreen from '../pages/WelcomeScreen';
import LoginEmail from '../pages/LoginEmail';
import SignUp from '../pages/SignUp';





export default createStackNavigator({

  WelcomeScreen: WelcomeScreen,
  LoginEmail: LoginEmail,
  SignUp: SignUp,
},
  {
      initialRouteName: "WelcomeScreen"
  }
);
