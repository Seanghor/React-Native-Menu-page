import React from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import RowScroll from "./RowScroll";

export default function Category() {
  return (
    <View style={styles.allCategoryBlog}>
      <View style={styles.cateTitle}>
        <View>
          <Text style={{ color: "#534C47", fontWeight: "bold", fontSize: 20 }}>
            Categories
          </Text>
        </View>

        <TouchableOpacity>
          <Text style={{ color: "#949AB7", fontWeight: "400", fontSize: 15 }}>
            See all
          </Text>
        </TouchableOpacity>
      </View>

      <RowScroll />
    </View>
  );
}

const styles = StyleSheet.create({
  allCategoryBlog: {
    backgroundColor: "#F3F5F6",
  },
  cateTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginBottom: 5,
    marginTop: 1,
    padding: 10,
    paddingHorizontal: 10,
  },

});
