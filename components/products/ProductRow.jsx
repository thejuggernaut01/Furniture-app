import { ActivityIndicator, FlatList, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants";
import ProductCardView from "./ProductCardView";
import styles from "./productRow.style";
import useFetch from "../../hooks/useFetch";

const ProductRow = () => {
  const { data, isLoading, error } = useFetch();

  return (
    <>
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong </Text>
        ) : (
          <FlatList
            data={products}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => <ProductCardView item={item} />}
            horizontal
            contentContainerStyle={{ columnGap: SIZES.medium }}
            showsHorizontalScrollIndicator={false}
          />
        )}
      </View>
    </>
  );
};

export default ProductRow;

const products = [1, 2, 3, 4];
