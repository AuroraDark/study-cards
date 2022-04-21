import { StyleSheet } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

export const styles = StyleSheet.create({
  categoriasList: {
    paddingLeft: 20 - vw(3),
    paddingRight: 20 - vw(3),
  },

  view: {
    height: vh(65),
  },

  semCategoriasMensagem: {
    marginTop: 10,
    color: "#f2f2f2",
    textAlign: "center",
    fontFamily: "Epilogue_500Medium",
    fontSize: 20,
  },
});
