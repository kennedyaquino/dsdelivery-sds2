import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Header from "../Header";

export default function Home() {
  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate("Orders");
  };

  return (
    <>
      <Header />
      <View style={styles.container}>
        <Image source={require("../assets/deliveryman.png")} />
        <Text style={styles.title}>
          Acompanhe os pedidos e {"\n"} entregue no prazo!
        </Text>
        <Text style={styles.subTitle}>
          Receba todos os pedidos do seu {"\n"} restaurante na palma da sua mão
        </Text>
      </View>
      <View style={styles.footer}>
        <RectButton style={styles.button} onPress={handleOnPress}>
          <Text style={styles.buttonText}>VER PEDIDOS</Text>
        </RectButton>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "10%",
    alignItems: "center",
  },
  title: {
    color: "#263238",
    fontSize: 24,
    lineHeight: 30,
    fontWeight: "bold",
    marginTop: 28,
    textAlign: "center",
  },
  subTitle: {
    color: "#9E9E9E",
    fontSize: 14,
    marginTop: 13,
    lineHeight: 20,
    textAlign: "center",
  },
  footer: {
    marginTop: "12%",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#DA5C5C",
    flexDirection: "row",
    borderRadius: 10,
  },
  buttonText: {
    paddingTop: 13,
    paddingBottom: 13,
    paddingLeft: 50,
    paddingRight: 50,
    fontWeight: "bold",
    fontSize: 16,
    color: "#FFF",
    letterSpacing: -0.22,
  },
});
