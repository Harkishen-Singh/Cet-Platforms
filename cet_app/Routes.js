import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Login from './src/pages/Login';
import Signup from './src/pages/Signup';
import Home from './src/pages/Home';

const AppStack = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
          title: 'Login',
          header: null
        },
    },
    Signup : {
        screen: Signup,
        navigationOptions:{
            header:null,
            title:'SignUp'
        }
    },
    Home : {
        screen: Home,
        navigationOptions:{
            header:null,
            title:'Home'
        }
    },
},
{
    initialRouteName:'Login'
}
);

export default AppStack;

