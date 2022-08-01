import { Text, StyleSheet, View, TextInput, Button, Alert } from "react-native";
import React, { Component } from "react";
import Card from "../Component/ui/Card";
import { connect } from "react-redux";
import { updateCategory } from "../store/actions/catergoryaction";

class editcatergaryScrgit initeen extends Component {
  state = {
    categoryId: "",
    name: "",
  };
  componentDidMount = () => {
    const { route, navigation, categories } = this.props;
    const { categoryId } = route.params;
    const category = categories.find((item) => item.categoryId === categoryId);
    if (category) {
      this.setState({
        ...this.state,
        categoryId: "" + category.categoryId,
        name: category.name,
      });
    }
  };
  inputchanHandler = (name, value) => {
    this.setState({ ...this.state, [name]: value });
  };
  updatecatergoryHandler = () => {
    const { updateCategory, navigation } = this.props;
    const { categoryId, name } = this.state;
    updateCategory(+categoryId, name);
    // Alert.alert("information", "new category has been insertted", [
    //   { text: "ok" },
    // ]);
    navigation.navigate("ListcatergoryScren");
  };
  render() {
    return (
      <View style={styles.container}>
        <Card style={styles.card}>
          <Text>CaterGory ID</Text>
          <TextInput
            style={styles.input}
            value={this.state.categoryId}
            onChangeText={this.inputchanHandler.bind(this, "categoryId")}
          ></TextInput>
          <Text>Name</Text>
          <TextInput
            style={styles.input}
            value={this.state.name}
            onChangeText={this.inputchanHandler.bind(this, "name")}
          ></TextInput>
          <View>
            <Button
              style={styles.button}
              title="update"
              onPress={this.updatecatergoryHandler}
            ></Button>
          </View>
        </Card>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
});

const mapDispatchToProps = (dispatch) => ({
  updateCategory: (categoryId, name) =>
    dispatch(updateCategory(categoryId, name)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(editcatergaryScreen);
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
