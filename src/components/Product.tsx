import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Product({ name, category, price, index }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerIndex}>
        <Text style={styles.nameText}>{index}</Text>
      </View>
      <View style={styles.containerInformation}>
        <Text style={styles.nameText}>
          {name} ({category})
        </Text>
        <Text style={styles.priceText}>${price.toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#F7DC6F",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
    flexDirection: "row",
    gap: 5,
    marginTop:5
  },
  nameText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  priceText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
  },
  containerIndex: {
    flex: 1,
    borderColor: "black",
    borderRightWidth: 2,
    padding:5,
    justifyContent:"center",
    alignItems:"center",
    marginVertical:5
  },
  containerInformation: {
    flex: 5,

    padding:5
  },
});
