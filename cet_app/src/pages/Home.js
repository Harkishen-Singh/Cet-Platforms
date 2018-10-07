import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity
} from 'react-native';

import {Actions} from 'react-native-router-flux';

export default class Home extends Component {

      render() {
        const {navigate} = this.props.navigation;
          return(
              <View >
                  <StatusBar
                    backgroundColor="blue"
                    barStyle="light-content"
                    />
                  Hello
              </View>	
              )
      };
}