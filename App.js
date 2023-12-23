import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, StatusBar } from 'react-native';
import HomePage from './pages/HomePage';

export default function App() {

  const Stack = createStackNavigator(); 

  return (
    <NavigationContainer>
      <StatusBar style='auto' />
      <Stack.Navigator initialRouteName='Home' screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'white'}
      }}>
        <Stack.Screen name='Home' component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}