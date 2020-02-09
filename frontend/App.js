import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
//import {Home} from './App/views/Home.js'
import { LinearGradient } from 'expo-linear-gradient';

export default class App extends Component {
  render(){
    return (
      <LinearGradient
        colors={['#4568dc','#b06ab3','#dd2476']}
        style={{flex: 1}}
      >
        //<Text style={styles.text}>Hello World</Text>
        <Text>
        <TextInput
        placeholder="Username"/>
        </Text>


      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 56,
    position: 'absolute',
    left: '15%',
    top: '40%',
    color: 'white',
    fontWeight: 'bold'
  }
});
