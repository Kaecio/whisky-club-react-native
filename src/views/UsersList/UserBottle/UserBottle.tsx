import React, { useContext } from "react";
import { ListItem } from "react-native-elements";
import UsersContext from "../../../Context/UsersContext";
import { FlatList, View, Text } from "react-native";

type Bottle ={
  id: number;
  codigo: string;
  nome: string;
  status: string | null;
  mensagem: string;
  dataCompra: string;
  dataVencimento: string;
}

export default function UserBottle({ route }: any) {
  console.warn(Object.keys(route.params));
  console.log("routes: ", route.params);

  const { nome, garrafas } = route.params;
  const { state }: any = useContext(UsersContext);
  console.log("garrafas do usuario:", state);

  const garrafasDetalhes = state.data.garrafas.filter((btl) =>
    garrafas.includes(btl.id)
  );

  function getBottles({ item }: { item: Bottle }) {
    return (
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>{item.nome}</ListItem.Title>
          <ListItem.Subtitle>Código: {item.codigo}</ListItem.Subtitle>
          <ListItem.Subtitle>Compra: {item.dataCompra}</ListItem.Subtitle>
          <ListItem.Subtitle>Vencimento: {item.dataVencimento}</ListItem.Subtitle>
          <ListItem.Subtitle>Status: {item.status}</ListItem.Subtitle>
          <ListItem.Subtitle>Mensagem: {item.mensagem}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  }
  return (
    <View>
      <Text style={{ fontSize: 18, fontWeight: "bold", margin: 10 }}>
        Garrafas de {nome}
      </Text>
      <FlatList
        data={garrafasDetalhes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={getBottles}
      />
    </View>
  );
}

