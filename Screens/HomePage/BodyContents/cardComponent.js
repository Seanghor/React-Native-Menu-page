import { Text, View, Image, StyleSheet } from "react-native";

import { useState } from "react";

export default function ItemCard({ imgUrl, name, title, price }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imgUrl }} style={styles.itemImg} />
      <View style={{ flex: 1, paddingHorizontal: 5 }}>
        <Text style={styles.textTitle}>{title}</Text>
        <Text style={styles.textName}>{name}</Text>

        <Text style={styles.textPrice}>${price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: "space-between",
    // alignItems: "center",
    width: 170,
    backgroundColor: "#E5ECF0",
  },

  textTitle: {
    color: "#4D4946",
    fontWeight: "bold",
    marginBottom: 10,
    paddingTop: 10,
    fontSize: 15,
    // paddingHorizontal: 2,
  },

  textName: { color: "#838386", marginBottom: 5 },

  textPrice: { color: "black", fontFamily: "Cochin" },

  itemImg: {
    flex: 1,
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
    borderRadius: 10,
    // aspectRatio: 1,
    width: 170,

    justifyContent: "center",
  },
});
