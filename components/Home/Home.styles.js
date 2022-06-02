import { StyleSheet } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

export const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    width: "100%",
    height: "100%",
  },

  categoryText: {
    color: "#f2f2f2",
    marginLeft: 20,
    marginTop: 80,
    fontFamily: "Epilogue_500Medium",
    fontSize: 40,
  },

  searchIcon: {
    position: "absolute",
    top: 35,
    right: 35,
  },

  searchInput: {
    width: vw(90),
    color: "#f2f2f2",
    textAlign: "left",
    fontFamily: "Epilogue_700Bold",
    fontSize: 17,
    borderBottomWidth: 2,
    borderBottomColor: "#454545",
    position: "absolute",
    top: 20,
    left: 20,
    padding: 12,
  },

  cardList: {
    height: "100%",
    marginTop: "5%",
  },
});
