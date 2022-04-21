import { StyleSheet } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

export const styles = StyleSheet.create({
  backgroud: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },

  modal: {
    backgroundColor: "#2a2a2a",
    padding: 20,
    margin: 20,
    borderRadius: 38,
  },

  btn_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  categoryText: {
    color: "#f2f2f2",
    fontFamily: "Epilogue_500Medium",
    fontSize: 25,
    marginBottom: 40,
  },

  plus: {
    fontSize: 50,
    color: "#1A1A1A",
  },

  btn_text: {
    color: "#f2f2f2",
    fontFamily: "Epilogue_700Bold",
    fontSize: 17,
    width: vw(32),
    textAlign: "center",
  },

  btn_right: {
    backgroundColor: "#16a085",
  },

  btn_left: {
    backgroundColor: "#c0392b",
  },

  btn_layout: {
    padding: 10,
    borderRadius: 50,
  },
});
