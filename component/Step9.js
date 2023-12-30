import { View, Text, TextInput, Dimensions } from 'react-native';
import { Foundation } from '@expo/vector-icons';

const Step9 = () => {

  const {width, height} = Dimensions.get('window');

  return (
    <View style={[{flex: 1}, {justifyContent: 'center'}, {paddingHorizontal: 30}]}>
      <View style={[{justifyContent: 'center'}]}>
        <Foundation style={[{position: 'absolute'}, {left: 20}, {zIndex: 1000}]} name="dollar" size={30} color="black" />
        <TextInput style={[{height: height / 13}, {borderRadius: 20}, {paddingLeft: 50}, {fontFamily: 'Poppins-Medium'}, {backgroundColor: '#fff'}, {elevation: 50}, {fontSize: 20}]} placeholder='Set your price.../DA' keyboardType='numeric' />
      </View>
    </View>
  )
};

export default Step9;