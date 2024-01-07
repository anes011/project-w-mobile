import { View, Text, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity, FlatList, Pressable, Alert } from 'react-native';
import { BlurView } from 'expo-blur';
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import data from '../Context';
import { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

function OfferSlider() {

    const navigation = useNavigation();

    const { width, height } = Dimensions.get('window');

    const { offerPressed } = useContext(data);

    const [rate, setRate] = useState(false);
    const [stars, setStars] = useState(0);

    return(
        <View style={[styles.sliderContainer, {height: height / 3}]}>
            {
                offerPressed !== null && (
                    <FlatList horizontal data={offerPressed.offerPhotos} keyExtractor={item => item._id} renderItem={({item}) => (
                        <Image style={{width: width}} source={{uri: item}} />
                    )} />
                )
            }

            <BlurView intensity={80} tint='dark' style={[styles.offerInfo, {height: height / 8}]}>
                <View style={styles.priceRate}>
                    {
                        offerPressed !== null && (
                            <Text style={styles.priceText}>{offerPressed.price}</Text>
                        )
                    }
                    <View style={styles.rateFavourite}>
                        <Pressable onPress={() => setRate(true)} style={[styles.rate]}>
                            <FontAwesome name="star" size={24} color="rgb(197, 41, 155)" />
                            <Text style={styles.rateText}>4.8</Text>
                        </Pressable>

                        <View style={styles.favourite}>
                            <Fontisto name="favorite" size={22} color="#fff" />
                        </View>
                    </View>
                </View>

                <View style={styles.typeLocation}>
                    <View style={styles.type}>
                        {
                            offerPressed !== null && (
                                <Text style={styles.typeText}>{offerPressed.placeType.toUpperCase()}</Text>
                            )
                        }
                        <Entypo name="dot-single" size={24} color="#fff" />
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('OfferPhotos')}>
                        <MaterialIcons name='fullscreen' size={30} color="#fff" />
                    </TouchableOpacity>
                </View>
            </BlurView>

            {
                rate && (
                    <View style={[{backgroundColor: '#fff'}, {position: 'absolute'}, {left: 0}, {right: 0}, {top: 0}, {bottom: 0}, {justifyContent: 'center'}, {alignItems: 'center'}, {gap: 50}]}>
                        <View style={[{flexDirection: 'row'}]}>
                            <Pressable onPress={() => setStars(1)}>
                                <FontAwesome name="star" size={40} color={stars >= 1 ? 'rgb(197, 41, 155)' : '#000'} />
                            </Pressable>

                            <Pressable onPress={() => setStars(2)}>
                                <FontAwesome name="star" size={40} color={stars >= 2 ? 'rgb(197, 41, 155)' : '#000'} />
                            </Pressable>

                            <Pressable onPress={() => setStars(3)}>
                                <FontAwesome name="star" size={40} color={stars >= 3 ? 'rgb(197, 41, 155)' : '#000'} />
                            </Pressable>

                            <Pressable onPress={() => setStars(4)}>
                                <FontAwesome name="star" size={40} color={stars >= 4 ? 'rgb(197, 41, 155)' : '#000'} />
                            </Pressable>

                            <Pressable onPress={() => setStars(5)}>
                                <FontAwesome name="star" size={40} color={stars >= 5 ? 'rgb(197, 41, 155)' : '#000'} />
                            </Pressable>
                        </View>

                        <Pressable onPress={() => setRate(false)} style={[{backgroundColor: 'rgb(197, 41, 155)'}, {paddingHorizontal: 40}, {paddingVertical: 10}, {borderRadius: 30}]}>
                            <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Medium'}]}>Done</Text>
                        </Pressable>
                    </View>
                )
            }
        </View>
    )
};

const styles = StyleSheet.create({
    sliderContainer: {
        borderRadius: 30,
        overflow: 'hidden',
        position: 'relative',
        marginTop: 20
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
});

export default OfferSlider;