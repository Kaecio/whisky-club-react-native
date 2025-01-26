// import { View, Text, FlatList } from "react-native";
// import React, { useContext } from "react";
// // import data from "../../data/data";
// import { ListItem } from "react-native-elements";
// import { getFormatDate } from "../../utils/index";
// import Search from "../../components/Search/Search";
// import UserContext from "../../Context/UsersContext";

// interface Bottle {
//   id: number;
//   nome: string;
//   codigo: string;
//   dataCompra: string;
//   dataVencimento: string;
//   mensagem: string;
//   status: string | null;
// }

// export default function BottleList() {
//   console.log("Lista de garrafas kaecio")
//   console.warn("BottleForm");


//   const {state}: any = useContext(UserContext)

//   function getBottles({ item }: { item: Bottle }) {
//     console.log("item: ", item);
//     return (
//       <ListItem bottomDivider>
//         <ListItem.Content>
//           <ListItem.Title>{item.nome}</ListItem.Title>
//           <ListItem.Subtitle>Cod: {item.codigo}</ListItem.Subtitle>
//           <View
//             style={{ flexDirection: "row", justifyContent: "space-around" }}
//           >
//             <ListItem.Subtitle>
//               Comp: {getFormatDate(item.dataCompra)}
//             </ListItem.Subtitle>
//             <ListItem.Subtitle>
//               Venc: {getFormatDate(item.dataVencimento)}
//             </ListItem.Subtitle>
//           </View>
//           {item.status && (
//             <ListItem.Subtitle
//               style={{
//                 color: "red",
//               }}
//             >
//               {item.status}
//             </ListItem.Subtitle>
//           )}
//           <ListItem.Subtitle>{item.mensagem}</ListItem.Subtitle>
//         </ListItem.Content>
//       </ListItem>
//     );
//   }

//   return (
//     <View>
//       <Search />
//       <View>
//         <Text>Fulano</Text>
//       </View>
//       <FlatList
//         keyExtractor={(item) => item.id.toString()}
//         data={state.data.garrafas}
//         renderItem={getBottles}
//       />
//     </View>
//   );
// }
