import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeScreen from "./Screens/HomePage/HomeScreen";
import NotificationScreen from "./Screens/Notification/NotificationScreen";
import ProfileScreen from "./Screens/ProfilePage/ProfileScreen";

const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <Tab.Navigator
      // For first open:
      initialRouteName="Home"
      // --- Zin
      screenOptions={{
        tabBarActiveTintColor: "#000000",
      }}

      // -------- 1
      //   tabBarOptions={{
      //     activeTintColor: 'red',
      //     // inactiveTintColor: 'lightgray',
      //     // activeBackgroundColor: 'white',
      //     // inactiveBackgroundColor: 'white',
      //         style: {
      //               backgroundColor: '#0CA32A',
      //               paddingBottom: 3
      //         }
      //  }}
      // ----- 2
      // shifting={true}
      // labeled={false}
      // sceneAnimationEnabled={false}
      // activeColor="#00aea2"
      // inactiveColor="#95a5a6"
      // barStyle={{ backgroundColor: "#ffff" }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          tabBarLabel: "Updates",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
