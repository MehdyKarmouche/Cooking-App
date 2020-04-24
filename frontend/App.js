import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground } from 'react-native';
import {Regform} from './App/components/regform'
import {Loginform} from './App/components/login'
import{Home} from './App/components/home'
import{Recipe} from './App/components/recipe'
import{Fetch} from './App/components/testFetch'
//import {Router} from './App/components/router'
import 'react-native-gesture-handler';
//import { LinearGradient } from 'expo-linear-gradient';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/*<ImageBackground blurRadius={3} source={require('./App/components/back2.jpg')} style={styles.back}>*/}
        <Fetch/>
        {/*</ImageBackground>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
});
