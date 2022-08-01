import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import { Ionicons } from "@expo/vector-icons";

export default class Postitem extends Component {
  render() {
    const { name, post } = this.props;
    return (
      <View style={[this.props.style, styles.itemcontainer]}>
        <Text style={styles.item}>{post}</Text>
        <Text>{name} </Text>
        <View style={styles.buttons}>
          <View style={styles.button}>
            <TouchableOpacity
              onPress={() => {
                this.props.oneditPress(post);
              }}
            >
              <Ionicons
                name="md-clipboard-outline"
                size={24}
                color="orange"
              ></Ionicons>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.ondeletePress(post);
              }}
            >
              <Ionicons
                name="md-trash-bin-outline"
                size={24}
                color="red"
              ></Ionicons>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemcontainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#ccf",
    margin: 5,
    padding: 5,
  },
  buttons: {
    justifyContent: "center",
  },
  button: {
    marginTop: 30,
    flexDirection: "row",
    marginLeft: 300,
  },
  item: {
    fontSize: 25,
    fontWeight:"bold"
  },
});
