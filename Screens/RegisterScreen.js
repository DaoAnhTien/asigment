import {
  Text,
  StyleSheet,
  View,
  Button,
  TextInput,
  ActivityIndicator,
} from "react-native";
import React, { Component } from "react";
import Card from "../Component/ui/Card";
import { register } from "../store/actions/autaction";
import { connect } from "react-redux";
class RegisterScreen extends Component {
  state = {
    email: "daoanhtien2309@gmail.com",
    password: "abc",
    error: "",
    isloading: false,
  };
  inputchanHandler = (name, value) => {
    this.setState({ ...this.state, [name]: value });
  };

  RegisterHandler = async () => {
    const { navigation, register } = this.props;
    const { email, password } = this.state;
    try {
      this.setState({ ...this.state, isloading: true });
      await register(email, password);

      this.setState({ ...this.state, isloading: false });
      navigation.navigate("LoginScreen");
    } catch (error) {
      this.setState({
        ...this.state,
        isloading: false,
        error: "Error" + error.message,
      });
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Card style={styles.card}>
          <Text>Email</Text>
          <TextInput
            keyboardType="email-address"
            style={styles.input}
            value={this.state.email}
            onChangeText={this.inputchanHandler.bind(this, "email")}
          ></TextInput>
          <Text>Password</Text>
          <TextInput
            style={styles.input}
            value={this.state.password}
            secureTextEntry={true}
            onChangeText={this.inputchanHandler.bind(this, "password")}
          ></TextInput>
          <View>
            {this.state.isloading ? (
              <ActivityIndicator size="large" color="green"></ActivityIndicator>
            ) : (
              <Button
                style={styles.button}
                title="REGISTER"
                onPress={this.RegisterHandler}
              ></Button>
            )}
          </View>

          {!!this.state.error && (
            <View>
              <Text>{this.state.error}</Text>
            </View>
          )}
        </Card>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  register: (email, password) => dispatch(register(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);

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
});
