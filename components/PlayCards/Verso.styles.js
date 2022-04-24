import { StyleSheet } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

export const verso_styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },

  verse_button: {
    position: "absolute",
    right: 23,
    bottom: 23,
  },

  trash_button: {
    position: "absolute",
    left: 23,
    //top: 0,
    bottom: 23,
    backgroundColor: "#c0392b",
    padding: 15,
    borderRadius: 50,
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

  categoryItem: {
    marginBottom: 10,
    borderRadius: 10,
    width: "100%",
  },

  cardBody: {
    flex: 1,
    width: vw(90),
    height: vh(70),
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
    marginBottom: 70,
  },

  cardTitulo: {
    marginTop: 10,
    width: vw(70),
    color: "#f2f2f2",
    textAlign: "left",
    fontFamily: "Epilogue_700Bold",
    fontSize: 25,
    //backgroundColor: "#1a1a1a80",
    borderRadius: 8,
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
