import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Login from "../screens/Login";

import AppRoutes from "./AppRoutes";

const Stack = createNativeStackNavigator();

export default function LoginRoute() {
  function getHeaderTitle(params) {
    let condominium = "";
    const base = [
      { label: "Condomínio Wall Street", value: "1" },
      { label: "Condomínio Fulano de Tal", value: "2" },
    ];
    base.map((element) => {
      if (element.value === params) {
        return (condominium = element.label);
      }
    });
    return condominium;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#fff",
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: "#4d6979",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainApp"
          component={AppRoutes}
          options={({ route }) => ({
            title: getHeaderTitle(route.params),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
