import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Image, ImageBackground, Container } from 'react-native';
//import {Home} from './App/views/Home.js'
//import { Actions } from 'react-native-router-flux';


export class Regform extends Component {
  render(){
    const goTologin = () => {
      Actions.about()
   }
    return (
      <View style={styles.regform}>
        
          <Text style={styles.header}>Registration</Text>
          <TextInput style={styles.textInput} placeholder="Name" placeholderTextColor="#fff"/>
          <TextInput style={styles.textInput} placeholder="Email" placeholderTextColor="#fff"/>
          <TextInput secureTextEntry={true} style={styles.textInput} placeholder="Password" placeholderTextColor="#fff" />
          <TextInput secureTextEntry={true} style={styles.textInput} placeholder="Confirm password" placeholderTextColor="#fff"/>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.btntext}>Sign Up</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  regform: {
    marginTop: 150,
    alignSelf: 'stretch',
    alignItems: 'center',
    paddingLeft:60,
    paddingRight:60
  },
  header: {
      fontSize: 24,
      color: '#55BF98',
      fontWeight: 'bold',
      paddingBottom: 10,
      marginBottom: 40,
      borderBottomColor: '#55BF98',
      borderBottomWidth: 1,
  },
  textInput: {
      alignSelf: 'stretch',
      fontSize: 20,
      fontWeight: 'bold',
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
    marginTop: 30,
    
  },
  btntext:{
    color: '#fff',
    fontWeight: 'bold'
  }

});
