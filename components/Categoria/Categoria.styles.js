import { StyleSheet } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

export const styles = StyleSheet.create({
  nome: {
    marginTop: 10,
    color: "#f2f2f2",
    textAlign: "center",
    fontFamily: "Epilogue_500Medium",
    fontSize: 20,
  },
  categoria: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    alignItems: "center",
    backgroundColor: "#111",
    borderRadius: 8,
    marginBottom: 15,
    borderLeftWidth: 10,
  },

  textQuantCards: {
    color: "#f2f2f2",
    fontFamily: "Epilogue_500Medium",
    fontSize: 20,
    marginLeft: 5,
  },

  quantCards: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
