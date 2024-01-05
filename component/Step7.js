import { View, Text, TextInput, Dimensions } from 'react-native';
import data from '../Context';
import { useContext } from 'react';

const Step7 = () => {

  const {setTitle} = useContext(data);

  const titleRegex = /(?:[a-zA-Z].*){4,}/;

  const { width, height } = Dimensions.get('window');

  const handleTitle = (text) => {
    if (titleRegex.test(text)) {
      setTitle(text);
    }
  };

  return (
    <View style={[{flex: 1}, {padding: 30}, {gap: 20}]}>
      <Text style={[{fontFamily: 'Poppins-Medium'}]}>Provide a title for your house!</Text>
      <TextInput onChangeText={handleTitle} style={[{height: height / 7}, {paddingLeft: 20}, {borderRadius: 10}, {backgroundColor: '#fff'}, {elevation: 50}, {fontFamily: 'Poppins-Medium'}]} placeholder='Write a title...' />
    </View>
  )
}

export default Step7