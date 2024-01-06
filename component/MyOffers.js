import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, ScrollView, FlatList } from 'react-native';
import { BlurView } from 'expo-blur';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import data from '../Context';

function MyOffers() {

    const {height, width} = Dimensions.get('window');

    const {offerPressed, setOfferPressed} = useContext(data);

    const navigation = useNavigation();

    const [hostID, setHostID] = useState(null);
    const [offerData, setOfferData] = useState(null);

    useEffect(() => {
        const offerApi = async () => {
            try {
                const response = await fetch('http://192.168.1.2:4000/offer');
                const data = await response.json();
                setOfferData(data.offers);
            } catch (err) {
                console.error(err);
            }
        };

        offerApi();
    }, []);

    const asyncStorage = async () => {
        try {
            const response = await AsyncStorage.getItem('userInfo');
            setHostID(JSON.parse(response)._id);
        } catch (err) {
            console.error(err);
        }
    };

    asyncStorage();

    const goToOffer = (_id) => {
        navigation.navigate('Offer');

        const target = offerData.find((x) => x._id === _id);
        setOfferPressed(target);
    };

    return(
        <View style={[{paddingHorizontal: 20}, {paddingTop: 30}]}>
            <TouchableOpacity onPress={() => navigation.navigate('AddOffer')} style={[{flexDirection: 'row'}, {position: 'absolute'}, {top: 30}, {left: 20}, {right: 20}, {alignItems: 'center'}, {justifyContent: 'center'}, {height: height / 15}, {borderRadius: 30}, {gap: 10}, {backgroundColor: 'rgb(197, 41, 155)'}]}>
                <Ionicons name="add-circle-sharp" size={24} color="#fff" />
                <Text style={[{fontFamily: 'Poppins-Medium'}, {color: '#fff'}]}>Add an Offer</Text>
            </TouchableOpacity>

            <View style={[{marginTop: 100}, {height: height / 1.4}]}>
                <FlatList data={offerData} keyExtractor={item => item._id} renderItem={({item}) => {
                    if (hostID !== null) {
                        if (item.hostID === hostID) {
                            return(
                                <TouchableOpacity onPress={() => goToOffer(item._id)} style={[styles.offer, {height: height / 1.7}]}>
                                    <Image style={{flex: 1}} source={{uri: item.offerPhotos[0]}} />
                                    <BlurView intensity={80} tint='dark' style={[styles.description, {height: height / 6}]}>
                                        <Text style={styles.price}>{`${item.price} DA`}</Text>
                                        <Text style={styles.locationDetails}>{item.locationName}</Text>
                                    </BlurView>
                                    <Text style={styles.type}>{item.placeType.toUpperCase()}</Text>
                                    <View style={styles.rate}>
                                        <FontAwesome name="star" size={24} color="rgb(197, 41, 155)" />
                                        <Text style={styles.rateText}>4.8</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        }
                    }
                }} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    offer: {
        borderRadius: 20,
        overflow: 'hidden',
        marginBottom: 30
    },
    description: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 30,
        gap: 20
    },
    price: {
        fontSize: 25,
        color: '#fff',
        fontFamily: 'Poppins-Medium'
    },
    locationDetails: {
        color: '#fff',
        fontFamily: 'Poppins-Regular'
    },
    type: {
        position: 'absolute',
        backgroundColor: 'rgb(197, 41, 155)',
        left: 20,
        top: 20,
        color: '#fff',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 20,
        fontSize: 15,
        fontFamily: 'Poppins-Medium'
    },
    rate: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, .5)',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        right: 20,
        top: 20,
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 20
    },
    rateText: {
        color: '#fff',
        fontSize: 15,
        fontFamily: 'Poppins-Medium'
    }
});

export default MyOffers;