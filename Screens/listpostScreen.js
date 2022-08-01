import { Text, StyleSheet, View, Button, FlatList, Alert } from "react-native";
import React, { Component } from "react";
import { connect } from "react-redux";
import Postitem from "../Component/ui/Postitem";
import { deletepost } from "../store/actions/postaction";

class listpostScreen extends Component {
  goinsertpostHandler = () => {
    const { navigation } = this.props;
    navigation.navigate("insertpostScreen");
  };
  editpostHandler = (post) => {
    const { navigation } = this.props;
    navigation.navigate("editpostScreen", { post: post });
  };
  deletepostHandler = (post) => {
    const { deletepost } = this.props;
    Alert.alert("Conformations", `Do you want to delete ${post}?`, [
      {
        text: "yes",
        onPress: () => {
          deletepost(+post);
        },
      },
      { text: "no" },
    ]);
  };

  render() {
    const { postes } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          data={postes}
          keyExtractor={(item, index) => item.post}
          renderItem={(itemData) => (
            <Postitem
              oneditPress={this.editpostHandler}
              ondeletePress={this.deletepostHandler}
              post={itemData.item.post }
              name={itemData.item.name}
            ></Postitem>
          )}
        ></FlatList>
        <Text></Text>
        <View style={styles.button}>
          <Button
            title="insert post new"
            onPress={this.goinsertpostHandler}
          ></Button>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  postes: state.postes.postes,
});

const mapDispatchToProps = (dispatch) => ({
  deletepost: (post) => dispatch(deletepost(post)),
});

export default connect(mapStateToProps, mapDispatchToProps)(listpostScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 10,
  },
  button: {
    margin: 5,
  },
  item: {
    width: "100%",
    borderBottomWidth: 1,
    margin: 5,
    padding: 5,
  },
});
