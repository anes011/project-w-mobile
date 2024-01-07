import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import data from '../Context';
import { useContext } from 'react';

function OfferDetails() {

    const { width, height } = Dimensions.get('window');

    const { offerPressed } = useContext(data);

    return(
        <View style={[{marginTop: 20}]}>
            {
                offerPressed !== null && (
                    <View style={styles.amenitiesPart1}>
                        <View style={styles.amenitiesPart1CardContainer}>
                            <View style={styles.amenitiesPart1Card}>
                                <Octicons name="people" size={24} color="#000" />
                            </View>
                            <View style={styles.amenitiesPart1Text}>
                                <Text style={styles.amenitiesPart1Title}>Guests</Text>
                                <Text style={styles.amenitiesPart1Number}>{offerPressed.guests}</Text>
                            </View>
                        </View>
                        <View style={styles.amenitiesPart1CardContainer}>
                            <View style={styles.amenitiesPart1Card}>
                                <Ionicons name="bed-outline" size={24} color="#000" />
                            </View>
                            <View style={styles.amenitiesPart1Text}>
                                <Text style={styles.amenitiesPart1Title}>Bedrooms</Text>
                                <Text style={styles.amenitiesPart1Number}>{offerPressed.bedrooms}</Text>
                            </View>
                        </View>
                        <View style={styles.amenitiesPart1CardContainer}>
                            <View style={styles.amenitiesPart1Card}>
                                <MaterialCommunityIcons name="bed-outline" size={24} color="#000" />
                            </View>
                            <View style={styles.amenitiesPart1Text}>
                                <Text style={styles.amenitiesPart1Title}>Beds</Text>
                                <Text style={styles.amenitiesPart1Number}>{offerPressed.beds}</Text>
                            </View>
                        </View>
                        <View style={styles.amenitiesPart1CardContainer}>
                            <View style={styles.amenitiesPart1Card}>
                                <MaterialCommunityIcons name="bathtub-outline" size={24} color="#000" />
                            </View>
                            <View style={styles.amenitiesPart1Text}>
                                <Text style={styles.amenitiesPart1Title}>Bathrooms</Text>
                                <Text style={styles.amenitiesPart1Number}>{offerPressed.bathrooms}</Text>
                            </View>
                        </View>
                    </View>
                )
            }

            {
                offerPressed !== null && (
                    <Text style={styles.title}>{offerPressed.title}</Text>
                )
            }

            <View style={styles.spaceGivenContainer}>
                <View style={styles.spaceGivenCard}>
                    <FontAwesome5 name="ruler" size={24} color="#000" />
                </View>
                <View>
                    <Text style={styles.spaceGivenTitle}>Space given:</Text>
                    {
                        offerPressed !== null && (
                            <Text style={styles.spaceGivenText}>{offerPressed.spaceGiven}</Text>
                        )
                    }
                </View>
            </View>

            {
                offerPressed !== null && (
                    <View style={styles.amenitiesPart2}>
                        {
                            offerPressed.wifi && (
                                <View style={styles.amenitiesPart2Card}>
                                    <AntDesign name="wifi" size={24} color="#000" />
                                </View>
                            )
                        }

                        {
                            offerPressed.tv && (
                                <View style={styles.amenitiesPart2Card}>
                                    <Ionicons name="tv-outline" size={24} color="#000" />
                                </View>
                            )
                        }

                        {
                            offerPressed.washer && (
                                <View style={styles.amenitiesPart2Card}>
                                    <MaterialCommunityIcons name="washing-machine" size={24} color="#000" />
                                </View>
                            )
                        }

                        {
                            offerPressed.parking && (
                                <View style={styles.amenitiesPart2Card}>
                                    <MaterialIcons name="local-parking" size={24} color="#000" />
                                </View>
                            )
                        }

                        {
                            offerPressed.airConditioning && (
                                <View style={styles.amenitiesPart2Card}>
                                    <FontAwesome name="snowflake-o" size={24} color="#000" />
                                </View>
                            )
                        }

                        {
                            offerPressed.pool && (
                                <View style={styles.amenitiesPart2Card}>
                                    <FontAwesome5 name="swimming-pool" size={24} color="#000" />
                                </View>
                            )
                        }

                        {
                            offerPressed.firstAid && (
                                <View style={styles.amenitiesPart2Card}>
                                    <FontAwesome5 name="first-aid" size={24} color="#000" />
                                </View>
                            )
                        }

                        {
                            offerPressed.fireExtinguisher && (
                                <View style={styles.amenitiesPart2Card}>
                                    <FontAwesome name="fire-extinguisher" size={24} color="#000" />
                                </View>
                            )
                        }
                    </View>
                )
            }

            {
                offerPressed !== null && (
                    <Text style={styles.description}>{offerPressed.description}</Text>
                )
            }

            {
                offerPressed !== null && (
                    <View style={styles.date}>
                        <View style={styles.dateCard}>
                            <AntDesign name="calendar" size={24} color="#000" />
                        </View>

                        <View>
                            <Text style={styles.dateTitle}>Check in:</Text>
                            <Text style={styles.dateText}>{offerPressed.checkIn}</Text>
                        </View>

                        <View>
                            <Text style={styles.dateTitle}>Check out:</Text>
                            <Text style={styles.dateText}>{offerPressed.checkOut}</Text>
                        </View>
                    </View>
                )
            }
        </View>
    )
};

const styles = StyleSheet.create({
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
        backgroundColor: '#fff',
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
        fontFamily: 'Poppins-Regular',
        color: '#fff'
    },
    amenitiesPart1Number: {
        fontFamily: 'Poppins-Bold',
        color: '#fff'
    },
    title: {
        marginTop: 10,
        paddingBottom: 10,
        fontFamily: 'Poppins-Regular',
        color: '#fff'
    },
    spaceGivenContainer: {
        marginTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 30
    },
    spaceGivenCard: {
        backgroundColor: '#fff',
        width: 75,
        height: 75,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    spaceGivenTitle: {
        marginBottom: 10,
        fontFamily: 'Poppins-Bold',
        color: '#fff'
    },
    spaceGivenText: {
        color: 'gray',
        fontFamily: 'Poppins-Regular',
        color: '#fff'
    },
    amenitiesPart2: {
        marginTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10
    },
    amenitiesPart2Card: {
        backgroundColor: '#fff',
        width: 75,
        height: 75,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    description: {
        marginTop: 10,
        paddingBottom: 10,
        fontFamily: 'Poppins-Regular',
        color: '#fff'
    },
    date: {
        marginTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    dateCard: {
        backgroundColor: '#fff',
        width: 75,
        height: 75,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dateTitle: {
        marginBottom: 10,
        fontFamily: 'Poppins-Bold',
        color: '#fff'
    },
    dateText: {
        color: 'gray',
        fontFamily: 'Poppins-Regular',
        color: '#fff'
    },
});

export default OfferDetails;