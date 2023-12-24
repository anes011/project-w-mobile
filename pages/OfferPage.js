import { View, Text, StyleSheet } from 'react-native';
import OfferSlider from '../component/OfferSlider';
import OfferDetails from '../component/OfferDetails';
import OfferHost from '../component/OfferHost';
import Nav from '../component/Nav';

function OfferPage() {
    return(
        <View style={styles.offerPage}>
            <Nav />
            <OfferSlider />
            <OfferDetails />
            <OfferHost />
        </View>
    )
};

const styles = StyleSheet.create({
    offerPage: {
        flex: 1,
        padding: 10
    }
});

export default OfferPage;