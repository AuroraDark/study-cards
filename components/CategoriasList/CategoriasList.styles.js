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

  msgCriar: {
    backgroundColor: "#2b2b2b",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: vw(60),
    marginLeft: vh(10),
    marginTop: vh(18),
    borderRadius: 20,
  },

  exampleAddBtn: {
    color: "#2b2b2b",
    textAlign: "center",
    fontFamily: "Epilogue_500Medium",
    fontSize: 40,
    backgroundColor: "#1a1a1a",
    width: 60,
    paddingBottom: 10,
    borderRadius: 50,
  },

  semCategoriasMensagem: {
    margin: 10,
    color: "#1a1a1a",
    textAlign: "center",
    fontFamily: "Epilogue_700Bold",
    fontSize: 25,
  },
});
