import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, Text, View, Image } from "react-native";
import styles from "../../../styles";
import { useState, useEffect } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

import { CondominiumService } from "../../services/CondominiumService";

export default function Temperature() {

  const [temperature, setTemperature] = useState();
  
  const [humidity, setHumidity] = useState();

  useEffect(() => {
    processUseEffect();
  }, []);
  
  useFocusEffect(
    React.useCallback(() => {
      processUseEffect();
      // alert('Screen was focused');
      // Do something when the screen is focused
      return () => {
        processUseEffect
        // alert('Screen was unfocused');
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [])
  );

  async function processUseEffect() {
    const condominiumId = await AsyncStorage.getItem("@selectedId");
    const temperatureResponse = await CondominiumService.getMetrics(
      condominiumId,
      "temperature"
    );
    const temperatureData = temperatureResponse.data;

    setTemperature({
      current: temperatureData.current,
      dayAverage: temperatureData.dayAverage,
      weekAverage: temperatureData.weekAverage
    })

    const humidityResponse = await CondominiumService.getMetrics(condominiumId, "humidity");
    const humidityData = humidityResponse.data;

    setHumidity({
      current: humidityData.current,
      dayAverage: humidityData.dayAverage,
      weekAverage: humidityData.weekAverage
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.card}>
        <Text style={styles.titleCard}>Temperatura do condomínio</Text>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{ flexDirection: "column", paddingLeft: 30, width: "70%" }}
          >
            <Text style={styles.dataCard}>
              {temperature?.current}ºC
            </Text>
            <Text style={styles.mediumDataCard}>
              Média do dia: {temperature?.dayAverage}ºC
              {"\n"}Média da semana: {temperature?.weekAverage}ºC
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
            <Text style={styles.dataCard}>
            {humidity?.current}%
              </Text>
            <Text style={styles.mediumDataCard}>
              Média do dia: {humidity?.dayAverage}%
              {"\n"}Média da semana: {humidity?.weekAverage}%
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
