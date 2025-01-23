import { View, Text } from 'react-native'
import React from 'react'
import {NativeStackScreenProps} from "@react-navigation/native-stack"

type StackParamList ={
  UserBottle:{
    nome: string;
  }
}

type UserBottleProps = NativeStackScreenProps<StackParamList, "UserBottle">

export default function UserBottle({route}:UserBottleProps) {
  console.warn(Object.keys(route.params))

  const {nome} = route.params
  return (
    <View>
      <Text>Minhas Garrafa do {nome}</Text>
    </View>
  )
}