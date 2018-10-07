import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity 
} from 'react-native';


export default class Logo extends Component<{}> {

  // home(){
  //   Actions.home();
  // }


  constructor(props) {
    super(props);
    this.state = {
        username:'',
        password:'',
        loginMainCheck: true,
        showMessageCheck:false,
        showMessage:'',
        loginSuccess:false,
    };
    this.loginOperations = this.loginOperations.bind(this);
  }

	render(){
		return(
			<View style={styles.container}>
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Email"
              placeholderTextColor = "white"
              selectionColor="white"
              keyboardType="email-address"
              onSubmitEditing={()=> this.password.focus()}
              />
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = "white"
              ref={(input) => this.password = input}
              />  
          <TouchableOpacity style={styles.button} onPress={() => this.loginOperations} >
             <Text style={styles.buttonText}>{this.props.type}</Text>
          </TouchableOpacity>     
  		</View>
			)
  }
  
  // loginOperations() {
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
  //     Alert.alert('Login Success!')
  //   })
  //    .then(()=>{
  //      this.props.navigation.navigate('Home')
  //     })
  //     // Actions.HomePage();
  //   .done();
  // }

   

  loginOperations() {
    let user = this.state.username, pass=this.state.pass;
    if(user.length==0 || pass.length==0){
        this.setState({showMessage:'Please fill both the fields.', showMessageCheck:true});
    }
    else{
        this.setState({showMessageCheck:false});
    fetch('', {
        method:'POST',
        headers: {
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            'username':user,
            'password':pass,
        }),
    })
    .then(resData => resData.json())
    .then(res => {
        console.warn('Received as '+res);
        this.setState({showMessage:'Succesfully Logged In. Welcome '+res['first_name']+' '+res['second_name'],
            showMessageCheck:true, loginSuccess:true
            });
    })
    .catch(err => {
        this.setState({showMessage:'Logged In Unsuccessful',
        showMessageCheck:true, loginSuccess:false
        });
    })
    .then(() =>{
      this.props.navigation.navigate('Home')
    })
    }
}
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },

  inputBox: {
    width:300,
    backgroundColor:'black',
    borderColor:'black',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'white',
    marginVertical: 10,
    height:35
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
    color:'white',
    textAlign:'center'
  }
  
});