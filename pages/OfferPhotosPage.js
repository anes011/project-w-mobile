import { View, Text, FlatList, Image, Dimensions } from 'react-native';
import data from '../Context';
import { useContext, useEffect } from 'react';

const OfferPhotosPage = () => {

    const { offerPressed } = useContext(data);

    const { width, height } = Dimensions.get('screen');

  return (
    <View style={[{flex: 1}]}>
      {
        offerPressed !== null && (
            <FlatList horizontal data={offerPressed.offerPhotos} renderItem={({item}) => (
                <Image style={[{flex: 1}, {width: width}, {height: height}, {resizeMode: 'stretch'}]} source={{uri: item}} />
            )} />
        )
      }
    </View>
  )
}

export default OfferPhotosPage;