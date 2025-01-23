import { View, Text } from "react-native";
import React from "react";
import MainButton from "../../components/MainButton/MainButton";
import { styles } from "./styles";

interface ButtonProps {
  type: string;
  screen: string;
}

const buttons: ButtonProps[] = [
  {
    type: "clientes",
    screen: "UserList",
  },
  {
    type: "garrafas",
    screen: "BottleForm",
  },
];

export default function Home({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      {buttons.map((button, index) => (
        <MainButton
          key={index}
          type={button.type}
          onPress={() => navigation.navigate(button.screen)}
        />
      ))}
    </View>
  );
}
