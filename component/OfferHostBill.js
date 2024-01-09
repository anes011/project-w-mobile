import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, Pressable, Alert, ActivityIndicator } from 'react-native';
import data from '../Context';
import { useContext, useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

function OfferHostBill() {

    const { width, height } = Dimensions.get('window');

    const { offerPressed, phoneNumber, email,
    acceptedDate } = useContext(data);
    
    const [host, setHost] = useState(null);

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
                phoneNumber !== null && (
                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}, {marginTop: 20}]}>
                        <Feather name="phone-call" size={24} color="#fff" />
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Medium'}]}>Phone number:</Text>
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Regular'}, {marginLeft: 10}]}>{phoneNumber}</Text>
                    </View>
                )
            }

            {
                email !== null && (
                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}, {marginTop: 20}]}>
                        <MaterialCommunityIcons name="gmail" size={24} color="#fff" />
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Medium'}]}>Email:</Text>
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Regular'}, {marginLeft: 10}]}>{email}</Text>
                    </View>
                )
            }

            {
                acceptedDate !== null && (
                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}, {marginTop: 20}, {marginBottom: 20}]}>
                        <Ionicons name="time" size={24} color="#fff" />
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Medium'}]}>Accepted on:</Text>
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Regular'}, {marginLeft: 10}]}>{`${acceptedDate.slice(0, 4)} . ${acceptedDate.slice(5, 7)} . ${acceptedDate.slice(8, 10)}`}</Text>
                    </View>
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

export default OfferHostBill;