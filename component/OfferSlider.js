import { View, Text, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

function OfferSlider() {

    const { width, height } = Dimensions.get('window');

    return(
        <View style={[styles.sliderContainer, {height: height / 3}]}>
            <ScrollView horizontal>
                <Image style={{width: width}} source={{uri: 'https://cdn.onekindesign.com/wp-content/uploads/2019/11/Striking-Modern-Villa-Design-Marmol-Radziner-02-1-Kindesign.jpg'}} />
                <Image style={{width: width}} source={{uri: 'https://cdn.onekindesign.com/wp-content/uploads/2019/11/Striking-Modern-Villa-Design-Marmol-Radziner-02-1-Kindesign.jpg'}} />
                <Image style={{width: width}} source={{uri: 'https://cdn.onekindesign.com/wp-content/uploads/2019/11/Striking-Modern-Villa-Design-Marmol-Radziner-02-1-Kindesign.jpg'}} />
                <Image style={{width: width}} source={{uri: 'https://cdn.onekindesign.com/wp-content/uploads/2019/11/Striking-Modern-Villa-Design-Marmol-Radziner-02-1-Kindesign.jpg'}} />
            </ScrollView>

            <BlurView intensity={80} tint='dark' style={[styles.offerInfo, {height: height / 8}]}>
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
                    <TouchableOpacity>
                        <MaterialIcons name='fullscreen' size={30} color="#fff" />
                    </TouchableOpacity>
                </View>
            </BlurView>
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