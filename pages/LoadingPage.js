import { useEffect } from 'react';
import { View, Text, Image, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
        setTimeout(() => {
            navigation.reset({
                index: 0,
                routes: [{ name: 'Sign' }]
            });
        }, 6000);
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