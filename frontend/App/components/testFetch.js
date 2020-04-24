import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export class Fetch extends Component {
  state = {
    data: []
  };

  componentWillMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch("http://localhost:3000/search/cuisine").then((response)=> response.json())
      .then((responseJson)=>{
        this.setState({ data: responseJson });
        console.log(responseJson);
      })
    
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          keyExtractor={(x, i) => i}
          renderItem={({ item }) =>
            <Text>
              {`${item.title} `}
            </Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});