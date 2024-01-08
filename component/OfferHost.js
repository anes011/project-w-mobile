import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, Pressable, Alert, ActivityIndicator } from 'react-native';
import data from '../Context';
import { useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

function OfferHost() {

    const { width, height } = Dimensions.get('window');

    const { offerPressed } = useContext(data);
    
    const [host, setHost] = useState(null);
    const [user, setUser] = useState(null);

    const [confirmReservation, setConfirmReservation] = useState(false);
    const [reservationLoading, setReservationLoading] = useState(false);

    useEffect(() => {
        const usersApi = async () => {
            try {
                const response = await fetch('http://192.168.1.2:4000/users');
                const data = await response.json();

                data.users.map((x) => {
                    if (offerPressed !== null) {
                        if (x._id === offerPressed.hostID) {
                            setHost(x);
                        }
                    }
                })
            } catch (err) {
                console.error(err);
            }
        };

        usersApi();
    }, [host]);

    useEffect(() => {
        const asyncStorage = async () => {
            try {
                const response = await AsyncStorage.getItem('userInfo');
                setUser(JSON.parse(response));
            } catch (err) {
                console.error(err);
            }
        };
    
        asyncStorage();
    }, []);

    const confirm = () => {
        setConfirmReservation(true);
    };

    const reserve = () => {
        setReservationLoading(true);

        if (user !== null && offerPressed !== null) {
            const reserveApi = async () => {
                try {
                    const response = await fetch('http://192.168.1.2:4000/reserve', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            reservistID: user._id,
                            hostID: offerPressed.hostID,
                            locationName: offerPressed.locationName,
                            offerPrice: offerPressed.price,
                            offerTitle: offerPressed.title,
                            reservistPhoto: user.profilePhoto,
                            reservistName: user.fullName
                        })
                    });

                    const data = await response.json();

                    setReservationLoading(false);
                    setConfirmReservation(false);
                    Alert.alert('Reserved successfully!');
                } catch (err) {
                    console.error(err);
                }
            };

            reserveApi();
        }
    };

    return(
        <View style={[{marginTop: 20}]}>
            {
                host !== null && (
                    <View style={styles.offerHost}>
                        <Image style={styles.hostImage} source={{uri: host.profilePhoto}} />
                        <View>
                            <Text style={styles.hostName}>{host.fullName}</Text>
                            <Text style={[{fontFamily: 'Poppins-Regular'}, {color: '#fff'}]}>{`A member since:     ${host.date.slice(0, 4)} . ${host.date.slice(5, 7)} . ${host.date.slice(8, 10)}`}</Text>
                        </View>
                    </View>
                )
            }

            {
                offerPressed !== null && user !== null && (
                    <>
                        {
                            offerPressed.hostID !== user._id && (
                                <Pressable onPress={confirm} style={[styles.reserveBtn, {height: height / 10}]}>
                                    {
                                        confirmReservation ? (
                                            <View style={[{flexDirection: 'row'}, {gap: 40}]}>
                                                <Pressable onPress={reserve} style={[{backgroundColor: '#000'}, {padding: 10}, {borderRadius: 30}, {alignItems: 'center'}]}>
                                                    {
                                                        reservationLoading ? (
                                                            <ActivityIndicator color='#fff' />
                                                        ) : (
                                                            <>
                                                                <Feather name="check" size={24} color="#fff" />
                                                                <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Regular'}]}>Reserve now!</Text>
                                                            </>
                                                        )
                                                    }
                                                </Pressable>

                                                <Pressable onPress={() => setConfirmReservation(false)} style={[{backgroundColor: '#000'}, {padding: 10}, {borderRadius: 30}, {alignItems: 'center'}]}>
                                                    <AntDesign name="close" size={24} color="#fff" />
                                                    <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Regular'}]}>That was a mistake!</Text>
                                                </Pressable>
                                            </View>
                                        ) : (
                                            <Text style={styles.reserveText}>Reserve</Text>
                                        )
                                    }
                                </Pressable>
                            )
                        }
                    </>
                )
            }
        </View>
    )
};

const styles = StyleSheet.create({
    offerHost: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        paddingBottom: 10
    },
    hostImage: {
        height: 70,
        width: 70,
        borderRadius: 100 / 2
    },
    hostName: {
        fontFamily: 'Poppins-Bold',
        color: '#fff'
    },
    reserveBtn: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
    },
    reserveText: {
        color: '#000',
        fontFamily: 'Poppins-Bold',
        fontSize: 15
    }
});

export default OfferHost;