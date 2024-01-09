import { View, Text, Image, Dimensions, TouchableOpacity, Pressable, FlatList, Alert, ActivityIndicator } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState, useContext } from 'react';
import data from '../Context';
import { Octicons } from '@expo/vector-icons';

function AcceptedReservation() {

    const navigation = useNavigation();

    const { width, height } = Dimensions.get('window');

    const { setOfferPressed, setPhoneNumber,
    setEmail, setAcceptedDate } = useContext(data);

    const [user, setUser] = useState(null);
    const [acceptedData, setAcceptedData] = useState([]);
    const [deleteLoading, setDeleteLoading] = useState(false);

    const asyncStorage = async () => {
        try {
            const response = await AsyncStorage.getItem('userInfo');
            setUser(JSON.parse(response));
        } catch (err) {
            console.error(err);
        }
    };

    asyncStorage();

    useEffect(() => {
        const acceptedApi = async () => {
            try {
                const response = await fetch('http://192.168.1.2:4000/accepted');
                const data = await response.json();
                
                setAcceptedData(data.acceptedReservations);
            } catch (err) {
                console.error(err);
            }
        };

        acceptedApi();
    }, []);

    const goToBill = (_id) => {
        const target = acceptedData.find((x) => x._id === _id);

        const offersApi = async () => {
            try {
                const response = await fetch('http://192.168.1.2:4000/offer');
                const data = await response.json();

                data.offers.map((x) => {
                    if (x._id === target.offerID) {
                        setOfferPressed(x);
                    }
                })
            } catch (err) {
                console.error(err);
            }
        };

        offersApi();

        setPhoneNumber(target.phoneNumber);
        setEmail(target.email);
        setAcceptedDate(target.date);

        navigation.navigate('OfferBill');
    };

    const remove = (_id) => {
        setDeleteLoading(true);

        const target = acceptedData.find((x) => x._id === _id);

        const deleteApi = async () => {
            try {
                const response = await fetch(`http://192.168.1.2:4000/accepted/${target._id}`, {
                    method: 'DELETE'
                });

                const data = await response.json();
                setDeleteLoading(false);
                Alert.alert('Deleted successfully!');
                navigation.navigate('Profile');
            } catch (err) {
                console.error(err);
            }
        };

        deleteApi();
    };

    return(
        <View>
            <View style={[{height: height / 8}, {backgroundColor: 'rgb(197, 41, 155)'}, {justifyContent: 'center'}, {alignItems: 'center'}, {flexDirection: 'row'}, {gap: 30}]}>
                <Text style={[{fontFamily: 'Poppins-Bold'}, {color: '#fff'}]}>Accepted Reservations</Text>
                <AntDesign name="checkcircle" size={24} color="#fff" />
            </View>

            {
                user !== null && (
                    <FlatList data={acceptedData} keyExtractor={item => item._id} renderItem={({item}) => {
                        if (item.reservistID === user._id) {
                            return(
                                <Pressable onPress={() => goToBill(item._id)} style={[{marginTop: 30}, {marginHorizontal: 20}, {height: height / 10}, {borderRadius: 30}, {elevation: 50}, {backgroundColor: '#fff'}, {marginBottom: 20}, {flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'center'}, {gap: 30}]}>
                                    <Text style={{fontFamily: 'Poppins-Medium'}}>{item.offerTitle}</Text>
                                    <MaterialIcons name="house-siding" size={27} color="black" />
                                    
                                    <Pressable onPress={() => remove(item._id)} style={[{backgroundColor: '#000'}, {height: 50}, {width: 50}, {borderRadius: 100 / 2}, {justifyContent: 'center'}, {alignItems: 'center'}, {position: 'absolute'}, {right: 20}]}>
                                        {
                                            deleteLoading ? (
                                                <ActivityIndicator color='#fff' />
                                            ) : (
                                                <Octicons name="trash" size={24} color="#fff" />
                                            )
                                        }
                                    </Pressable>
                                </Pressable>
                            )
                        }
                    }} />
                )
            }
        </View>
    )
};

export default AcceptedReservation;