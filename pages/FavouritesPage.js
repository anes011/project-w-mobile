import { View, Text } from 'react-native';
import Favourite from '../component/Favourite';
import BottomNav from '../component/BottomNav';

const FavouritesPage = () => {
  return (
    <View style={{flex: 1}}>
      <Favourite />
      <BottomNav />
    </View>
  )
}

export default FavouritesPage