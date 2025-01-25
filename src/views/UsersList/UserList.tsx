import { View, FlatList } from "react-native";
import React, { useContext } from "react";
// import data from "../../data/data";
import { ListItem } from "react-native-elements";
import { getFormatPassword } from "../../utils/index";
import { Icon } from "@rneui/themed";
import Search from "../../components/Search/Search";
import UsersContext from "../../Context/UsersContext";

interface User {
  id: number;
  nome: string;
  dataNascimento: string;
  garrafas: Array<any>;
}

export default function UserList(props: any) {
  console.warn("props: ", props);

  const { state, dispatch }: any = useContext(UsersContext);
  console.log("estado: ", state);

  function getUser({ item }: { item: User }) {
    console.log("UserListe", item);
    return (
      <ListItem
        bottomDivider
        key={item.id}
        onPress={() => {
          props.navigation.navigate("UserBottle", {
            nome: item.nome,
            garrafas: item.garrafas,
          });
        }}
      >
        <ListItem.Content>
          <ListItem.Title>{item.nome}</ListItem.Title>
          <ListItem.Subtitle>
            Senha: {getFormatPassword(item.dataNascimento)}
          </ListItem.Subtitle>
        </ListItem.Content>
        <Icon
          type="material-community"
          name="bottle-wine"
          // btn de adicionar garrafa
          onPress={() => console.log("edit")}
        />
        <Icon
          type="material-community"
          name="pencil"
          // btn de editar usuario
          // onPress={() => console.log("editar user")}
          onPress={() =>
            dispatch({
              type: "edit",
              payload: item,
            })
          }
        />
      </ListItem>
    );
  }

  return (
    <View>
      <Search />
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={state.data.usuarios}
        renderItem={getUser}
      />
    </View>
  );
}
