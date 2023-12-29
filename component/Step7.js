import { View, Text, TextInput, Dimensions } from 'react-native';

const Step7 = () => {

    const { width, height } = Dimensions.get('window');

  return (
    <View style={[{flex: 1}, {padding: 30}, {gap: 20}]}>
      <Text style={[{fontFamily: 'Poppins-Medium'}]}>Provide a title for your house!</Text>
      <TextInput style={[{height: height / 7}, {paddingLeft: 20}, {borderRadius: 10}, {backgroundColor: '#fff'}, {elevation: 50}, {fontFamily: 'Poppins-Medium'}]} placeholder='Write a title...' />
    </View>
  )
}

export default Step7