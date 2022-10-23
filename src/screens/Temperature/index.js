import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, Text, View, Image } from "react-native";
import styles from "../../../styles";

export default function Temperature() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.card}>
        <Text style={styles.titleCard}>
          Temperatura do condomínio
        </Text>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{ flexDirection: "column", paddingLeft: 30, width: "70%" }}
          >
            <Text style={styles.dataCard}>20ºC</Text>
            <Text style={styles.mediumDataCard}>
              Média do dia: 23ºC {"\n"}Média da semana: 26ºC
            </Text>
          </View>
          <View style={{ flexDirection: "column", width: "10%", padding: 20 }}>
            <Image
              style={{ width: 30, height: 102 }}
              source={require("../../../assets/cardIcons/temperature.png")}
            />
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.titleCard}>
          Umidade relativa do ar do condomínio
        </Text>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{ flexDirection: "column", paddingLeft: 30, width: "60%" }}
          >
            <Text style={styles.dataCard}>84%</Text>
            <Text style={styles.mediumDataCard}>
            Média do dia: 82% {"\n"}Média da semana: 80%
            </Text>
          </View>
          <View style={{ flexDirection: "column", width: "20%", padding: 20 }}>
            <Image
              style={{ width: 90, height: 90 }}
              source={require("../../../assets/cardIcons/umidity.png")}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
