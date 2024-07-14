import { TextInput, TouchableOpacity, View, SafeAreaView } from "react-native";
import React, { useState } from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, Ionicons } from "@expo/vector-icons";
import styles from "./search.style";
import { COLORS, SIZES } from "@/constants";

const Search = () => {
  const [search, setSearch] = useState("");

  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Feather
            name="camera"
            size={SIZES.xLarge}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            onChangeText={setSearch}
            value={search}
            // onPress={() => {}}
            placeholder="What are you looking for"
          />
        </View>

        <View>
          <TouchableOpacity style={styles.searchBtn}>
            <Ionicons name="search" size={24} color={COLORS.offwhite} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Search;
