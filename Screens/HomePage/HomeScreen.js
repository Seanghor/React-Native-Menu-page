import * as React from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import HeaderComponent from "./Cover/HeaderComponent";
import RowOfCategory from "./BodyContents/RowOfCategory";

export default function App() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <HeaderComponent style={{ backgroundColor: "white" }} />
      <RowOfCategory />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F5F6",
    alignItem: "center",
    // justifyContent: "center",
    padding: 5,
    margin: 0,
  },
});
