import { View, Text, Dimensions, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import CustomMapStyle from '../CustomMapStyle';
import data from '../Context';
import { useContext } from 'react';

const OfferMap = () => {

  const { width, height } = Dimensions.get('window');

  const {offerPressed} = useContext(data);

  return (
    <View style={[{height: height / 2}, {borderBottomLeftRadius: 50}, {borderBottomRightRadius: 50}, {overflow: 'hidden'}, {backgroundColor: '#fff'}, {elevation: 50}]}>
      {
        offerPressed !== null && (
          <MapView region={JSON.parse(offerPressed.location)} style={{flex: 1}}>
            <Marker coordinate={JSON.parse(offerPressed.location)} title={offerPressed.locationName} pinColor='rgb(197, 41, 155)' />
          </MapView>
        )
      }
    </View>
  )
}

export default OfferMap