import { View, Text } from 'react-native';
import AcceptedReservation from '../component/AcceptedReservation';
import BottomNav from '../component/BottomNav';

function AcceptedReservationsPage() {
    return(
        <View style={{flex: 1}}>
            <AcceptedReservation />
            <BottomNav />
        </View>
    )
};

export default AcceptedReservationsPage;