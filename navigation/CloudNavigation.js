import React from 'react';

import { createStackNavigator } from 'react-navigation';


import CloudListScreen from '../pages/CloudListScreen';

export default createStackNavigator({

    CloudListScreen: CloudListScreen
    },
    {
        initialRouteName: "LocalListScreen"
    }
    );
