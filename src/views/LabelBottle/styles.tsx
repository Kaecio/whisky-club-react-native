import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginTop: 40,
    width: "80%",
    height: 140,
    borderColor: "#000",
    borderRadius: 2,
  },
  textDateContainer: {
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    gap: 4,
  },
  textName: {
    fontSize: 28,
  },
  textProd: {
    fontSize: 22,
  },
  textCod: {
    fontSize: 22,
  },
  textDate:{
    fontSize: 18,
  }
});
