import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import { COLORS } from "@/constants";

const Carousel = () => {
  const slides = [
    "https://img.freepik.com/premium-photo/white-modern-living-room-with-television-decoration-generative-ai_1645-7107.jpg?semt=sph",
    "https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129803.jpg?semt=sph",
    "https://img.freepik.com/free-photo/interior-design-with-photoframes-plants_23-2149385437.jpg?t=st=1720964091~exp=1720967691~hmac=d77d7371d5cf81d08b75f205555ab3f1a1e7afb1dda6813e183d6a17e0d1547a&w=1380",
  ];
  return (
    <View>
      <SliderBox
        images={slides}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{
          borderRadius: 15,
          width: "93%",
          marginTop: 15,
        }}
        autoplay
        circleLoop
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: "center",
  },
});
