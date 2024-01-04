import { View, Text, TextInput, Dimensions, FlatList, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import CustomMapStyle from '../CustomMapStyle';
import data from '../Context';
import { useContext } from 'react';

const Step3 = () => {

  const {width, height} = Dimensions.get('window');

  const [autocompleteData, setAutocompleteData] = useState([]);
  const [showMap, setShowMap] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const {location, setLocation, locationName, setLocationName} = useContext(data);

  const handleAutocomplete = (text) => {
    const autocompleteApi = async () => {
      try {
        const response = await fetch(`https://api.locationiq.com/v1/autocomplete?key=pk.0ec9d380d8652120b3ec4060219decbb&q=${text}`);
        const data = await response.json();
        setAutocompleteData(data);
      } catch (err) {
        console.error(err);
      }
    };

    autocompleteApi();

    //code for showing and hiding suggestions when typing:
    if (text === '') {
      setShowSuggestions(false);
    } else {
      setShowSuggestions(true);
    }
    //end
  };

  const getCoordinates = (place_id) => {
    const target = autocompleteData.find((x) => x.place_id === place_id);
    setLocationName(target.display_name);
    setShowMap(true);

    setLocation({
      latitude: parseFloat(target.lat),
      longitude: parseFloat(target.lon),
      latitudeDelta: 0.005 * 30,
      longitudeDelta: 0.005 * 30
    });
  };

  return (
    <View style={[{flex: 1}, {paddingHorizontal: 20}, {justifyContent: 'center'}]}>
      {
        showMap ? (
          <View style={[{flex: 1}, {borderRadius: 20}, {overflow: 'hidden'}]}>
            {
              location !== null && locationName !== null && (
                <MapView region={location} style={[{flex: 1}]}>
                  <Marker coordinate={location} title={locationName} pinColor='rgb(197, 41, 155)' />
                </MapView>
              )
            }
            <Pressable onPress={() => setShowMap(false)} style={[{position: 'absolute'}, {flexDirection: 'row'}, {alignItems: 'center'}, {backgroundColor: '#fff'}, {paddingVertical: 10}, {elevation: 50}, {borderRadius: 50}, {paddingHorizontal: 5}, {bottom: 5}, {left: 5}]}>
              <Ionicons name="ios-chevron-back" size={24} color="black" />
              <Text style={[{color: 'red'}, {fontFamily: 'Poppins-Regular'}]}>Wrong location!</Text>
            </Pressable>
          </View>
        ) : (
          <>
            <View style={[{justifyContent: 'center'}, {backgroundColor: '#fff'}, {elevation: 50}, {borderRadius: 10}, {marginBottom: 10}]}>
              <Ionicons style={[{position: 'absolute'}, {left: 7}]} name="location-outline" size={27} color="black" />
              <TextInput onChangeText={(text) => handleAutocomplete(text)} style={[{height: height / 15}, {borderRadius: 10}, {paddingLeft: 40}, {fontFamily: 'Poppins-Medium'}]} placeholder='Type your location...' />
            </View>

            {
              showSuggestions && (
                <FlatList data={autocompleteData} keyExtractor={item => item.place_id} renderItem={({item}) => (
                  <Pressable onPress={() => getCoordinates(item.place_id)} style={[{paddingVertical: 15}, {paddingLeft: 10}, {backgroundColor: 'rgb(197, 41, 155)'}, {borderRadius: 20}, {marginBottom: 10}]}>
                    <Text style={[{fontFamily: 'Poppins-Medium'}, {color: '#fff'}]}>{item.display_name}</Text>
                  </Pressable>
                )} />
              )
            }
          </>
        )
      }
    </View>
  )
};

export default Step3;