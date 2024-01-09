import { View, Text, Dimensions, ScrollView, Animated } from 'react-native';
import OfferSlider from './OfferSlider';
import OfferDetails from './OfferDetails';
import OfferHostBill from './OfferHostBill';
import { useEffect } from 'react';

const OfferInfoBill = () => {

    const { width, height } = Dimensions.get('window');

    const value = new Animated.Value(height);

    useEffect(() => {
        Animated.timing(value, {
            toValue: 0,
            duration: 1000,
            delay: 1000,
            useNativeDriver: true
        }).start()
    });

  return (
    <Animated.View style={[{borderTopRightRadius: 50}, {borderTopLeftRadius: 50}, {flex: 1}, {paddingHorizontal: 20}, {backgroundColor: 'rgb(197, 41, 155)'}, {transform: [{translateY: value}]}]}>
        <View style={[{height: height / 2.8}]}>
            <ScrollView>
                <OfferDetails />
                <OfferSlider />
                <OfferHostBill />
            </ScrollView>
        </View>
    </Animated.View>
  )
};

export default OfferInfoBill;