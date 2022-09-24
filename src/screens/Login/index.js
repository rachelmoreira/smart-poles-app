import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Home from "../Home";


export default function Login() {
    const navigation = useNavigation();
    return <SafeAreaView>
        <StatusBar/>
        <Text>Login</Text>
        <TouchableOpacity onPress={() => {navigation.navigate('MainApp')}}><Text>Enter</Text></TouchableOpacity>
    </SafeAreaView>
}