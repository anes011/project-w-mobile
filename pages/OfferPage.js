import { View, Text, StyleSheet, ScrollView } from 'react-native';
import data from '../Context';
import { useContext } from 'react';
import OfferSlider from '../component/OfferSlider';
import OfferDetails from '../component/OfferDetails';
import OfferHost from '../component/OfferHost';

function OfferPage() {

    const {offerImageFullScreen, setOfferImageFullScreen} = useContext(data);

    return(
        <ScrollView scrollEnabled={offerImageFullScreen ? false : true} style={offerImageFullScreen ? styles.offerPageActive : styles.offerPage}>
            <OfferSlider />
            <OfferDetails />
            <OfferHost />
        </ScrollView>
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