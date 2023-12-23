import { View, Text, StyleSheet } from 'react-native';
import Nav from '../component/Nav';
import Offers from '../component/Offers';
import BottomNav from '../component/BottomNav';

function HomePage() {
    return(
        <View style={styles.homePage}>
            <Nav />
            <Offers />
            <BottomNav />
        </View>
    )
};

const styles = StyleSheet.create({
    homePage: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 40
    }
});

export default HomePage;