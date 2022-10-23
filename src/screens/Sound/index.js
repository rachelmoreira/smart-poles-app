import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, Text, View, Image } from "react-native";
import styles from "../../../styles";

export default function Sound() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.card}>
        <Text style={styles.titleCard}>Sons e ruídos do condomínio</Text>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{ flexDirection: "column", paddingLeft: 30, width: "70%" }}
          >
            <Text style={styles.dataCard}>35<Text style={{fontSize:50}}>dB</Text></Text>
            <Text style={styles.mediumDataCard}>
              Média da última hora: 36dB {"\n"}Média do dia: 45dB {"\n"}Média da
              semana: 43dB
            </Text>
          </View>
          <View style={{ flexDirection: "column", width: "20%", padding: 20 }}>
            <Image
              style={{ width: 68, height: 78 }}
              source={require("../../../assets/cardIcons/sound.png")}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
