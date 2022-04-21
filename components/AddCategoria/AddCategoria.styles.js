import { StyleSheet } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    width: "100%",
    height: "100%",
  },

  subtitulo: {
    color: "#888",
    textAlign: "left",
    fontFamily: "Epilogue_500Medium",
    marginBottom: 0,
    fontSize: 20,
    marginLeft: 20,
    marginRight: 20,
  },

  color_card: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  cardText: {
    marginTop: vh(8),
    color: "#f2f2f2",
    textAlign: "center",
    fontFamily: "Epilogue_500Medium",
    fontSize: 30,
  },

  card_example: {
    width: vw(59),
    height: vh(50),
    marginRight: 20,
    borderRadius: 30,
  },

  colorItem: {
    marginTop: 10,
    borderRadius: 10,
    width: 60,
    height: 60,
  },

  color: {
    flex: 1,
    borderRadius: 8,
    padding: 20,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  colorsList: {
    alignItems: "center",
  },

  colorText: {
    color: "#f2f2f2",
    fontFamily: "Epilogue_500Medium",
    fontSize: 20,
    textAlign: "center",
  },

  color_container: {
    borderRadius: 8,
    marginLeft: 20,
    padding: 15,
    width: vw(25),
    height: vh(50),
    backgroundColor: "#2a2a2a",
  },

  header_detalhe: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  close_detalhe: {
    backgroundColor: "#c0392b",
    padding: 4,
    paddingTop: 0,
    width: 32,
    borderRadius: 50,
  },

  cardTituloDetalhe: {
    width: vw(70),
    color: "#f2f2f2",
    textAlign: "left",
    fontFamily: "Epilogue_700Bold",
    fontSize: 17,
    //borderBottomWidth: 2,
    //borderBottomColor: "#f2f2f2",
  },

  btn_card: {
    position: "absolute",
    bottom: 20,
    backgroundColor: "#1a1a1a",
    borderRadius: 50,
    textAlign: "center",
    padding: 12,
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

  btn_card_text_x: {
    color: "#f2f2f2",
    fontFamily: "Epilogue_500Medium",
    fontSize: 20,
    textAlign: "center",
  },

  btn_right: {
    position: "absolute",
    right: 20,
    bottom: 20,
  },

  btn_left: {
    position: "absolute",
    left: 20,
    bottom: 20,
    backgroundColor: "#c0392b",
  },

  btn_layout: {
    backgroundColor: "#16a085",
    padding: 10,
    borderRadius: 50,
  },

  header: {
    width: "100%",
  },

  titulo: {
    color: "#f2f2f2",
    marginLeft: 20,
    marginTop: 20,
    fontFamily: "Epilogue_500Medium",
    fontSize: 40,
  },

  categoria: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    marginTop: 10,
  },

  categoryText: {
    color: "#f2f2f2",
    marginLeft: 10,
    fontFamily: "Epilogue_500Medium",
    fontSize: 23,
  },

  scrollView: {
    marginTop: "5%",
    marginBottom: 70,
  },

  cardNome: {
    margin: 20,
    color: "#f2f2f2",
    textAlign: "left",
    fontFamily: "Epilogue_500Medium",
    fontSize: 25,
    backgroundColor: "#2a2a2a",
    borderRadius: 8,
    padding: 10,
    //borderWidth: 1,
    //borderColor: "#f2f2f2",
  },

  cardResposta: {
    marginTop: 10,
    width: vw(70),
    color: "#f2f2f2",
    textAlign: "left",
    fontFamily: "Epilogue_500Medium",
    fontSize: 17,
    backgroundColor: "#1a1a1a60",
    borderRadius: 8,
    //borderWidth: 1,
    // borderColor: "#f2f2f2",
    padding: 8,
  },

  elevation: {
    elevation: 15,
    shadowColor: "#121212",
  },
});
