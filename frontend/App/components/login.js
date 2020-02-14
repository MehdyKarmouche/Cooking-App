import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Image } from 'react-native';
//import {Home} from './App/views/Home.js'



export class Loginform extends Component {
  
  render(){
    const goToregform = () => {
      Actions.about()
   }
    return (
      <View style={styles.loginform}>
          <Text style={styles.header}>Login</Text>
          <TextInput style={styles.textInput} placeholder="Email" placeholderTextColor="white"/>
          <TextInput secureTextEntry={true} style={styles.textInput} placeholder="Password" placeholderTextColor="white"/>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.btntext}>Login</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginform: {
    marginTop: 150,
    alignSelf: 'stretch',
    alignItems: 'center',
    paddingLeft:60,
    paddingRight:60
    
  },
  header: {
      fontSize: 35,
      fontWeight: 'bold',
      color: '#55BF98',
      paddingBottom: 10,
      marginBottom: 40,
      borderBottomColor: '#55BF98',
      borderBottomWidth: 1,
  },
  textInput: {
      alignSelf: 'stretch',
      fontSize: 20,
      height: '40',
      marginBottom: 30,
      color: 'black',
      borderBottomColor: '#55BF98',
      borderBottomWidth: 1
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#55BF98',
    marginTop: 30
  },
  btntext:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  }

});
