import React from "react";
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ImageBackground 
      source={{ uri: "https://images.unsplash.com/photo-1537420327992-d6e192287183?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Starline</Text>
        <Text style={styles.subtitle}>Explore the Universe in Real-Time</Text>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => router.push("/skymap")}  // ✅ Corrected Navigation
        >
          <Text style={styles.buttonText}>Start Exploring</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    fontSize: 16,
    color: "#bbb",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#1e90ff",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
  },
});


