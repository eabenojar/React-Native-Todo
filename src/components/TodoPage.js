import React, { Component } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from "react-native";
import t from "tcomb-form-native";

const Form = t.form.Form;

const Todos = t.struct({
  value: t.String
});

class TodoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Add Todo",
      todoList: []
    };
  }
  onSubmit = () => {
    console.log("BUTTON PRESSED");
    console.log(this.refs.form.getValue());
    const value = this.refs.form.getValue();
    console.log("VALUE", value);
    const newArr = this.state.todoList.concat(value);
    this.setState({
      todoList: newArr
    });
  };
  render() {
    console.log("RENDER", this.state.todoList);
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Todo Page</Text>
        <Form ref="form" type={Todos} />
        <Button title="Submit" onPress={this.onSubmit} />
        {this.state.todoList.map((item, i) => {
          return (
            <View key={i}>
              <Text>{item.value}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}

export default TodoPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
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
  },
  form: {
    height: 50,
    width: 200
  }
});

// const options = {
//   stylesheet: styles.form
// };
