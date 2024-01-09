import { View, Text } from 'react-native';
import OfferMap from '../component/OfferMap';
import OfferInfoBill from '../component/OfferInfoBill';
import BottomNav from '../component/BottomNav';

const OfferBillPage = () => {
  return (
    <View style={{flex: 1}}>
        <OfferMap />
        <OfferInfoBill />
        <BottomNav />
    </View>
  )
};

export default OfferBillPage;