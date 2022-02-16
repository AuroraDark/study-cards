import React, { useState, useEffect } from "react";
import Home from "./components/Home/Home";

import { Text, View, StyleSheet, StatusBar } from "react-native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Epilogue_400Regular,
  Epilogue_500Medium,
  Epilogue_700Bold,
} from "@expo-google-fonts/epilogue";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

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
      <NavigationContainer>
        <StatusBar hidden />
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            initialParams={{ categoryId: "a" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
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
