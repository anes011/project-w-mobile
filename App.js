import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View, StatusBar } from "react-native";
import HomePage from "./pages/HomePage";
import OfferPage from "./pages/OfferPage";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useState } from "react";
import data from "./Context";
import TestPage from "./pages/TestPage";

export default function App() {
  const [offerImageFullScreen, setOfferImageFullScreen] = useState(false);

  const Stack = createStackNavigator();

  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded] = useFonts({
    "Poppins-Thin": require("./assets/fonts/Poppins-Thin.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.app} onLayout={onLayoutRootView}>
      <data.Provider value={{ offerImageFullScreen, setOfferImageFullScreen }}>
        <NavigationContainer>
          <StatusBar style="auto" />
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
              cardStyle: { backgroundColor: "white" },
            }}
          >
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="Offer" component={OfferPage} />
            <Stack.Screen name="Test" component={TestPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </data.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});
