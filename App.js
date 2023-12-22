import MainPage from './pages/MainPage';
import SignPage from './pages/SignPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartupPage from './pages/StartupPage';
import { StyleSheet, View, StatusBar } from 'react-native';

export default function App() {

  const Stack = createStackNavigator(); 

  return (
    <NavigationContainer>
      <StatusBar style='auto' />
      <Stack.Navigator initialRouteName='Startup' screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'white'}
      }}>
        <Stack.Screen name='Home' component={MainPage} />
        <Stack.Screen name='Sign' component={SignPage} />
        <Stack.Screen name='Startup' component={StartupPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    borderWidth: 4,
    borderColor: 'green'
  }
});