import { View, Text } from "react-native";
import React from "react";
import {
  StyleSheet,
  ScrollView,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { styleDiff } from "react-native-reanimated/src/reanimated2/hook/utils";
import CategoryComponent from "./CategoryComponent";

export default function HeaderScreen() {
  return (
    <View>
      <Image
        source={{
          uri: "https://i.ytimg.com/vi/32rRoppnamA/maxresdefault.jpg",
        }}
        style={{ height: 240, borderRadius: 4, width: "100%" }}
      />
      <View style={styles.coverText}>
        <Text style={{ color: "#857A73", fontWeight: "bold", fontSize: 30 }}>
          Learning that fits
        </Text>
        <Text style={{ color: "#857A73", marginBottom: 5 }}>
          Skills for your present (and future)
        </Text>
      </View>
      <TouchableOpacity style={styles.tapBtn}>
        <Text style={{ color: "#616569", fontSize: 16, fontWeight: "500" }}>
          Tab to explore popular course
        </Text>
      </TouchableOpacity>

      {/* ======================================= */}
      <View style={styles.ctg}>
        <CategoryComponent />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({


  coverText: {
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
    backgroundColor: "#F3F5F6",
  },

  tapBtn: {
    flex: 1,
    backgroundColor: "#EADCC0",
    justifyContent: "center",
    alignItems: "center",
    // marginHorizontal: 10,
    borderRadius: 5,
    height: 40,

    textShadowColor: "rgba(255, 255, 255, 1)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: "white",

    // --- shadow border
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,

    margin: 10,
  },
});
