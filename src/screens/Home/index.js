import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import styles from "../../../styles";

export default function Home() {
    return <SafeAreaView style={styles.container}>
        <StatusBar/>
        <Text>Condominio Wall Street</Text>
    </SafeAreaView>
}