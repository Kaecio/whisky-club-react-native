import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 2,
  },
  container: {
    backgroundColor: "#fff",
    width: "80%",
    height: 200,
    borderRadius: 6,
    gap: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 10,
    width: 150,
  },
  buttonC: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 10,
    width: 150,
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
