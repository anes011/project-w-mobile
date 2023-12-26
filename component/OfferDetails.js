import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

function OfferDetails() {

    const { width, height } = Dimensions.get('window');

    const location = {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    }

    return(
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
    )
};

const styles = StyleSheet.create({
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
});

export default OfferDetails;