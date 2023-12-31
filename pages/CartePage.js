import { View, Text } from 'react-native';
import CarteReservation from '../component/CarteReservation';
import BottomNav from '../component/BottomNav';

const CartePage = () => {
  return (
    <View style={[{flex: 1}]}>
      <CarteReservation />
      <BottomNav />
    </View>
  )
}

export default CartePage