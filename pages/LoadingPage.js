import { useEffect } from 'react';
import { View, Text, Image, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoadingPage = () => {

    const navigation = useNavigation();

    const value = new Animated.Value(0);

    useEffect(() => {
        Animated.timing(value, {
            toValue: 1,
            duration: 1000,
            delay: 2000,
            useNativeDriver: true
        }).start()
    });

    useEffect(() => {
        const asyncStorage = async () => {
            try {
                const response = await AsyncStorage.getItem('userInfo');
                if (response !== null) {
                    setTimeout(() => {
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'Home' }]
                        });
                    }, 6000);
                } else {
                    setTimeout(() => {
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'Sign' }]
                        });
                    }, 6000);
                }
            } catch (err) {
                console.error(err);
            }
        };

        asyncStorage();
    });

  return (
    <View style={[{flex: 1}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
        <Animated.View style={{opacity: value}}>
            <Image style={[{transform: [{scale: .3}]}]} source={require('../assets/Images&logos/8768130386_58b51bc6-862e-4b4c-9fac-92bdfcac9129.png')} />
        </Animated.View>
    </View>
  )
}

export default LoadingPage