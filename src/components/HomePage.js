import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";

class HomePage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Home Page Component</Text>
        <Button
          title="Go to Todo App"
          onPress={() => this.props.navigation.navigate("Todo")}
        />
      </View>
    );
  }
}

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
