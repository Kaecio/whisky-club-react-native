import { View, Text, TextInput, Pressable } from "react-native";
import React from "react";
import { styles } from "./styles";

export default function BottleForm({route, navigation}: any) {
  console.log("naviation: ", navigation)
  console.warn("BottleForm");
  return (
    <>
      <View style={styles.form}>
        <Text>BottleForm</Text>
        <TextInput style={styles.input} placeholder="Nome" />
      </View>
      <View style={styles.form}>
        <Text>Código da garrafa</Text>
        <TextInput style={styles.input} placeholder="Código da Garrafa" />
      </View>
      <View style={styles.form}>
        <Text>Senha</Text>
        <TextInput style={styles.input} placeholder="Senha" keyboardType="decimal-pad" />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={()=>{
          navigation.goBack()
        } }>
          <Text style={styles.text}>Salvar</Text>
        </Pressable>
      </View>
    </>
  );
}
 