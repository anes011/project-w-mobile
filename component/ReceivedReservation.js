import { View, Text, Dimensions, ScrollView, Image, Pressable, FlatList, Alert, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const ReceivedReservation = () => {

    const navigation = useNavigation();

    const {width, height} = Dimensions.get('window');
    
    const [reservations, setReservations] = useState([]);
    const [userID, setUserID] = useState(null);
    const [user, setUser] = useState(null);
    const [acceptLoading, setAcceptLoading] = useState(false);
    const [rejectLoading, setRejectLoading] = useState(false);

    useEffect(() => {
        const reservationsApi = async () => {
            try {
                const response = await fetch('http://192.168.1.2:4000/reserve');
                const data = await response.json();

                setReservations(data.reservations);
            } catch (err) {
                console.error(err);
            }
        };

        reservationsApi();
    }, []);

    const asyncStorage = async () => {
        try {
            const response = await AsyncStorage.getItem('userInfo');
            setUserID(JSON.parse(response)._id);
        } catch (err) {
            console.error(err);
        }
    };

    asyncStorage();

    const acceptReservation = (_id) => {
        setAcceptLoading(true);

        const target = reservations.find((x) => x._id === _id);

        const asyncStorage = async () => {
            try {
                const response = await AsyncStorage.getItem('userInfo');
                setUser(JSON.parse(response));
            } catch (err) {
                console.error(err);
            }
        };

        asyncStorage();


        if (user !== null) {
            const acceptApi = async () => {
                try {
                    const response = await fetch('http://192.168.1.2:4000/accepted', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            reservistID: target.reservistID,
                            offerID: target.offerID,
                            offerTitle: target.offerTitle,
                            phoneNumber: user.phoneNumber,
                            email: user.email
                        })
                    });

                    const data = await response.json();

                    const deleteApi = async () => {
                        try {
                            const response = await fetch(`http://192.168.1.2:4000/reserve/${target._id}`, {
                                method: 'DELETE'
                            });

                            const data = await response.json();
                            setAcceptLoading(false);
                            Alert.alert('Accepted successfully!');
                        } catch (err) {
                            console.error(err);
                        }
                    };

                    deleteApi();
                } catch (err) {
                    console.error(err);
                }
            };
    
            acceptApi();
        }
    };

    const reject = (_id) => {
        setRejectLoading(true);

        const target = reservations.find((x) => x._id === _id);

        const rejectApi = async () => {
            try {
                const response = await fetch(`http://192.168.1.2:4000/reserve/${target._id}`, {
                    method: 'DELETE'
                });

                const data = await response.json();
                setRejectLoading(false);
                Alert.alert('Rejected successfully!');
                navigation.navigate('Profile');
            } catch (err) {
                console.error(err);
            }
        };

        rejectApi();
    };

  return (
    <View>
        <View style={[{flexDirection: 'row'}, {justifyContent: 'center'}, {alignItems: 'center'}, {gap: 30}, {height: height / 8}, {backgroundColor: 'rgb(197, 41, 155)'}]}>
            <Text style={[{fontFamily: 'Poppins-Bold'}, {color: '#fff'}]}>ReceivedReservations</Text>
            <Ionicons name="receipt-outline" size={24} color="#fff" />
        </View>
        
        <View style={[{padding: 20}, {height: height / 1.3}]}>
            {
                userID !== null && (
                    <FlatList data={reservations} keyExtractor={item => item._id} renderItem={({item}) => {
                        if (item.hostID === userID) {
                            return(
                                <View style={[{borderWidth: 2}, {height: height / 3}, {borderRadius: 30}, {backgroundColor: '#000'}, {marginBottom: 30}, {padding: 20}, {justifyContent: 'space-between'}]}>
                                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                                        <Ionicons name="time" size={24} color="#fff" />
                                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Regular'}]}>{`${item.date.slice(0, 4)} . ${item.date.slice(5, 7)} . ${item.date.slice(8, 10)}`}</Text>
                                    </View>

                                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                                        <Image style={[{width: 40}, {height: 40}, {borderRadius: 100 / 2}]} source={{uri: item.reservistPhoto}} />
                                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Regular'}]}>{item.reservistName}</Text>
                                    </View>

                                    <View style={[{alignItems: 'center'}]}>
                                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Bold'}, {fontSize: 40}]}>{`${item.offerPrice} / DA`}</Text>
                                    </View>

                                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                                        <MaterialIcons name="house-siding" size={24} color="#fff" />
                                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Regular'}]}>{item.offerTitle}</Text>
                                    </View>

                                    <View style={[{flexDirection: 'row'}, {justifyContent: 'space-between'}, {alignItems: 'center'}]}>
                                        <Pressable onPress={() => reject(item._id)} style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}, {backgroundColor: '#fff'}, {padding: 7}, {borderRadius: 20}, {paddingHorizontal: 30}]}>
                                            {
                                                rejectLoading ? (
                                                    <ActivityIndicator color='#000' />
                                                ) : (
                                                    <>
                                                        <AntDesign name="close" size={24} color="#000" />
                                                        <Text style={[{color: '#000'}, {fontFamily: 'Poppins-Medium'}]}>Reject</Text>
                                                    </>
                                                )
                                            }
                                        </Pressable>

                                        <Pressable onPress={() => acceptReservation(item._id)} style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}, {backgroundColor: '#fff'}, {padding: 7}, {borderRadius: 20}, {paddingHorizontal: 30}]}>
                                            {
                                                acceptLoading ? (
                                                    <ActivityIndicator color='#000' />
                                                ) : (
                                                    <>
                                                        <Feather name="check" size={24} color="#000" />
                                                        <Text style={[{color: '#000'}, {fontFamily: 'Poppins-Medium'}]}>Accept</Text>
                                                    </>
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
};

export default ReceivedReservation;