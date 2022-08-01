import { Text, StyleSheet, View, Button, FlatList, Alert } from "react-native";
import React, { Component } from "react";
import { connect } from "react-redux";
import Categoryitem from "../Component/ui/Categoryitem";
import { deleteCategory } from "../store/actions/catergoryaction";

class listcatergaryScreen extends Component {
  goinsertcatergoryHandler = () => {
    const { navigation } = this.props;
    navigation.navigate("insertcatergoryScreen");
  };
  editcategoryHandler = (categoryId) => {
    const { navigation } = this.props;
    navigation.navigate("editcatergoryScreen", { categoryId: categoryId });
  };
  deletecategoryHandler = (categoryId) => {
    const { deleteCategory } = this.props;
    Alert.alert("Conformations", `Do you want to delete ${categoryId}?`, [
      {
        text: "yes",
        onPress: () => {
          deleteCategory(+categoryId);
        },
      },
      { text: "no" },
    ]);
  };

  render() {
    const { categories } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          data={categories}
          keyExtractor={(item, index) => item.categoryId}
          renderItem={(itemData) => (
            <Categoryitem
              oneditPress={this.editcategoryHandler}
              ondeletePress={this.deletecategoryHandler}
              categoryId={itemData.item.categoryId}
              name={itemData.item.name}
            ></Categoryitem>
          )}
        ></FlatList>
        <Text></Text>
        <View style={styles.button}>
          <Button
            title="insert category"
            onPress={this.goinsertcatergoryHandler}
          ></Button>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
});

const mapDispatchToProps = (dispatch) => ({
  deleteCategory: (categoryId) => dispatch(deleteCategory(categoryId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(listcatergaryScreen);

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
