import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { styles } from "./styles";

export default function LabelBottle() {
  return (
    <View style={styles.container}>
      <View style={styles.label}>
        <Text style={styles.textName}>Fanderson Kaecio</Text>
        <Text style={styles.textProd}>Red Label</Text>
        <Text style={styles.textCod}>RL-0090</Text>
        <View style={styles.textDateContainer}>
          <Text style={styles.textDate}>comp: 12/02/2025</Text>
          <Text style={styles.textDate}>venc: 12/04/2025</Text>
        </View>
      </View>
    </View>
  );
}
