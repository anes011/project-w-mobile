import { View } from 'react-native';
import BottomNav from '../component/BottomNav';
import OfferMap from '../component/OfferMap';
import OfferInfo from '../component/OfferInfo';

function OfferPage() {

    return(
        <View style={[{flex: 1}]}>
            <OfferMap />
            <OfferInfo />
            <BottomNav />
        </View>
    )
};

export default OfferPage;