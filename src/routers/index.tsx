import { NavigationContainer, DefaultTheme  } from "@react-navigation/native";
import StackRoutes from "./stack.routes";

export function Routes() {

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      text: '#00f',
    },
  };
  return (
    <NavigationContainer theme={ MyTheme }>
      <StackRoutes />
    </NavigationContainer>
  );
}