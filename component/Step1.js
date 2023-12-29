import { View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

const Step1 = () => {

    const [placeType, setPlaceType] = useState(null);

  return (
    <View style={[{flex: 1}, {flexDirection: 'row'}, {justifyContent: 'center'}, {alignItems: 'center'}, {gap: 50}]}>
        <Pressable onPress={() => setPlaceType('house')} style={[{padding: 15}, {borderRadius: 5}, {elevation: 50}, {backgroundColor: '#fff'}]}>
            <Ionicons name="home-outline" size={30} color={placeType === 'house' ? 'rgb(197, 41, 155)' : '#000'} />
        </Pressable>

        <Pressable onPress={() => setPlaceType('apartment')} style={[{padding: 15}, {borderRadius: 5}, {elevation: 50}, {backgroundColor: '#fff'}]}>
            <MaterialIcons name="apartment" size={30} color={placeType === 'apartment' ? 'rgb(197, 41, 155)' : '#000'} />
        </Pressable>
    </View>
  )
};

export default Step1;