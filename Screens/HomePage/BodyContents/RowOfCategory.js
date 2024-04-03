import React from "react";
import { DATA } from "../../../Services/database/data";
import {
  Text,
  View,
  Image,
  StyleSheet,
  FlatList,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import ItemCard from "./cardComponent";

export default function RowOfCategory() {
  const Component = ({ category }) => {
    return (
      <View style={styles.categoryRow}>
        <View style={styles.categoryTitle}>
          <Text style={styles.categoryText}>
            Top course in{" "}
            <Text style={styles.cateName}>{category.category_name}</Text>
          </Text>
        </View>
        <View style={styles.row}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {category.service.map((item, key) => (
              <TouchableOpacity key1={key} style={styles.content}>
                <ItemCard
                  imgUrl={item.img}
                  name={item.name}
                  title={item.title}
                  price={item.price}
                />
                {/* === Card ========= */}
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        {/* -------------------------- */}
        <View style={styles.lineHr} />
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}></View>
        <View>
          {DATA.map((item, key) => (
            <Component category={item} />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flexDirection: "row",
    padding: 10,
  },

  categoryTitle: {
    backgroundColor: "#F3F5F6",
    padding: 20,
  },

  categoryText: {
    fontSize: 24,
    fontWeight: "500",
    color: "#857A73",
    fontWeight: "bold",
  },

  content: {
    // backgroundColor: "#fff",
    width: 190,
    marginHorizontal: 10,
    height: 220,
    padding: 5,
    alignItems: "center",
    backgroundColor: "#E5ECF0",
    borderRadius: 10,
    height: 250,
    // borderColor: "blue",
    // borderWidth: 2,
    textShadowColor: "rgba(255, 255, 255, 1)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: "white",

    // == border shadow
    shadowColor: "#857A73",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },

  row: {
    flexDirection: "row",
    height: 270,
    // borderColor: "red",
    // borderWidth: 2,
  },

  categoryRow: {
    height: 370,
    backgroundColor: "#F3F5F6",
    // borderColor: "blue",
    // borderWidth: 2,
  },

  cateName: {
    color: "#70B9D8",
  },

  lineHr: {
    borderBottomColor: "#857A73",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginHorizontal: 10,
  },
});
