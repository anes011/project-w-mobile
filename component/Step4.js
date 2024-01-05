import { View, Text, Pressable } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { useState, useContext } from 'react';
import data from '../Context';

const Step4 = () => {

    const {guests, setGuests, bedrooms, setBedrooms, beds, setBeds,
    bathrooms, setBathrooms} = useContext(data);

    const decrementGuests = () => {
        if (guests <= 0) {
            return
        } else {
            setGuests(guests - 1)
        }
    };

    const decrementBedrooms = () => {
        if (bedrooms <= 0) {
            return
        } else {
            setBedrooms(bedrooms - 1)
        }
    };

    const decrementBeds = () => {
        if (beds <= 0) {
            return
        } else {
            setBeds(beds - 1)
        }
    };

    const decrementBathrooms = () => {
        if (bathrooms <= 0) {
            return
        } else {
            setBathrooms(bathrooms - 1)
        }
    };

  return (
    <View style={[{flex: 1}, {justifyContent: 'space-between'}, {paddingHorizontal: 60}, {paddingVertical: 10}]}>
        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}]}>
            <Text style={{fontFamily: 'Poppins-Medium'}}>Guests</Text>
            <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                <Pressable onPress={() => setGuests(guests + 1)} style={[{height: 30}, {width: 30}, {borderRadius: 100 / 2}, {justifyContent: 'center'}, {alignItems: 'center'}, {backgroundColor: 'rgb(197, 41, 155)'}]}>
                    <Feather name="plus" size={24} color="#fff" />
                </Pressable>
                <Text style={{fontFamily: 'Poppins-Medium'}}>{guests}</Text>
                <Pressable onPress={decrementGuests} style={[{height: 30}, {width: 30}, {borderRadius: 100 / 2}, {justifyContent: 'center'}, {alignItems: 'center'}, {backgroundColor: 'rgb(197, 41, 155)'}]}>
                    <Feather name="minus" size={24} color="#fff" />
                </Pressable>
            </View>
        </View>

        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}]}>
            <Text style={{fontFamily: 'Poppins-Medium'}}>Bedrooms</Text>
            <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                <Pressable onPress={() => setBedrooms(bedrooms + 1)} style={[{height: 30}, {width: 30}, {borderRadius: 100 / 2}, {justifyContent: 'center'}, {alignItems: 'center'}, {backgroundColor: 'rgb(197, 41, 155)'}]}>
                    <Feather name="plus" size={24} color="#fff" />
                </Pressable>
                <Text style={{fontFamily: 'Poppins-Medium'}}>{bedrooms}</Text>
                <Pressable onPress={decrementBedrooms} style={[{height: 30}, {width: 30}, {borderRadius: 100 / 2}, {justifyContent: 'center'}, {alignItems: 'center'}, {backgroundColor: 'rgb(197, 41, 155)'}]}>
                    <Feather name="minus" size={24} color="#fff" />
                </Pressable>
            </View>
        </View>

        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}]}>
            <Text style={{fontFamily: 'Poppins-Medium'}}>Beds</Text>
            <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                <Pressable onPress={() => setBeds(beds + 1)} style={[{height: 30}, {width: 30}, {borderRadius: 100 / 2}, {justifyContent: 'center'}, {alignItems: 'center'}, {backgroundColor: 'rgb(197, 41, 155)'}]}>
                    <Feather name="plus" size={24} color="#fff" />
                </Pressable>
                <Text style={{fontFamily: 'Poppins-Medium'}}>{beds}</Text>
                <Pressable onPress={decrementBeds} style={[{height: 30}, {width: 30}, {borderRadius: 100 / 2}, {justifyContent: 'center'}, {alignItems: 'center'}, {backgroundColor: 'rgb(197, 41, 155)'}]}>
                    <Feather name="minus" size={24} color="#fff" />
                </Pressable>
            </View>
        </View>

        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}]}>
            <Text style={{fontFamily: 'Poppins-Medium'}}>Bathrooms</Text>
            <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                <Pressable onPress={() => setBathrooms(bathrooms + 1)} style={[{height: 30}, {width: 30}, {borderRadius: 100 / 2}, {justifyContent: 'center'}, {alignItems: 'center'}, {backgroundColor: 'rgb(197, 41, 155)'}]}>
                    <Feather name="plus" size={24} color="#fff" />
                </Pressable>
                <Text style={{fontFamily: 'Poppins-Medium'}}>{bathrooms}</Text>
                <Pressable onPress={decrementBathrooms} style={[{height: 30}, {width: 30}, {borderRadius: 100 / 2}, {justifyContent: 'center'}, {alignItems: 'center'}, {backgroundColor: 'rgb(197, 41, 155)'}]}>
                    <Feather name="minus" size={24} color="#fff" />
                </Pressable>
            </View>
        </View>
    </View>
  )
}

export default Step4