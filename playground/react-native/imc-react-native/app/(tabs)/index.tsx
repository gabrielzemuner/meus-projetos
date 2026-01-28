import React from "react";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { WebView } from "react-native-webview";
import { SafeAreaView } from "react-native-safe-area-context";

// const WEBAPP_URL = "https://analisedados.com/";
const WEBAPP_URL = "https://gabrielzemuner.github.io/mp-calculadora-imc/";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <StatusBar style="auto" />
      <WebView
        source={{ uri: WEBAPP_URL }}
        style={styles.webview}
        javaScriptEnabled
        domStorageEnabled
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});
