import { StyleSheet } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

export const styles = StyleSheet.create({
  nome: {
    color: "#f2f2f2",
    textAlign: "left",
    fontFamily: "Epilogue_500Medium",
    fontSize: 18,
    width: vw(53),
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

  edit_buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 8,
  },

  trash_button: {
    backgroundColor: "#c0392b",
    padding: 10,
    borderRadius: 50,
  },

  edit_button: {
    backgroundColor: "#16a085",
    padding: 10,
    marginRight: 15,
    borderRadius: 50,
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
