import { StyleSheet, View, StatusBar, Text } from "react-native";
import HomePage from "./pages/HomePage";
import OfferPage from "./pages/OfferPage";
import ProfilePage from "./pages/ProfilePage";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useState } from "react";
import data from "./Context";
import MyOffersPage from "./pages/MyOffersPage";
import AcceptedReservationsPage from "./pages/AcceptedReservationsPage";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsPage from './pages/SettingsPage';
import AddOfferPage from './pages/AddOfferPage';
import SuccessPage from "./pages/SuccessPage";

export default function App() {
  
  const [offerImageFullScreen, setOfferImageFullScreen] = useState(false);

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

  const Stack = createNativeStackNavigator();

  return (
    <View style={styles.app} onLayout={onLayoutRootView}>
      <StatusBar style="auto" />
      <data.Provider value={{ offerImageFullScreen, setOfferImageFullScreen }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" screenOptions={{
            contentStyle: {backgroundColor: '#fff'},
            headerTransparent: true,
            headerBackVisible: false,
            headerTitleStyle: {color: 'rgba(255, 255, 255, 0)'}
          }}>
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="Profile" component={ProfilePage} />
            <Stack.Screen name="Offer" component={OfferPage} />
            <Stack.Screen name="Myoffers" component={MyOffersPage} />
            <Stack.Screen name="AcceptedReservations" component={AcceptedReservationsPage} />
            <Stack.Screen name="Settings" component={SettingsPage} />
            <Stack.Screen name="AddOffer" component={AddOfferPage} />
            <Stack.Screen name="Success" component={SuccessPage} />
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
