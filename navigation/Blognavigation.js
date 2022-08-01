import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import insertcatergaryScreen from "../Screens/insertcatergaryScreen";
import listcatergaryScreen from "../Screens/listcatergaryScreen";
import editcatergaryScreen from "../Screens/editcatergaryScreen";
import LoginScreen from "../Screens/LoginScreen";
import RegisterScreen from "../Screens/RegisterScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import insertpostScreen from "../Screens/insertpostScreen";
import editpostScreen from "../Screens/editpostScreen";
import listpostScreen from "../Screens/listpostScreen";

const Stack = createStackNavigator();

function Blogstacknavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ListcatergoryScren" component={listcatergaryScreen} />
      <Stack.Screen
        name="insertcatergoryScreen"
        component={insertcatergaryScreen}
      />
      <Stack.Screen
        name="editcatergoryScreen"
        component={editcatergaryScreen}
      />
    </Stack.Navigator>
  );
}
function Poststacknavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ListpostScren"
        component={listpostScreen}
        options={{ headerLeft: null }}
      />
      <Stack.Screen name="insertpostScreen" component={insertpostScreen} />
      <Stack.Screen name="editpostScreen" component={editpostScreen} />
    </Stack.Navigator>
  );
}
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Mytabs"
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
      }}
    >
      <Tab.Screen
        name="Poststacknavigator"
        component={Poststacknavigator}
        options={{
          headerShown: false,
          tabBarLabel: "posts new",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Blogstacknavigator"
        component={Blogstacknavigator}
        options={{
          headerShown: false,
          tabBarLabel: "catgory",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function Autnavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen
        name="MyTabs"
        component={MyTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  );
}
const Blognavigation = () => {
  return (
    <NavigationContainer>
      <Autnavigator />
    </NavigationContainer>
  );
};

export default Blognavigation;
