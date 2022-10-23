import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, Text, View, Image } from "react-native";
import styles from "../../../styles";

export default function Energy() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.card}>
        <Text style={styles.titleCard}>
          Consumo de energia da iluminação externa
        </Text>
        <View style={{ flexDirection: "row", marginVertical: 12 }}>
          <View
            style={{ flexDirection: "column", paddingLeft: 30, width: "70%" }}
          >
            <Text style={styles.mediumDataCard}>Referente ao mês 10/2022</Text>
            <Text style={styles.dataCard}>
              64<Text style={{ fontSize: 30 }}>kWh</Text>
            </Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              width: "20%",
              padding: 20,
              marginTop: 20,
            }}
          >
            <Image
              style={{ width: 52, height: 90 }}
              source={require("../../../assets/cardIcons/energy.png")}
            />
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <View
            style={{ flexDirection: "column", paddingLeft: 30, width: "70%" }}
          >
            <Text style={styles.mediumDataCard}>Economia de</Text>
            <Text style={styles.dataCard}>80%</Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              width: "20%",
              padding: 20,
              marginTop: 20,
            }}
          >
            <Image
              style={{ width: 68, height: 78 }}
              source={require("../../../assets/cardIcons/energyEconomy.png")}
            />
          </View>
        </View>
        <View style={{ flexDirection: "row", paddingLeft: 30 }}>
          <Text style={styles.mediumDataCard}>
            Com o uso da iluminação inteligente
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
