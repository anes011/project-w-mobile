import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import data from '../Context';
import { useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

function OfferHost() {

    const { width, height } = Dimensions.get('window');

    const { offerPressed } = useContext(data);
    
    const [host, setHost] = useState(null);
    const [userID, setUserID] = useState(null);

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
                host !== null && userID !== null && (
                    <>
                        {
                            host._id !== userID && (
                                <TouchableOpacity style={[styles.reserveBtn, {height: height / 10}]}>
                                    <Text style={styles.reserveText}>Reserve</Text>
                                </TouchableOpacity>
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