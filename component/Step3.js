import { View, Text, TextInput, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Step3 = () => {

  const {width, height} = Dimensions.get('window');

  return (
    <View style={[{flex: 1}, {paddingHorizontal: 20}, {justifyContent: 'center'}]}>
        <View style={[{justifyContent: 'center'}, {backgroundColor: '#fff'}, {elevation: 50}, {borderRadius: 10}]}>
          <Ionicons style={[{position: 'absolute'}, {left: 7}]} name="location-outline" size={27} color="black" />
          <TextInput style={[{height: height / 15}, {borderRadius: 10}, {paddingLeft: 40}, {fontFamily: 'Poppins-Medium'}]} placeholder='Type your location...' />
        </View>
    </View>
  )
};

export default Step3;