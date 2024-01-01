import { View, Text, Dimensions, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import CustomMapStyle from '../CustomMapStyle';

const OfferMap = () => {

  const { width, height } = Dimensions.get('window');

  const location = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.005 * 30,
    longitudeDelta: 0.005 * 30
  }

  return (
    <View style={[{height: height / 2}, {borderBottomLeftRadius: 50}, {borderBottomRightRadius: 50}, {overflow: 'hidden'}, {backgroundColor: '#fff'}, {elevation: 50}]}>
      <MapView region={location} style={{flex: 1}}>
        <Marker coordinate={location} title='San Francisco' pinColor='rgb(197, 41, 155)' />
      </MapView>
    </View>
  )
}

export default OfferMap