import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
// import Cover from "./Cover/HeaderComponent";
import { DATA } from "../../../Services/database/data";


export default class RowScroll extends Component {
  render() {
    return (
      <View>
        
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {DATA.map((item, i) =>
            !(i % 2) ? (
              //   == Row 1
              <TouchableOpacity style={styles.btnOption} key={i}>
                <Text style={{ color: "#857A73", padding: 5 }}>
                  {item.category_name}
                </Text>
              </TouchableOpacity>
            ) : null
          )}
        </ScrollView>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {DATA.map((item, i) =>
            i % 2 ? (
              //   == Row 2
              <TouchableOpacity style={styles.btnOption} key={i}>
                <Text style={{ color: "#857A73", padding: 5 }}>
                  {item.category_name}
                </Text>
              </TouchableOpacity>
            ) : null
          )}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnOption: {
    padding: 5,
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 50,
    margin: 3,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
