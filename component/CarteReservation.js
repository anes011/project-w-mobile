import { View, Text, Dimensions, ScrollView, FlatList, Pressable, Alert, ActivityIndicator } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const CarteReservation = () => {

    const navigation = useNavigation();

    const {width, height} = Dimensions.get('window');

    const [reservations, setReservations] = useState([]);
    const [userID, setUserID] = useState(null);
    const [deleteLoading, setDeleteLoading] = useState(false);

    useEffect(() => {
        const reservationsApi = async () => {
            try {
                const response = await fetch('http://192.168.1.2:4000/reserve');
                const data = await response.json();

                setReservations(data.reservations);

                const asyncStorage = async () => {
                    try {
                        const response = await AsyncStorage.getItem('userInfo');
                        setUserID(JSON.parse(response)._id);
                    } catch (err) {
                        console.error(err);
                    }
                };

                asyncStorage();
            } catch (err) {
                console.error(err);
            }
        };

        reservationsApi();
    }, []);

    const deleteReservation = (_id) => {
        setDeleteLoading(true);

        const target = reservations.find((x) => x._id === _id);

        const deleteApi = async () => {
            try {
                const response = await fetch(`http://192.168.1.2:4000/reserve/${target._id}`, {
                    method: 'DELETE'
                });

                const data = await response.json();

                setDeleteLoading(false);
                Alert.alert('Reservation deleted successfully!');
                navigation.navigate('Home');
            } catch (err) {
                console.error(err);
            }
        };

        deleteApi();
    };

  return (
    <View>
        <View style={[{height: height / 8}, {backgroundColor: 'rgb(197, 41, 155)'}, {justifyContent: 'center'}, {alignItems: 'center'}, {flexDirection: 'row'}, {gap: 30}]}>
            <Text style={[{fontFamily: 'Poppins-Bold'}, {color: '#fff'}]}>My reservations</Text>
            <Feather name="shopping-bag" size={24} color="#fff" />
        </View>

        <View style={[{height: height / 1.3}, {padding: 20}]}>
            {
                userID !== null && (
                    <FlatList data={reservations} keyExtractor={item => item._id} renderItem={({item}) => {
                        if (item.reservistID === userID) {
                            return(
                                <View style={[{height: height / 3}, {borderRadius: 30}, {backgroundColor: '#000'}, {marginBottom: 30}, {padding: 20}, {justifyContent: 'space-between'}]}>
                                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                                        <Ionicons name="time" size={24} color="#fff" />
                                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Regular'}]}>{`${item.date.slice(0, 4)} . ${item.date.slice(5, 7)} . ${item.date.slice(8, 10)}`}</Text>
                                    </View>

                                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                                        <MaterialIcons name="location-on" size={24} color="#fff" />
                                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Regular'}]}>{item.locationName}</Text>
                                    </View>

                                    <View style={[{alignItems: 'center'}]}>
                                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Bold'}, {fontSize: 40}]}>{`${item.offerPrice} / DA`}</Text>
                                    </View>

                                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                                        <MaterialIcons name="house-siding" size={24} color="#fff" />
                                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Regular'}]}>{item.offerTitle}</Text>
                                    </View>

                                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 30}]}>
                                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}]}>
                                            <MaterialCommunityIcons name="dots-vertical" size={24} color="#fff" />
                                            <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Regular'}]}>Status:</Text>
                                        </View>

                                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                                            <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Regular'}]}>{item.status}</Text>
                                            <MaterialCommunityIcons name="timer-sand" size={24} color="#fff" />
                                        </View>

                                        <Pressable onPress={() => deleteReservation(item._id)} style={[{backgroundColor: '#fff'}, {height: 50}, {width: 50}, {borderRadius: 100 / 2}, {justifyContent: 'center'}, {alignItems: 'center'}, {position: 'absolute'}, {right: 0}, {bottom: 0}]}>
                                            {
                                                deleteLoading ? (
                                                    <ActivityIndicator color='#000' />
                                                ) : (
                                                    <Octicons name="trash" size={24} color="#000" />
                                                )
                                            }
                                        </Pressable>
                                    </View>
                                </View>
                            )
                        }
                    }} />
                )
            }
        </View>
    </View>
  )
}

export default CarteReservation