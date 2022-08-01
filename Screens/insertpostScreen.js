import { Text, StyleSheet, View, TextInput, Button, Alert } from "react-native";
import React, { Component } from "react";
import Card from "../Component/ui/Card";
import { connect } from "react-redux";
import { insertpost } from "../store/actions/postaction";

class insertpostScreen extends Component {
  state = {
    post: "",
    name: "",
  };
  inputchanHandler = (name, value) => {
    this.setState({ ...this.state, [name]: value });
  };
  savepostHandler = () => {
    const { insertpost, navigation } = this.props;
    const { post, name } = this.state;
    insertpost(+post, name);
    Alert.alert("information", "new category has been insertted", [
      { text: "ok" },
    ]);
    navigation.navigate("ListpostScren");
  };
  render() {
    return (
      <View style={styles.container}>
        <Card style={styles.card}>
          <Text>title</Text>
          <TextInput
            style={styles.input}
            value={this.state.post}
            onChangeText={this.inputchanHandler.bind(this, "post")}
          ></TextInput>
          <Text>post</Text>
          <TextInput
            style={styles.input}
            value={this.state.name}
            onChangeText={this.inputchanHandler.bind(this, "name")}
          ></TextInput>
          <View>
            <Button
              style={styles.button}
              title="save"
              onPress={this.savepostHandler}
            ></Button>
          </View>
        </Card>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  insertpost: (post, name) => dispatch(insertpost(post, name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(insertpostScreen);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
  },
  card: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    padding: 15,
  },
});
