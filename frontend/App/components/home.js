import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Image, FlatList, ImageBackground } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";

const dataList = [{key:'1'},{key:'2'}, {key:'3'}, {key:'4'}]
const numCol = 2
export class Home extends Component{
    render() {
        return (
          <View>
            <View style={styles.header}>
              <Text style={styles.headerText}>Cooking-Assistant</Text>
            </View>
            <View style={styles.subHeader}>
              
              <Text style={styles.subText}>Choose your favorite food <Image style={styles.smallIcon} source={require('../../assets/kitchen.png')}/> </Text>
            </View>
            <View style={styles.square}>

              <View style={styles.row}>
                <TouchableOpacity>
                  <ImageBackground source={require('../../assets/diet.png')}>
                    <View style={styles.icon}/>
                  </ImageBackground>
                  <View style={styles.legendContainer}>
                  <Text style={styles.legend}>Dish</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <ImageBackground source={require('../../assets/dish.png')}>
                    <View style={styles.icon} />
                  </ImageBackground>
                  <View style={styles.legendContainer}>
                  <Text style={styles.legend}>Type</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <ImageBackground source={require('../../assets/dinner.png')}>
                    <View style={styles.icon} />
                  </ImageBackground>
                  <View style={styles.legendContainer}>
                  <Text style={styles.legend}>World Cuisine</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

          </View>
          
        );
      }
}
const styles = StyleSheet.create({
  header:{
    height: 60,
    padding: 15,
    backgroundColor: '#FEC144'
  },
  headerText:{
    textAlign: 'center',
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold'

  },
  subHeader:{
    marginTop: 50,
    height: 50,
    padding: 15,
  },
  subText:{
    textAlign: 'center',
    fontSize: 20,
    color: '#55BF98',
    fontWeight: 'bold'
  },
  square:{
    alignSelf: 'center',
    marginTop: 30
  },
  row:{
    flex: 1,
    flexDirection: 'row',
  },
  icon:{
    height:100,
    width:100,
    borderRadius: 4,
    
    
    
  },
  legend: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    color: '#55BF98'
  },
  legendContainer:{
    borderRadius: 2,
  },
  smallIcon:{
    height:25,
    width:25
  }

  });