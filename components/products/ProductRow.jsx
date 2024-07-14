import { FlatList, View } from "react-native";
import React from "react";
import { SIZES } from "../../constants";
import ProductCardView from "./ProductCardView";
import styles from "./productRow.style";

const ProductRow = () => {
  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={products}
          renderItem={({ data }) => <ProductCardView />}
          horizontal
          contentContainerStyle={{ columnGap: SIZES.medium }}
        />
      </View>
    </>
  );
};

export default ProductRow;

const products = [1, 2, 3, 4];
