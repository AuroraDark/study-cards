import { StyleSheet } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

export const styles = StyleSheet.create({
  cardBody: {
    flex: 1,
    width: vw(80),
    height: vh(65),
    borderRadius: 40,
    padding: 20,
    marginLeft: vw(3),
    marginRight: vw(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  scrollView: {
    marginTop: "5%",
    height: "82%",
  },

  cardTitulo: {
    marginTop: 40,
    color: "#f2f2f2",
    textAlign: "center",
    fontFamily: "Epilogue_500Medium",
    fontSize: 30,
  },

  dica: {
    marginTop: 20,
    textAlign: "center",
    color: "#f2f2f2",
    fontFamily: "Epilogue_500Medium",
    fontSize: 18,
  },

  elevation: {
    elevation: 15,
    shadowColor: "#121212",
  },
});
