import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./heading.styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";

const Heading = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Arrivals</Text>
        <TouchableOpacity>
          <Ionicons name="grid" size={24} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Heading;
