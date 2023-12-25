import { View, Text, StyleSheet } from 'react-native';
import Offer from '../component/Offer';
import data from '../Context';
import { useContext } from 'react';

function OfferPage() {

    const {offerImageFullScreen, setOfferImageFullScreen} = useContext(data);

    return(
        <View style={offerImageFullScreen ? styles.offerPageActive : styles.offerPage}>
            <Offer />
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