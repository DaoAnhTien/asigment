import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import Blognavigation from "./navigation/Blognavigation";
import autreducer from "./store/reducer/autreducer";
import catergoryreducer from "./store/reducer/catergoryreducer";
import postreducer from "./store/reducer/postreducer";

const rootreducer = combineReducers({
  categories: catergoryreducer,
  auths: autreducer,
  postes: postreducer,
});
const store = createStore(rootreducer);
export default function App() {
  return (
    <Provider store={store}>
      <Blognavigation></Blognavigation>
    </Provider>
  );
}
