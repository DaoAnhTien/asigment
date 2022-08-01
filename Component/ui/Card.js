import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";

export default class card extends Component {
  render() {
    return (
      <View {...this.props} style={styles.Card}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Card: {
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
