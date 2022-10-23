import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import Home from "../screens/Home";
import Temperature from "../screens/Temperature";
import Energy from "../screens/Energy";
import Sound from "../screens/Sound";

const Tab = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case "Home":
              iconName = "home";
              break;
            case "Temperatura umidade":
              iconName = "temperature-high";
              break;
            case "Sons e ruídos":
              iconName = "volume-up";
              break;
            case "Consumo de energia":
              iconName = "bolt";
              break;
          }
          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarActiveTintColor: "#4d6979",
        tabBarInactiveTintColor: "#C7C7C7",
        tabBarLabelStyle: {
          marginBottom: 15,
          textTransform: "uppercase",
          fontWeight: "bold",
        },
        tabBarStyle: {
          position: "absolute",
          height: 90,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={({ route }) => ({ tabBarLabel: route.params })}
      />
      <Tab.Screen
        name="Temperatura umidade"
        component={Temperature}
        options={{ tabBarLabel: "Clima", tabBarIconStyle: { paddingLeft: 20 } }}
      />
      <Tab.Screen name="Sons e ruídos" component={Sound} />
      <Tab.Screen
        name="Consumo de energia"
        component={Energy}
        options={{
          tabBarLabel: "Energia",
          tabBarIconStyle: { justifyContent: "center" },
        }}
      />
    </Tab.Navigator>
  );
}
