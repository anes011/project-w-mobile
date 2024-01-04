import { View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import data from '../Context';
import { useContext } from 'react';

const Step2 = () => {

  const {spaceGiven, setSpaceGiven} = useContext(data);

  return (
    <View style={[{flex: 1}, {flexDirection: 'row'}, {justifyContent: 'center'}, {alignItems: 'center'}, {gap: 30}]}>
      <Pressable onPress={() => setSpaceGiven('entire-place')} style={[{alignItems: 'center'}, {padding: 10}, {borderRadius: 5}, {backgroundColor: spaceGiven === 'entire-place' ? 'rgb(197, 41, 155)' : '#fff'}, {elevation: 50}, {gap: 10}]}>
        <Ionicons name="home-outline" size={24} color={spaceGiven === 'entire-place' ? '#fff' : '#000'} />
        <Text style={[{fontFamily: 'Poppins-Medium'}, {color: spaceGiven === 'entire-place' ? '#fff' : '#000'}]}>Entire place</Text>
      </Pressable>

      <Pressable onPress={() => setSpaceGiven('room')} style={[{alignItems: 'center'}, {padding: 10}, {borderRadius: 5}, {backgroundColor: spaceGiven === 'room' ? 'rgb(197, 41, 155)' : '#fff'}, {elevation: 50}, {gap: 10}]}>
        <MaterialCommunityIcons name="door" size={24} color={spaceGiven === 'room' ? '#fff' : '#000'} />
        <Text style={[{fontFamily: 'Poppins-Medium'}, {color: spaceGiven === 'room' ? '#fff' : '#000'}]}>A room</Text>
      </Pressable>

      <Pressable onPress={() => setSpaceGiven('shared-room')} style={[{alignItems: 'center'}, {padding: 10}, {borderRadius: 5}, {backgroundColor: spaceGiven === 'shared-room' ? 'rgb(197, 41, 155)' : '#fff'}, {elevation: 50}, {gap: 10}]}>
        <MaterialCommunityIcons name="door-sliding" size={24} color={spaceGiven === 'shared-room' ? '#fff' : '#000'} />
        <Text style={[{fontFamily: 'Poppins-Medium'}, {color: spaceGiven === 'shared-room' ? '#fff' : '#000'}]}>A shared room</Text>
      </Pressable>
    </View>
  )
}

export default Step2