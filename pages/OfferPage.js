import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import data from '../Context';
import { useContext } from 'react';
import OfferSlider from '../component/OfferSlider';
import OfferDetails from '../component/OfferDetails';
import OfferHost from '../component/OfferHost';
import BottomNav from '../component/BottomNav';

function OfferPage() {

    const {offerImageFullScreen, setOfferImageFullScreen} = useContext(data);

    const { width, height } = Dimensions.get('window');

    return(
        <View style={{flex: 1}}>
            <View style={{height: height / 1.20}}>
                <ScrollView scrollEnabled={offerImageFullScreen ? false : true} style={offerImageFullScreen ? styles.offerPageActive : styles.offerPage}>
                    <OfferSlider />
                    <OfferDetails />
                    <OfferHost />
                </ScrollView>
            </View>
            <BottomNav />
        </View>
    )
};

const styles = StyleSheet.create({
    offerPage: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20
    },
    offerPageActive: {
        flex: 1
    }
});

export default OfferPage;