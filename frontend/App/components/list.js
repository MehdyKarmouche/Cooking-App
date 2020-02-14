import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Image, ImageBackground, Container } from 'react-native';
import { ListItem } from 'react-native-elements'
import { Card, Button, Icon } from 'react-native-elements'

export class List extends Component{
    render(){
        const users = [
            {
               name: 'brynn',
               avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
            },
            // more users here
           ]
        return(
            <View>
<Card
  title='Pizza kefta'
  image={require('./pizza.jpg')}>
  <Text style={{marginBottom: 10}}>
    Preview of the recipe
  </Text>
  <Button
    buttonStyle={{borderRadius: 0,backgroundColor:'#ff8c00', marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='VIEW NOW' />
</Card>
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    image: {
      alignSelf: 'stretch'
    },
});