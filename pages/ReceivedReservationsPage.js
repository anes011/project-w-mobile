import { View, Text } from 'react-native';
import ReceivedReservation from '../component/ReceivedReservation';
import BottomNav from '../component/BottomNav';

const ReceivedReservationsPage = () => {
  return (
    <View style={[{flex: 1}]}>
      <ReceivedReservation />
      <BottomNav />
    </View>
  )
}

export default ReceivedReservationsPage