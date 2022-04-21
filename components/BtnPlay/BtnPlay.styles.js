import { StyleSheet } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: "#f2f2f2",
    display: "flex",
    flexDirection: "row",

    padding: 28,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    position: "absolute",
    bottom: 20,
    right: 20,
  },

  view: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontSize: 20,
    color: "#1A1A1A",
    fontFamily: "Epilogue_700Bold",
  },
});
