import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

function Discover() {

    const [typePressed, setTypePressed] = useState('villa');

    return(
        <View>
            <View style={styles.btnsContainer}>
                <TouchableOpacity onPress={() => setTypePressed('hotel')} style={styles.buttons}>
                    <Text>Hotel</Text>
                    <Entypo name="dot-single" size={40} color={typePressed !== null && typePressed === 'hotel' ? 'rgb(197, 41, 155)' : 'black'} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setTypePressed('motel')} style={styles.buttons}>
                    <Text>Motel</Text>
                    <Entypo name="dot-single" size={40} color={typePressed !== null && typePressed === 'motel' ? 'rgb(197, 41, 155)' : 'black'} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setTypePressed('villa')} style={styles.buttons}>
                    <Text>Villa</Text>
                    <Entypo name="dot-single" size={40} color={typePressed !== null && typePressed === 'villa' ? 'rgb(197, 41, 155)' : 'black'} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setTypePressed('house')} style={styles.buttons}>
                    <Text>House</Text>
                    <Entypo name="dot-single" size={40} color={typePressed !== null && typePressed === 'house' ? 'rgb(197, 41, 155)' : 'black'} />
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.offersContainer} horizontal>
                <View style={styles.container}>
                    <Image style={styles.offerImages} source={{uri: 'https://www.luxxu.net/blog/wp-content/uploads/2022/06/LIVING_1-1-scaled.jpg'}} />
                    <View style={styles.rating}>
                        <Text style={styles.ratingText}>4.3</Text>
                        <AntDesign name="star" size={20} color="white" />
                    </View>
                    <View style={styles.locationContainer}>
                        <Text style={styles.locationText}>lorem Ipsum.</Text>
                        <View style={styles.locationContainerPart2}>
                            <MaterialIcons name="location-on" size={24} color="white" />
                            <Text style={styles.locationTextPart2}>lorem Ipsum.</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.container}>
                    <Image style={styles.offerImages} source={{uri: 'https://www.ministryofvillas.com/wp-content/uploads/2019/04/koh-samui-limesamuivillas-villazest-01.jpg'}} />
                    <View style={styles.rating}>
                        <Text style={styles.ratingText}>4.3</Text>
                        <AntDesign name="star" size={20} color="white" />
                    </View>
                    <View style={styles.locationContainer}>
                        <Text style={styles.locationText}>lorem Ipsum.</Text>
                        <View style={styles.locationContainerPart2}>
                            <MaterialIcons name="location-on" size={24} color="white" />
                            <Text style={styles.locationTextPart2}>lorem Ipsum.</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.container}>
                    <Image style={styles.offerImages} source={{uri: 'https://i.pinimg.com/originals/a8/e7/06/a8e7064ac87b25c9197dca73dc345610.jpg'}} />
                    <View style={styles.rating}>
                        <Text style={styles.ratingText}>4.3</Text>
                        <AntDesign name="star" size={20} color="white" />
                    </View>
                    <View style={styles.locationContainer}>
                        <Text style={styles.locationText}>lorem Ipsum.</Text>
                        <View style={styles.locationContainerPart2}>
                            <MaterialIcons name="location-on" size={24} color="white" />
                            <Text style={styles.locationTextPart2}>lorem Ipsum.</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    btnsContainer: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between'
    },
    buttons: {
        alignItems: 'center'
    },
    offersContainer: {
        height: 330,
        marginTop: 10
    },
    offerImages: {
        borderRadius: 20,
        height: '100%'
    },
    container: {
        height: 320,
        width: 170,
        marginRight: 20,
        position: 'relative',
    },
    rating: {
        position: 'absolute',
        top: 10,
        right: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        backgroundColor: 'rgb(197, 41, 155)',
        padding: 6,
        borderRadius: 70
    },
    ratingText: {
        color: '#fff'
    },
    locationContainer: {
        position: 'absolute',
        bottom: 10,
        left: 10
    },
    locationContainerPart2: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginTop: 5
    },
    locationText: {
        color: '#fff',
        fontWeight: '900'
    },
    locationTextPart2: {
        color: '#fff'
    }
});

export default Discover;