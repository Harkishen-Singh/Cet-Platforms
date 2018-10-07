import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/SignupForm';


export default class Signup extends Component<{}> {

	render() {
    const {navigate} = this.props.navigation;
		return(
			<View style={styles.container}>
				<Logo/>
				<Form type="Signup"/>
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Already have an account?</Text>
					<TouchableOpacity onPress={() => navigate('Login')}><Text style={styles.signupButton}> Sign in</Text></TouchableOpacity>
				</View>
			</View>	
			)
  }
  

        
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'white',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText: {
  	color:'black',
  	fontSize:16
  },
  signupButton: {
  	color:'blue',
  	fontSize:16,
  	fontWeight:'500'
  }
});
