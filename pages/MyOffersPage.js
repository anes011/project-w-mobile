import { View, Text } from 'react-native';
import MyOffers from '../component/MyOffers';
import BottomNav from '../component/BottomNav';

function MyOffersPage() {
    return(
        <View style={{flex: 1}}>
            <MyOffers />
            <BottomNav />
        </View>
    )
};

export default MyOffersPage;