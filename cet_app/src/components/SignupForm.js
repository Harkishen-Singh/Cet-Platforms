import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity 
} from 'react-native';


export default class Form extends Component<{}> {
    
	render(){
		return(
			<View style={styles.container}>
            <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Name"
              placeholderTextColor = "white"
              selectionColor="white"
              onSubmitEditing={()=> this.email.focus()}
              />
            <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Email"
              placeholderTextColor = "white"
              selectionColor="white"
              keyboardType="email-address"
              ref={(input) => this.email = input}
              onSubmitEditing={()=> this.password.focus()}
              />
            <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Password"
              placeholderTextColor = "white"
              selectionColor="white"
              secureTextEntry={true}
              ref={(input) => this.password = input}
              autoCorrect={false}
              onSubmitEditing={()=> this.confirmpassword.focus()}
              />
            <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Confirm Password"
              secureTextEntry={true}
              placeholderTextColor = "white"
              autoCorrect={false}
              ref={(input) => this.confirmpassword = input}
              />  
            <TouchableOpacity style={styles.button} onPress={this.props.navigation.navigate('Home')}>
             <Text style={styles.buttonText}>{this.props.type}</Text>
            </TouchableOpacity>     
  		</View>
			)
  }
}
  
  // userSignup() {
  //   if (!this.state.username || !this.state.password) return;
    
  //   fetch('', {
  //     method: 'POST',
  //     headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       username: this.state.username,
  //       password: this.state.password,
  //     })
  //   })
  //   .then((response) => response.json())
  //   .then((responseData) => {
  //     this.saveItem('id_token', responseData.id_token),
  //     Alert.alert( 'Signup Success!'),
  //     Actions.HomePage();
  //   })
  //   .done();
  // }


const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },

  inputBox: {
    width:300,
    height:35,
    backgroundColor:'black',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'white',
    marginVertical: 10
  },
  button: {
    width:300,
    backgroundColor:'#1c313a',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'black',
    textAlign:'center'
  }
  
});
