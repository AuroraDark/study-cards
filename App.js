import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { NativeRouter, Route, Routes } from "react-router-native";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Epilogue_400Regular,
  Epilogue_500Medium,
  Epilogue_700Bold,
} from "@expo-google-fonts/epilogue";
import Home from "./components/Home/Home";
import HomeCategoria from "./components/HomeCategoria/HomeCategoria";
import AddCard from "./components/AddCard/AddCard";
import EditCard from "./components/EditCard/EditCard";
import ConfirmDelete from "./components/ConfirmDelete/ConfirmDelete";
import AddCategoria from "./components/AddCategoria/AddCategoria";
import EditCategoria from "./components/EditCategoria/EditCategoria";
import { SafeAreaView } from "react-native-safe-area-context";
import * as NavigationBar from "expo-navigation-bar";
import PlayCards from "./components/PlayCards/PlayCards";

export default function App() {
  let [fontsLoaded] = useFonts({
    Epilogue_400Regular,
    Epilogue_500Medium,
    Epilogue_700Bold,
  });

  NavigationBar.setBackgroundColorAsync("#111");
  NavigationBar.setButtonStyleAsync("light");

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <NativeRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home-categoria/:id" element={<HomeCategoria />} />
            <Route path="/add-card/:categoriaId" element={<AddCard />} />

            <Route path="/add-categoria" element={<AddCategoria />} />

            <Route
              path="/edit-card/:cor/:id/:categoriaId"
              element={<EditCard />}
            />

            <Route path="/edit-categoria/:id" element={<EditCategoria />} />

            <Route
              path="/confirm-delete/:who/:categoriaId/:id"
              element={<ConfirmDelete />}
            />

            <Route
              path="/play-cards/:categoriaId/:prevCard"
              element={<PlayCards />}
            />
          </Routes>
        </NativeRouter>
        <StatusBar style="light" backgroundColor="#1A1A1A" hidden={false} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },

  safeArea: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
