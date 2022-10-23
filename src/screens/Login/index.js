import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Alert,
  Image,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../../../styles";
import { Picker } from "@react-native-picker/picker";

export default function Login() {
  const navigation = useNavigation();

  const [condominium, setCondominium] = useState([]);
  const [condominiumId, setCondominiumId] = useState("");

  useEffect(() => {
    console.log("executando useffect");
    processUseEffect();
  }, []);

  async function processUseEffect() {
    await loadData();
  }

  function loadData() {
    console.log("loading...");
    const base = [
      { label: "Condomínio Wall Street", value: "1" },
      { label: "Condomínio Fulano de Tal", value: "2" },
    ];
    setCondominium(base);
  }

  async function saveValue() {
    try {
      await AsyncStorage.setItem("@selected", condominiumId);

      navigation.navigate("MainApp", condominiumId);
    } catch (e) {
      Alert.alert(e.toString());
    }
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <StatusBar />
      <ImageBackground
        style={{ flex: 1, justifyContent: "flex-end" }}
        source={require("../../../assets/background.png")}
      >
        <View
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
          <Image
            source={require("../../../assets/iconLogin.png")}
            style={{ width: 150, height: 150, borderRadius: 16 }}
          />
        </View>
        <View style={styles.loginArea}>
          <Text style={styles.loginTitle}>Login</Text>
          <View>
            <Text style={styles.loginText}>Selecione o condomínio</Text>
            <View
              style={{
                borderRadius: 16,
                backgroundColor: "#d4d4d4",
                marginBottom: 20,
              }}
            >
              <Picker
                style={styles.picker}
                selectedValue={condominiumId}
                onValueChange={(itemValue, itemIndex) =>
                  setCondominiumId(itemValue)
                }
                dropdownIconColor={"#000"}
                prompt="Selecione o condomínio:"
              >
                {condominium !== undefined &&
                  condominium.map((condominium, index) => (
                    <Picker.Item
                      key={index.toString()}
                      label={condominium.label}
                      value={condominium.value}
                      style={{ fontSize: 18 }}
                    />
                  ))}
              </Picker>
            </View>
          </View>
          <View style={styles.buttonArea}>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => saveValue()}
            >
              <Text style={styles.textButton}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
