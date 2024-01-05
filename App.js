import { StyleSheet, View, StatusBar, Text } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useState } from "react";
import data from "./Context";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//imported pages
import SettingsPage from './pages/SettingsPage';
import AddOfferPage from './pages/AddOfferPage';
import SuccessPage from "./pages/SuccessPage";
import ReceivedReservationsPage from "./pages/ReceivedReservationsPage";
import CartePage from './pages/CartePage';
import FavouritesPage from './pages/FavouritesPage';
import SigningPage from './pages/SigningPage';
import LoadingPage from "./pages/LoadingPage";
import MyOffersPage from "./pages/MyOffersPage";
import AcceptedReservationsPage from "./pages/AcceptedReservationsPage";
import HomePage from "./pages/HomePage";
import OfferPage from "./pages/OfferPage";
import ProfilePage from "./pages/ProfilePage";
//end of imported pages

export default function App() {

  //States to be transfered to other components with context api
  const [count, setCount] = useState(0);
  const [placeType, setPlaceType] = useState(null);
  const [spaceGiven, setSpaceGiven] = useState(null);
  const [location, setLocation] = useState(null);
  const [locationName, setLocationName] = useState(null);
  const [guests, setGuests] = useState(0);
  const [bedrooms, setBedrooms] = useState(0);
  const [beds, setBeds] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [wifi, setWifi] = useState(false);
  const [tv, setTv] = useState(false);
  const [washer, setWasher] = useState(false);
  const [parking, setParking] = useState(false);
  const [airConditioning, setAirConditioning] = useState(false);
  const [pool, setPool] = useState(false);
  const [firstAid, setFirstAid] = useState(false);
  const [fireExtinguisher, setFireExtinguisher] = useState(false);
  const [offerPhotos, setOfferPhotos] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [price, setPrice] = useState(null);
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  //end of states for context


  //Navigation set up:
  const Stack = createNativeStackNavigator();



  //Fonts code:
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
  };
  //end of fonts code

  return (
    <View style={styles.app} onLayout={onLayoutRootView}>
      <StatusBar style="auto" />
      <data.Provider value={{ count, setCount, placeType, 
      setPlaceType, spaceGiven,setSpaceGiven, 
      location, setLocation, locationName, setLocationName,
      guests, setGuests, bedrooms, setBedrooms, beds, setBeds, 
      bathrooms, setBathrooms, wifi, setWifi, tv, setTv, washer, 
      setWasher, parking, setParking, airConditioning, 
      setAirConditioning, pool, setPool, firstAid, setFirstAid, 
      fireExtinguisher, setFireExtinguisher, offerPhotos,
      setOfferPhotos, title, setTitle, description, setDescription,
      price, setPrice, checkIn, setCheckIn, checkOut, setCheckOut }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Loading" screenOptions={{
            contentStyle: {backgroundColor: '#fff'},
            headerTransparent: true,
            headerBackVisible: false,
            headerTitleStyle: {color: 'rgba(255, 255, 255, 0)'}
          }}>
            <Stack.Screen name="Sign" component={SigningPage} />
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="Profile" component={ProfilePage} />
            <Stack.Screen name="Offer" component={OfferPage} />
            <Stack.Screen name="Myoffers" component={MyOffersPage} />
            <Stack.Screen name="AcceptedReservations" component={AcceptedReservationsPage} />
            <Stack.Screen name="Settings" component={SettingsPage} />
            <Stack.Screen name="AddOffer" component={AddOfferPage} />
            <Stack.Screen name="Success" component={SuccessPage} />
            <Stack.Screen name="Received" component={ReceivedReservationsPage} />
            <Stack.Screen name="Carte" component={CartePage} />
            <Stack.Screen name="Favourites" component={FavouritesPage} />
            <Stack.Screen name="Loading" component={LoadingPage} />
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
