import { StyleSheet } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },

  scrollViewTitle: {
    position: "absolute",
    top: 20,
    left: 20,
    right: 80,
    //bottom: vh(98),
  },

  nomeCategoria: {
    color: "#f2f2f2",
    textAlign: "center",
    fontFamily: "Epilogue_500Medium",
    fontSize: 30,
    width: "100%",
  },

  cardBody: {
    flex: 1,
    width: vw(100) - 40,
    height: vh(10),
    borderRadius: 40,
    padding: 20,
    marginLeft: vw(3),
    marginRight: vw(3),
    marginTop: vh(5),
    marginBottom: 50,
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

  menu_footer: {
    height: vh(10),
    width: "100%",
    position: "absolute",
    backgroundColor: "#1a1a1a",
    bottom: 0,
  },

  btn_text: {
    color: "#f2f2f2",
    fontFamily: "Epilogue_500Medium",
    fontSize: 20,
    width: vw(36),
    textAlign: "center",
  },

  btn_card_text: {
    color: "#f2f2f2",
    fontFamily: "Epilogue_500Medium",
    fontSize: 20,
    textAlign: "center",
    width: vw(70),
  },

  btn_right: {
    position: "absolute",
    right: vw(15),
    bottom: 20,
    backgroundColor: "#16a085",
  },

  btn_reset: {
    position: "absolute",
    right: 20,
    top: 20,
    backgroundColor: "#f2f2f2",
    padding: 10,
  },

  btn_left: {
    position: "absolute",
    left: vw(15),
    bottom: 20,
    backgroundColor: "#c0392b",
  },

  btn_back: {
    position: "absolute",
    left: vw(50) - 25,
    bottom: 30,
    backgroundColor: "#f2f2f2",
    padding: 10,
  },

  btn_layout: {
    padding: 15,
    borderRadius: 50,
  },
});
