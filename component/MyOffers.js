import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { BlurView } from 'expo-blur';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function MyOffers() {

    const {height, width} = Dimensions.get('window');

    const navigation = useNavigation();

    const goToOffer = () => {
        navigation.navigate('Offer');
    };

    return(
        <ScrollView style={[{paddingHorizontal: 20}, {paddingTop: 30}]}>
            <TouchableOpacity onPress={() => navigation.navigate('AddOffer')} style={[{flexDirection: 'row'}, {position: 'absolute'}, {top: 0}, {left: 0}, {right: 0}, {alignItems: 'center'}, {justifyContent: 'center'}, {height: height / 15}, {borderRadius: 30}, {gap: 10}, {backgroundColor: 'rgb(197, 41, 155)'}]}>
                <Ionicons name="add-circle-sharp" size={24} color="#fff" />
                <Text style={[{fontFamily: 'Poppins-Medium'}, {color: '#fff'}]}>Add an Offer</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={goToOffer} style={[styles.offer, {height: height / 1.7}]}>
                <Image style={{flex: 1}} source={{uri: 'https://cdn.onekindesign.com/wp-content/uploads/2019/11/Striking-Modern-Villa-Design-Marmol-Radziner-02-1-Kindesign.jpg'}} />
                <BlurView intensity={80} tint='dark' style={[styles.description, {height: height / 6}]}>
                    <Text style={styles.price}>$100,000</Text>
                    <Text style={styles.locationDetails}>456 Main St.Anytown, USA 12345</Text>
                </BlurView>
                <Text style={styles.type}>House</Text>
                <View style={styles.rate}>
                    <FontAwesome name="star" size={24} color="rgb(197, 41, 155)" />
                    <Text style={styles.rateText}>4.8</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.offer, {height: height / 1.7}]}>
                <Image style={{flex: 1}} source={{uri: 'https://cdn.onekindesign.com/wp-content/uploads/2019/11/Striking-Modern-Villa-Design-Marmol-Radziner-02-1-Kindesign.jpg'}} />
                <BlurView intensity={80} tint='dark' style={[styles.description, {height: height / 6}]}>
                    <Text style={styles.price}>$100,000</Text>
                    <Text style={styles.locationDetails}>456 Main St.Anytown, USA 12345</Text>
                </BlurView>
                <Text style={styles.type}>House</Text>
                <View style={styles.rate}>
                    <FontAwesome name="star" size={24} color="rgb(197, 41, 155)" />
                    <Text style={styles.rateText}>4.8</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.offer, {height: height / 1.7}]}>
                <Image style={{flex: 1}} source={{uri: 'https://cdn.onekindesign.com/wp-content/uploads/2019/11/Striking-Modern-Villa-Design-Marmol-Radziner-02-1-Kindesign.jpg'}} />
                <BlurView intensity={80} tint='dark' style={[styles.description, {height: height / 6}]}>
                    <Text style={styles.price}>$100,000</Text>
                    <Text style={styles.locationDetails}>456 Main St.Anytown, USA 12345</Text>
                </BlurView>
                <Text style={styles.type}>House</Text>
                <View style={styles.rate}>
                    <FontAwesome name="star" size={24} color="rgb(197, 41, 155)" />
                    <Text style={styles.rateText}>4.8</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    offer: {
        borderRadius: 20,
        overflow: 'hidden',
        position: 'relative',
        marginTop: 100
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