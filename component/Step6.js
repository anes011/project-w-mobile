import { View, Text, Pressable, Alert, Image } from 'react-native'
import * as DocumentPicker from 'expo-document-picker';
import data from '../Context';
import { useContext } from 'react';

const Step6 = () => {

    const {offerPhotos, setOfferPhotos} = useContext(data);

    const pickDocument = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync({
                type: '*/*',
                multiple: true
            });

            if (result.canceled) {
                Alert.alert('No photos were selected!')
            } else if (result.assets.length >= 3) {
                setOfferPhotos(result);
            };
        } catch (err) {
            console.error(err);
        }
    };

  return (
    <View style={[{flex: 1}]}>
        <Pressable onPress={pickDocument} style={[{flex: 1}, {alignItems: 'center'}]}>
            <View style={[{flex: 1}, {width: '100%'}]}>
                <Image style={{flex: 1}} source={{uri: 'https://www.apple.com/newsroom/images/product/app-store/Apple_App_Store_10th_anniversary_07102018_big.gif.large.gif'}} />
            </View>
            <Text style={{fontFamily: 'Poppins-Medium'}}>Press to select some photos of your house!</Text>
        </Pressable>
    </View>
  )
}

export default Step6