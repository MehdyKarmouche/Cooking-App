import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Image,FlatList } from 'react-native';
import { Card,CheckBox } from 'react-native-elements';
//import {Home} from './App/views/Home.js'



export class Recipe extends Component {
  
  render(){
    
    return (
      <View>
            <View style={styles.header}>
              <Text style={styles.headerText}>Pizza Pepperoni</Text>
            </View>
            <Image
            style={styles.image}
            source={require('./back.jpg')}/>
            <View style={styles.card}>
                <Card>
                    <Text style={styles.cardText}><b>Time</b>: 45min</Text>
                    <Text style={styles.cardText}><b>Prep</b>: 45min</Text>
                    <Text style={styles.cardText}><b>Total</b> 45min</Text>
                    <Text style={styles.cardText}><b>Servings</b> 45min</Text>
                    <Text style={styles.link}><u>Nutrition information</u></Text>
                </Card>
            </View>
            <View style={styles.ingredients}>
                <Text style={styles.title}>Ingredients</Text>
            <FlatList
                data={[
                    {key: 'Parmesan'},
                    {key: 'Cheese'},
                    {key: 'Meat'},
                    {key: 'Tomato sauce'},
                    {key: 'Olive Oil'},
                    {key: 'Olives'},
                    {key: 'Mushroom'},
                    {key: 'Pepperoni'},
                ]}
                renderItem={({item}) => <Text style={styles.item}>-{item.key}</Text>}/>

            </View>

            <View style={styles.instructions}>
                <Text style={styles.title}>Instructions</Text>
                
                <View style={styles.step}>
                    <Text style={styles.stepTitle}>Step 1</Text>
                    <Text style={styles.instcontent}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
                    galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                    but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
                </View>

                <View style={styles.step}>
                    <Text style={styles.stepTitle}>Step 2</Text>
                    <Text style={styles.instcontent}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
                    galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                    but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
                </View>

                <View style={styles.step}>
                    <Text style={styles.stepTitle}>Step 3</Text>
                    <Text style={styles.instcontent}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
                    galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                    but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
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
      image:{
          flex:1,
          width: null,
          height: 170,
      },
      card:{
        borderBottomColor: 'grey'
      },
      cardText:{
          margin:10,
      },
      link:{
          textAlign:"center",
          marginTop:20
      },
      underline:{
          marginTop: 5
      },
      ingredients:{
          margin:20
      },
      item:{
        margin:5,
        fontWeight:'bold'
      },
      title:{
          fontSize:25,
          fontWeight: 'bold',
          marginBottom:10,
          color: '#FEC144'
      },
      instructions:{
          margin:20,
      },
      stepTitle:{
          fontSize:15,
          fontWeight: 'bold',
          marginLeft:25
      },
      instcontent:{marginLeft:25
    }

    
});
