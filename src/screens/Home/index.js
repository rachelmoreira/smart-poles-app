import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  Alert,
  Image,
} from "react-native";
import styles from "../../../styles";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Home() {

  const [condominium, setCondominium] = useState("");

  useEffect(() => {
    getData();
  });

  async function getData() {
    try {
      const value = await AsyncStorage.getItem("@selected");
      if (value !== null) {
        const base = [
          { label: "Condomínio Wall Street", value: "1" },
          { label: "Condomínio Fulano de Tal", value: "2" },
        ];
        base.map((element) => {
          if (element.value === value) {
            setCondominium(element.label);
          }
        });
      }
    } catch (e) {
      Alert.alert(e.toString());
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Text>
        {/* {condominium} */}
      </Text>
      <View style={{marginBottom:200}}>
        <Image
          style={{ width: 700, height: 800 }}
          source={require("../../../assets/cardIcons/condominium.png")}
        />
      </View>
    </SafeAreaView>
  );
}
