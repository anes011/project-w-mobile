import { View, Text, StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';
import { useContext } from 'react';
import data from '../Context';

function Offer() {

    const { width, height } = Dimensions.get('window');

    const {offerImageFullScreen, setOfferImageFullScreen} = useContext(data);

    const location = {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    }

    return(
        <ScrollView scrollEnabled={offerImageFullScreen ? false : true} style={styles.offer}>
            <View style={[offerImageFullScreen ? styles.sliderContainerActive : styles.sliderContainer, offerImageFullScreen ? {height: height} : {height: height / 2}]}>
                <ScrollView horizontal>
                    <Image style={{width: width}} source={{uri: 'https://cdn.onekindesign.com/wp-content/uploads/2019/11/Striking-Modern-Villa-Design-Marmol-Radziner-02-1-Kindesign.jpg'}} />
                    <Image style={{width: width}} source={{uri: 'https://cdn.onekindesign.com/wp-content/uploads/2019/11/Striking-Modern-Villa-Design-Marmol-Radziner-02-1-Kindesign.jpg'}} />
                    <Image style={{width: width}} source={{uri: 'https://cdn.onekindesign.com/wp-content/uploads/2019/11/Striking-Modern-Villa-Design-Marmol-Radziner-02-1-Kindesign.jpg'}} />
                    <Image style={{width: width}} source={{uri: 'https://cdn.onekindesign.com/wp-content/uploads/2019/11/Striking-Modern-Villa-Design-Marmol-Radziner-02-1-Kindesign.jpg'}} />
                </ScrollView>

                <BlurView intensity={80} tint='dark' style={[styles.offerInfo, {height: height / 5.5}]}>
                    <View style={styles.priceRate}>
                        <Text style={styles.priceText}>$100,000</Text>
                        <View style={styles.rateFavourite}>
                            <View style={styles.rate}>
                                <FontAwesome name="star" size={24} color="rgb(197, 41, 155)" />
                                <Text style={styles.rateText}>4.8</Text>
                            </View>
                            <View style={styles.favourite}>
                                <Fontisto name="favorite" size={22} color="#fff" />
                            </View>
                        </View>
                    </View>

                    <View style={styles.typeLocation}>
                        <View style={styles.type}>
                            <Text style={styles.typeText}>House</Text>
                            <Entypo name="dot-single" size={24} color="#fff" />
                        </View>
                        <TouchableOpacity onPress={() => setOfferImageFullScreen(!offerImageFullScreen)}>
                            <MaterialIcons name={offerImageFullScreen ? 'fullscreen-exit' : 'fullscreen'} size={30} color="#fff" />
                        </TouchableOpacity>
                    </View>
                </BlurView>
            </View>

            <View style={styles.details}>
                <View style={styles.amenitiesPart1}>
                    <View style={styles.amenitiesPart1CardContainer}>
                        <View style={styles.amenitiesPart1Card}>
                            <Octicons name="people" size={24} color="#fff" />
                        </View>
                        <View style={styles.amenitiesPart1Text}>
                            <Text style={styles.amenitiesPart1Title}>Guests</Text>
                            <Text style={styles.amenitiesPart1Number}>0</Text>
                        </View>
                    </View>
                    <View style={styles.amenitiesPart1CardContainer}>
                        <View style={styles.amenitiesPart1Card}>
                            <Ionicons name="bed-outline" size={24} color="#fff" />
                        </View>
                        <View style={styles.amenitiesPart1Text}>
                            <Text style={styles.amenitiesPart1Title}>Bedrooms</Text>
                            <Text style={styles.amenitiesPart1Number}>2</Text>
                        </View>
                    </View>
                    <View style={styles.amenitiesPart1CardContainer}>
                        <View style={styles.amenitiesPart1Card}>
                            <MaterialCommunityIcons name="bed-outline" size={24} color="#fff" />
                        </View>
                        <View style={styles.amenitiesPart1Text}>
                            <Text style={styles.amenitiesPart1Title}>Beds</Text>
                            <Text style={styles.amenitiesPart1Number}>2</Text>
                        </View>
                    </View>
                    <View style={styles.amenitiesPart1CardContainer}>
                        <View style={styles.amenitiesPart1Card}>
                            <MaterialCommunityIcons name="bathtub-outline" size={24} color="#fff" />
                        </View>
                        <View style={styles.amenitiesPart1Text}>
                            <Text style={styles.amenitiesPart1Title}>Bathrooms</Text>
                            <Text style={styles.amenitiesPart1Number}>1</Text>
                        </View>
                    </View>
                </View>

                <View style={[{height: height / 3}, {borderRadius: 20}, {overflow: 'hidden'}]}>
                    <MapView region={location} style={{flex: 1}}>
                        <Marker coordinate={location} />
                    </MapView>
                </View>

                <Text style={styles.title}>This is a title!</Text>

                <View style={styles.spaceGivenContainer}>
                    <View style={styles.spaceGivenCard}>
                        <FontAwesome5 name="ruler" size={24} color="#fff" />
                    </View>
                    <View>
                        <Text style={styles.spaceGivenTitle}>Space given:</Text>
                        <Text style={styles.spaceGivenText}>Entire place</Text>
                    </View>
                </View>

                <View style={styles.amenitiesPart2}>
                    <View style={styles.amenitiesPart2Card}>
                        <AntDesign name="wifi" size={24} color="#fff" />
                    </View>

                    <View style={styles.amenitiesPart2Card}>
                        <Ionicons name="tv-outline" size={24} color="#fff" />
                    </View>

                    <View style={styles.amenitiesPart2Card}>
                        <MaterialCommunityIcons name="washing-machine" size={24} color="#fff" />
                    </View>

                    <View style={styles.amenitiesPart2Card}>
                        <MaterialIcons name="local-parking" size={24} color="#fff" />
                    </View>

                    <View style={styles.amenitiesPart2Card}>
                        <FontAwesome name="snowflake-o" size={24} color="#fff" />
                    </View>

                    <View style={styles.amenitiesPart2Card}>
                        <FontAwesome5 name="swimming-pool" size={24} color="#fff" />
                    </View>

                    <View style={styles.amenitiesPart2Card}>
                        <FontAwesome5 name="first-aid" size={24} color="#fff" />
                    </View>

                    <View style={styles.amenitiesPart2Card}>
                        <FontAwesome name="fire-extinguisher" size={24} color="#fff" />
                    </View>
                </View>

                <Text style={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae debitis rerum ducimus, ipsam autem voluptates vel maxime asperiores rem ut totam soluta reprehenderit unde doloribus nam adipisci. Delectus, quaerat est? Similique eaque quas ab, aliquid eos maiores, accusantium aliquam tempore quis ut iusto eveniet amet at itaque aspernatur! Distinctio, fugit!</Text>

                <View style={styles.date}>
                    <View style={styles.dateCard}>
                        <AntDesign name="calendar" size={24} color="#fff" />
                    </View>

                    <View>
                        <Text style={styles.dateTitle}>Check in:</Text>
                        <Text style={styles.dateText}>05/03/2020</Text>
                    </View>

                    <View>
                        <Text style={styles.dateTitle}>Check out:</Text>
                        <Text style={styles.dateText}>05/10/2020</Text>
                    </View>
                </View>
            </View>

            <View style={styles.offerHost}>
                <Image style={styles.hostImage} source={{uri: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D'}} />
                <View>
                    <Text style={styles.hostName}>Esther Howard</Text>
                    <Text style={{fontFamily: 'Poppins-Regular'}}>456 Main St.Anytown, USA</Text>
                </View>
            </View>

            <TouchableOpacity style={[styles.reserveBtn, {height: height / 10}]}>
                <Text style={styles.reserveText}>Reserve</Text>
            </TouchableOpacity>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    offer: {
        flex: 1
    },
    sliderContainer: {
        borderRadius: 30,
        overflow: 'hidden',
        position: 'relative',
    },
    sliderContainerActive: {
        overflow: 'hidden',
        position: 'relative',
        position: 'absolute',
        zIndex: 1000,
        top: 0
    },
    offerInfo: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        paddingHorizontal: 20,
        justifyContent: 'center'
    },
    priceRate: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    rateFavourite: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rate: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        paddingHorizontal: 20
    },
    favourite: {
        paddingHorizontal: 20
    },
    priceText: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'Poppins-Medium'
    },
    rateText: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Poppins-Medium'
    },
    typeLocation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        paddingRight: 15
    },
    type: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    typeText: {
        fontSize: 15,
        color: '#fff',
        fontFamily: 'Poppins-Medium'
    },
    details: {
        marginTop: 25
    },
    amenitiesPart1: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    amenitiesPart1CardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        marginBottom: 10
    },
    amenitiesPart1Card: {
        backgroundColor: 'rgb(197, 41, 155)',
        width: 75,
        height: 75,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    amenitiesPart1Text: {
        alignItems: 'center',
        gap: 5
    },
    amenitiesPart1Title: {
        color: 'gray',
        fontFamily: 'Poppins-Regular'
    },
    amenitiesPart1Number: {
        fontFamily: 'Poppins-Bold'
    },
    title: {
        marginTop: 10,
        paddingBottom: 10,
        fontFamily: 'Poppins-Regular'
    },
    spaceGivenContainer: {
        marginTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 30
    },
    spaceGivenCard: {
        backgroundColor: 'rgb(197, 41, 155)',
        width: 75,
        height: 75,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    spaceGivenTitle: {
        marginBottom: 10,
        fontFamily: 'Poppins-Bold'
    },
    spaceGivenText: {
        color: 'gray',
        fontFamily: 'Poppins-Regular'
    },
    amenitiesPart2: {
        marginTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10
    },
    amenitiesPart2Card: {
        backgroundColor: 'rgb(197, 41, 155)',
        width: 75,
        height: 75,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    description: {
        marginTop: 10,
        paddingBottom: 10,
        fontFamily: 'Poppins-Regular'
    },
    date: {
        marginTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    dateCard: {
        backgroundColor: 'rgb(197, 41, 155)',
        width: 75,
        height: 75,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dateTitle: {
        marginBottom: 10,
        fontFamily: 'Poppins-Bold'
    },
    dateText: {
        color: 'gray',
        fontFamily: 'Poppins-Regular'
    },
    offerHost: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        gap: 20,
        paddingBottom: 10
    },
    hostImage: {
        height: 70,
        width: 70,
        borderRadius: 100 / 2
    },
    hostName: {
        fontFamily: 'Poppins-Bold'
    },
    reserveBtn: {
        backgroundColor: 'rgb(197, 41, 155)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    reserveText: {
        color: '#fff',
        fontFamily: 'Poppins-Bold'
    }
});

export default Offer;