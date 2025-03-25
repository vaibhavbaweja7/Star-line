import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Svg, Circle, Text as SvgText, Path } from "react-native-svg";

const majorStars = [
  { name: "Sirius", x: 50, y: 100 },
  { name: "Betelgeuse", x: 200, y: 250 },
  { name: "Vega", x: 300, y: 150 },
  { name: "Polaris", x: 400, y: 50 },
  { name: "Rigel", x: 500, y: 300 },
];

const planets = [
  { name: "Mars", x: 150, y: 350 },
  { name: "Jupiter", x: 350, y: 400 },
  { name: "Saturn", x: 450, y: 200 },
];

const generateRandomStars = (count, width, height) => {
  return Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
  }));
};

const SkyMap = () => {
  const [stars, setStars] = useState([]);
  const width = 600;
  const height = 400;

  useEffect(() => {
    setStars(generateRandomStars(50, width, height));
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#333", alignItems: "center", justifyContent: "center" }}>
      <Svg width={width} height={height}>
        {/* Random Stars */}
        {stars.map((star, index) => (
          <Circle key={index} cx={star.x} cy={star.y} r={2} fill="white" />
        ))}
        
        {/* Major Stars with Labels */}
        {majorStars.map((star, index) => (
          <>
            <Circle key={`star-${index}`} cx={star.x} cy={star.y} r={3} fill="yellow" />
            <SvgText key={`label-${index}`} x={star.x + 5} y={star.y - 5} fill="white" fontSize="12">{star.name}</SvgText>
          </>
        ))}
        
        {/* Planets with Labels */}
        {planets.map((planet, index) => (
          <>
            <Circle key={`planet-${index}`} cx={planet.x} cy={planet.y} r={4} fill="red" />
            <SvgText key={`label-${index}`} x={planet.x + 5} y={planet.y - 5} fill="white" fontSize="12">{planet.name}</SvgText>
          </>
        ))}
        
        {/* Half Moon */}
        <>
          <Circle cx={550} cy={100} r={20} fill="white" />
          <Path d="M 530 100 A 20 20 0 1 1 570 100 A 18 18 0 1 0 530 100" fill="#333" />
        </>
      </Svg>
      <Text style={{ color: "white", fontSize: 20, fontWeight: "bold", marginTop: 10 }}>Sky Map</Text>
    </View>
  );
};

export default SkyMap;