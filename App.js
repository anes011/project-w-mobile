import MainPage from './pages/MainPage';
import SignPage from './pages/SignPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {

  const Stack = createStackNavigator(); 

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'white'}
      }}>
        <Stack.Screen name="Home" component={MainPage} />
        <Stack.Screen name='Sign' component={SignPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}