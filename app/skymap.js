import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";

const generateStars = (count) => {
  let stars = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    });
  }
  return stars;
};

const SkyMapScreen = () => {
  const stars = generateStars(50); // Generate 50 stars dynamically

  return (
    <ImageBackground
      source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Star_Chart.svg" }} // Darker star map
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Sky Map</Text>

        {stars.map((star, index) => (
          <View key={index} style={[styles.star, styles.glow, { top: star.top, left: star.left }]} />
        ))}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Dark overlay for contrast
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginTop: 20,
  },
  star: {
    position: "absolute",
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#fff",
  },
  glow: {
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 8,
  },
});

export default SkyMapScreen;
