import react from 'react'
import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native'
import { LinearGradient } from 'expo'

export class Home extends Component{
  render() {
    return (
      <LinearGradient
        colors={['#448AFF', '#9E9E9E', '#FFEB3B', '#FF5722']}
        style={{flex: 1}}
      >
        <Text style={styles.text}>Hello World</Text>
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
