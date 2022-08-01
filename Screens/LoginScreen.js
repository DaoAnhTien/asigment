import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  ActivityIndicator,
} from "react-native";
import Card from "../Component/ui/Card";
import React, { Component } from "react";
import { login } from "../store/actions/autaction";
import { connect } from "react-redux";

class LoginScreen extends Component {
  state = {
    email: "daoanhtien2309@gmail.com",
    password: "abc",
    error: "",
    isloading: false,
  };
  inputchanHandler = (name, value) => {
    this.setState({ ...this.state, [name]: value });
  };
  gotoRegisterHandler = () => {
    const { navigation } = this.props;
    navigation.navigate("RegisterScreen");
  };
  LoginHandler = async () => {
    const { navigation, login } = this.props;
    const { email, password } = this.state;
    try {
      this.setState({ ...this.state, isloading: true });
      await login(email, password);

      if (this.props.loginemail) {
        this.setState({ ...this.state, isloading: false });
        navigation.navigate("MyTabs");

        return;
      }
      this.setState({
        ...this.state,
        isloading: false,
        error: "invalid username or password",
      });
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
                title="LOGIN"
                onPress={this.LoginHandler}
              ></Button>
            )}
          </View>
          <View style={styles.button}>
            <Button
              title="Register new Acount "
              onPress={this.gotoRegisterHandler}
            ></Button>
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

const mapStateToProps = (state) => ({
  loginemail: state.auths.loginemail,
});

const mapDispatchToProps = (dispatch) => ({
  login: async (email, password) => dispatch(login(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

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
