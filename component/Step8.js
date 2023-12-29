import { View, Text, TextInput, Dimensions } from 'react-native'
import React from 'react'

const Step8 = () => {

    const { width, height } = Dimensions.get('window');

  return (
    <View style={[{flex: 1}, {padding: 30}, {gap: 20}]}>
      <Text style={[{fontFamily: 'Poppins-Medium'}]}>Provide a description!</Text>
      <TextInput style={[{height: height / 7}, {paddingLeft: 20}, {borderRadius: 10}, {backgroundColor: '#fff'}, {elevation: 50}, {fontFamily: 'Poppins-Medium'}]} placeholder='Describe your house...' />
    </View>
  )
}

export default Step8