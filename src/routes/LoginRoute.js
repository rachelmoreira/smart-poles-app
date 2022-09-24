import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";

import Login from "../screens/Login";

import AppRoutes from "./AppRoutes";

const Stack = createNativeStackNavigator();

export default function LoginRoute() {
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
          options={{ title: "Condomínio Wall Street", headerShadowVisible: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // <Text>text</Text>
  );
}

// import React from "react";

// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

// import Home from "../screens/Home";
// import Temperature from "../screens/Temperature";
// import Energy from "../screens/Energy";
// import Sound from "../screens/Sound";
// import Login from "../screens/Login";

// // const IconHome =

// const Tab = createBottomTabNavigator();

// export default function LoginRoute() {
//   return (
//     // <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;

//             // if (route.name === "Home") {
//             //   iconName = "home";
//             //   // focused
//             //   //   ? 'home'
//             //   //   : 'ios-information-circle-outline';
//             // } else if (route.name === "Temperatura") {
//             //   iconName = "temperature-high";
//             // }

//             switch (route.name) {
//               case "Home":
//                 iconName = "home";
//                 break;
//               case "Temperatura umidade":
//                 iconName = "temperature-high";
//                 break;
//               case "Sons e ruídos":
//                 iconName = "volume-up";
//                 break;
//               case "Consumo de energia":
//                 iconName = "bolt";
//                 break;
//             }

//             // You can return any component that you like here!
//             return <FontAwesome5 name={iconName} size={size} color={color} />;
//           },
//           headerShown: false,
//           tabBarActiveTintColor: "#4d6979",
//           tabBarInactiveTintColor: "#C7C7C7",
//           labelStyle: {
//             width: '100%',
//             marginTop: 30,
//             paddingTop: 21
//           }
//         })}
//       >
//         <Tab.Screen name="Home" component={Home} />
//         <Tab.Screen name="Temperatura umidade" component={Temperature} />
//         <Tab.Screen name="Sons e ruídos" component={Sound} />
//         <Tab.Screen name="Consumo de energia" component={Energy}/>
//       </Tab.Navigator>
//     // </NavigationContainer>
//   );
// }
