import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottleList from "../views/BottleList/BottleList";
import BottleForm from "../views/BottleForm/BotteForm";
import UserList from "../views/UsersList/UserList";
import UserBottle from "../views/UsersList/UserBottle/UserBottle";
import Home from "../views/Home/Home";
import { Button, Icon } from "react-native-elements";

const { Screen, Navigator } = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Navigator initialRouteName="Home" screenOptions={layout}>
      <Screen
        name="Home"
        component={Home}
        options={({ navigation }: any) => ({
          title: "Clube do Whisky",
        })}
      />
      <Screen
        name="UserList"
        component={UserList}
        options={({ navigation }: any) => ({
          title: "Clientes",
        })}
      />
      <Screen
        name="UserBottle"
        component={UserBottle}
        options={({ navigation }: any) => ({
          title: "Minhas Garrafas",
        })}
      />
      <Screen
        name="BottleList"
        component={BottleList}
        options={({ navigation }: any) => ({
          title: "Lista de Garrafas",
          headerRight: () => (
            <Button
              onPress={() => {
                navigation.navigate("BottleForm");
              }}
              type="clear"
              icon={<Icon name="add" size={25} color="#fff" />}
            />
          ),
        })}
      />

      <Screen
        name="BottleForm"
        component={BottleForm}
        options={{
          title: "Cadastrar Garrafa",
        }}
      />
    </Navigator>
  );
}

const layout = {
  headerStyle: {
    backgroundColor: "#581845",
  },
  headerTintColor: "#fff",
};
