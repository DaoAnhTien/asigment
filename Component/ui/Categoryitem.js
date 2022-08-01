import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Categoryitem extends Component {
  render() {
    const { name, categoryId } = this.props;
    return (
      <View style={[this.props.style, styles.itemcontainer]}>
        <Text style={styles.item}>{name} </Text>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.oneditPress(categoryId);
            }}
          >
            <Ionicons
              name="md-clipboard-outline"
              size={24}
              color="orange"
            ></Ionicons>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.ondeletePress(categoryId);
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
    );
  }
}

const styles = StyleSheet.create({
  itemcontainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#ccf",
    margin: 5,
    padding: 5,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    margin: 3,
  },
});
