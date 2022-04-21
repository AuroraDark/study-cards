import React from "react";
import { Text, View, StyleSheet, StatusBar } from "react-native";
import { NativeRouter, Route, Routes } from "react-router-native";
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
import ConfirmDelete from "./components/ConfirmDelete/ConfirmDelete";
import AddCategoria from "./components/AddCategoria/AddCategoria";

export default function App() {
  let [fontsLoaded] = useFonts({
    Epilogue_400Regular,
    Epilogue_500Medium,
    Epilogue_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NativeRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/home-categoria/:id/:cor/:nome"
            element={<HomeCategoria />}
          />
          <Route
            path="/add-card/:categoriaId/:cor/:nome"
            element={<AddCard />}
          />

          <Route path="/add-categoria" element={<AddCategoria />} />

          <Route
            path="/confirm-delete/:who/:categoriaId/:categoriaNome/:cor/:nome/:id/"
            element={<ConfirmDelete />}
          />
        </Routes>
      </NativeRouter>
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
