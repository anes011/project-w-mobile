import { View, Text, StyleSheet, ScrollView, Dimensions, Image, TouchableOpacity, FlatList } from 'react-native';
import { BlurView } from 'expo-blur';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import data from '../Context';

function Offers() {

    const navigation = useNavigation();

    const { width, height } = Dimensions.get('window');

    const { setOfferPressed } = useContext(data);

    const [offersData, setOffersData] = useState([]);
    const [userID, setUserID] = useState(null);

    useEffect(() => {
        const offersApi = async () => {
            try {
                const response = await fetch('http://192.168.1.2:4000/offer');
                const data = await response.json();
                setOffersData(data.offers);
            } catch (err) {
                console.error(err);
            }
        };

        offersApi();
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

    const goToOffer = (_id) => {
        const target = offersData.find((x) => x._id === _id);
        setOfferPressed(target);
        
        navigation.navigate('Offer');
    };

    return(
        <View style={[styles.offerContainer, {height: height / 1.7}]}>
            <FlatList data={offersData} keyExtractor={item => item._id} renderItem={({item}) => {
                if (userID !== null) {
                    if (item.hostID !== userID) {
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
    )
};

const styles = StyleSheet.create({
    offerContainer: {
        marginTop: 45
    },
    offer: {
        borderRadius: 20,
        overflow: 'hidden',
        position: 'relative',
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

export default Offers;