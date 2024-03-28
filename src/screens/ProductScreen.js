import React from "react";
import { StyleSheet, View, Image, FlatList, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { productSlice } from "../store/productSlice";

const ProductScreen = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          style={styles.itemContainer}
          onPress={() => {
            // update selected product
            dispatch(productSlice.actions.setSelectedProduct(item.id));
            navigation.navigate("Product Details");
          }}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
        </Pressable>
      )}
      numColumns={2}
    />
  );
};
const styles = StyleSheet.create({
  itemContainer: {
    width: "50%",
    padding: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});
export default ProductScreen;
