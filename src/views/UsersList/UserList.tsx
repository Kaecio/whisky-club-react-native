import { View, FlatList } from "react-native";
import React from "react";
import data from "../../data/data";
import { ListItem } from "react-native-elements";
import { getFormatPassword } from "../../utils/index";
import { Icon } from "@rneui/themed";
import Search from "../../components/Search/Search";

interface User {
  id: number;
  nome: string;
  dataNascimento: string;
  garrafas: Array<any>
}

export default function UserList(props: any) {
  console.warn("props: ",props)

  function getUser({ item }: { item: User }) {
    console.log("UserListe", item)
    return (
      <ListItem bottomDivider key={item.id} onPress={()=>{props.navigation.navigate("UserBottle", {nome: item.nome})}}>
        <ListItem.Content>
          <ListItem.Title>{item.nome}</ListItem.Title>
          <ListItem.Subtitle>
            Senha: {getFormatPassword(item.dataNascimento)}
          </ListItem.Subtitle>
        </ListItem.Content>
        <Icon
          type="material-community"
          name="bottle-wine"
          onPress={() => console.log("edit")}
        />
        <Icon
          type="material-community"
          name="pencil"
          onPress={() => console.log("edit")}
        />
      </ListItem>
    );
  }

  return (
    <View>
      <Search />
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={data.usuarios}
        renderItem={getUser}
      />
    </View>
  );
}
