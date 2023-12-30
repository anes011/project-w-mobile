import { View, Text, Image, Dimensions, Pressable, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const SuccessPage = () => {

    const navigation = useNavigation();

    const {width, height} = Dimensions.get('window');

    const value = new Animated.Value(height);

    useEffect(() => {
        Animated.timing(value, {
            toValue: 0,
            delay: 500,
            duration: 500,
            useNativeDriver: true
        }).start()
    });

  return (
    <View style={[{flex: 1}]}>
        <Image style={[{height: height / 2}]} source={{uri: 'https://cdn.dribbble.com/users/206390/screenshots/3532189/media/9ade9d41326e1e6b335f986cd3062bb0.gif'}} />
        <Animated.View style={[{flex: 1}, {borderTopLeftRadius: 30}, {borderTopRightRadius: 30}, {backgroundColor: 'rgb(197, 41, 155)'}, {elevation: 50}, {justifyContent: 'center'}, {alignItems: 'center'}, {gap: 30}, {transform: [{translateY: value}]}]}>
            <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Regular'}]}>Your offer has been published successfully</Text>
                <Ionicons name="checkmark-circle" size={24} color="#fff" />
            </View>

            <Pressable onPress={() => navigation.navigate('Myoffers')} style={[{padding: 20}, {borderRadius: 20}, {backgroundColor: '#fff'}]}>
                <Text style={{fontFamily: 'Poppins-Medium'}}>See my offer</Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('Home')}>
                <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Medium'}]}>Go home</Text>
            </Pressable>
        </Animated.View>
    </View>
  )
}

export default SuccessPage