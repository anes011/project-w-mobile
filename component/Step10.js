import { View, TextInput, Dimensions, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import data from '../Context';
import { useContext } from 'react';

const Step10 = () => {

  const { width, height } = Dimensions.get('window');

  const checkInOutRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

  const {setCheckIn, setCheckOut} = useContext(data);

  const handleCheckIn = (text) => {
    if (checkInOutRegex.test(text)) {
      setCheckIn(text);
    }
  };

  const handleCheckOut = (text) => {
    if (checkInOutRegex.test(text)) {
      setCheckOut(text);
    }
  };

  return (
    <View style={[{flex: 2}, {justifyContent: 'center'}, {gap: 40}, {paddingHorizontal: 30}]}>
      <View style={[{justifyContent: 'center'}]}>
        <MaterialCommunityIcons style={[{position: 'absolute'}, {left: 20}, {zIndex: 1000}]} name="calendar-clock" size={30} color="black" />
        <TextInput onChangeText={handleCheckIn} style={[{height: height / 13}, {paddingLeft: 70}, {fontFamily: 'Poppins-Medium'}, {fontSize: 15}, {backgroundColor: '#fff'}, {elevation: 50}, {borderRadius: 20}]} placeholder='Check-in..., eg: 05/03/2020' />
      </View>

      <View style={[{justifyContent: 'center'}]}>
        <MaterialCommunityIcons style={[{position: 'absolute'}, {left: 20}, {zIndex: 1000}]} name="calendar-clock" size={30} color="black" />
        <TextInput onChangeText={handleCheckOut} style={[{height: height / 13}, {paddingLeft: 70}, {fontFamily: 'Poppins-Medium'}, {fontSize: 15}, {backgroundColor: '#fff'}, {elevation: 50}, {borderRadius: 20}]} placeholder='Check-out..., eg: 05/10/2020' />
      </View>
    </View>
  )
}

export default Step10