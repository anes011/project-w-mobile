import { View, Text, Pressable } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useState, useContext } from 'react';
import data from '../Context';

const Step5 = () => {

    const {wifi, setWifi, tv, setTv, washer, setWasher, parking,
    setParking, airConditioning, setAirConditioning, pool, setPool,
    firstAid, setFirstAid, fireExtinguisher, 
    setFireExtinguisher} = useContext(data);

  return (
    <View style={[{flex: 1}, {gap: 20}, {paddingHorizontal: 60}, {paddingVertical: 30}]}>
        <View style={[{flexDirection: 'row'}, {justifyContent: 'space-between'}]}>
            <Pressable onPress={() => setWifi(!wifi)} style={[{padding: 10}, {borderRadius: 10}, {backgroundColor: wifi ? 'rgb(197, 41, 155)' : '#fff'}, {elevation: 50}]}>
                <AntDesign name="wifi" size={24} color={wifi ? '#fff' : '#000'} />
            </Pressable>
            <Pressable onPress={() => setTv(!tv)} style={[{padding: 10}, {borderRadius: 10}, {backgroundColor: tv ? 'rgb(197, 41, 155)' : '#fff'}, {elevation: 50}]}>
                <Ionicons name="tv-outline" size={24} color={tv ? '#fff' : '#000'} />
            </Pressable>
            <Pressable onPress={() => setWasher(!washer)} style={[{padding: 10}, {borderRadius: 10}, {backgroundColor: washer ? 'rgb(197, 41, 155)' : '#fff'}, {elevation: 50}]}>
                <MaterialCommunityIcons name="washing-machine" size={24} color={washer ? '#fff' : '#000'} />
            </Pressable>
        </View>

        <View style={[{flexDirection: 'row'}, {justifyContent: 'space-between'}]}>
            <Pressable onPress={() => setParking(!parking)} style={[{padding: 10}, {borderRadius: 10}, {backgroundColor: parking ? 'rgb(197, 41, 155)' : '#fff'}, {elevation: 50}]}>
                <MaterialCommunityIcons name="parking" size={24} color={parking ? '#fff' : '#000'} />
            </Pressable>
            <Pressable onPress={() => setAirConditioning(!airConditioning)} style={[{padding: 10}, {borderRadius: 10}, {backgroundColor: airConditioning ? 'rgb(197, 41, 155)' : '#fff'}, {elevation: 50}]}>
                <FontAwesome name="snowflake-o" size={24} color={airConditioning ? '#fff' : '#000'} />
            </Pressable>
            <Pressable onPress={() => setPool(!pool)} style={[{padding: 10}, {borderRadius: 10}, {backgroundColor: pool ? 'rgb(197, 41, 155)' : '#fff'}, {elevation: 50}]}>
                <FontAwesome5 name="swimming-pool" size={24} color={pool ? '#fff' : '#000'} />
            </Pressable>
        </View>

        <View style={[{flexDirection: 'row'}, {gap: 60}, {justifyContent: 'center'}]}>
            <Pressable onPress={() => setFirstAid(!firstAid)} style={[{padding: 10}, {borderRadius: 10}, {backgroundColor: firstAid ? 'rgb(197, 41, 155)' : '#fff'}, {elevation: 50}]}>
                <FontAwesome5 name="first-aid" size={24} color={firstAid ? '#fff' : '#000'} />
            </Pressable>
            <Pressable onPress={() => setFireExtinguisher(!fireExtinguisher)} style={[{padding: 10}, {borderRadius: 10}, {backgroundColor: fireExtinguisher ? 'rgb(197, 41, 155)' : '#fff'}, {elevation: 50}]}>
                <FontAwesome name="fire-extinguisher" size={24} color={fireExtinguisher ? '#fff' : '#000'} />
            </Pressable>
        </View>
    </View>
  )
}

export default Step5