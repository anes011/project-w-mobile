import { View, Text, StyleSheet, ScrollView, Dimensions, Image } from 'react-native';
import { BlurView } from 'expo-blur';
import { FontAwesome } from '@expo/vector-icons';

function Offers() {

    const { width, height } = Dimensions.get('window');

    return(
        <View style={[styles.offerContainer, {height: height / 1.7}]}>
            <ScrollView>
                <View style={[styles.offer, {height: height / 1.7}]}>
                    <Image style={{flex: 1}} source={{uri: 'https://cdn.onekindesign.com/wp-content/uploads/2019/11/Striking-Modern-Villa-Design-Marmol-Radziner-02-1-Kindesign.jpg'}} />
                    <BlurView intensity={50} tint='dark' style={[styles.description, {height: height / 6}]}>
                        <Text style={styles.price}>$100,000</Text>
                        <Text style={styles.locationDetails}>456 Main St.Anytown, USA 12345</Text>
                    </BlurView>
                    <Text style={styles.type}>House</Text>
                    <View style={styles.rate}>
                        <FontAwesome name="star" size={24} color="rgb(197, 41, 155)" />
                        <Text style={styles.rateText}>4.8</Text>
                    </View>
                </View>

                <View style={[styles.offer, {height: height / 1.7}]}>
                    <Image style={{flex: 1}} source={{uri: 'https://www.ministryofvillas.com/wp-content/uploads/2021/01/bali-river-house-living.jpg'}} />
                    <BlurView intensity={50} tint='dark' style={[styles.description, {height: height / 6}]}>
                        <Text style={styles.price}>$100,000</Text>
                        <Text style={styles.locationDetails}>456 Main St.Anytown, USA 12345</Text>
                    </BlurView>
                    <Text style={styles.type}>House</Text>
                    <View style={styles.rate}>
                        <FontAwesome name="star" size={24} color="rgb(197, 41, 155)" />
                        <Text style={styles.rateText}>4.8</Text>
                    </View>
                </View>

                <View style={[styles.offer, {height: height / 1.7}]}>
                    <Image style={{flex: 1}} source={{uri: 'https://st.hzcdn.com/simgs/2431b87300e1c0e4_14-0233/home-design.jpg'}} />
                    <BlurView intensity={50} tint='dark' style={[styles.description, {height: height / 6}]}>
                        <Text style={styles.price}>$100,000</Text>
                        <Text style={styles.locationDetails}>456 Main St.Anytown, USA 12345</Text>
                    </BlurView>
                    <Text style={styles.type}>House</Text>
                    <View style={styles.rate}>
                        <FontAwesome name="star" size={24} color="rgb(197, 41, 155)" />
                        <Text style={styles.rateText}>4.8</Text>
                    </View>
                </View>

                <View style={[styles.offer, {height: height / 1.7}]}>
                    <Image style={{flex: 1}} source={{uri: 'https://www.chandrabalivillas.com/wp-content/uploads/2014/11/5.-Pool-Villa-Living.jpg'}} />
                    <BlurView intensity={50} tint='dark' style={[styles.description, {height: height / 6}]}>
                        <Text style={styles.price}>$100,000</Text>
                        <Text style={styles.locationDetails}>456 Main St.Anytown, USA 12345</Text>
                    </BlurView>
                    <Text style={styles.type}>House</Text>
                    <View style={styles.rate}>
                        <FontAwesome name="star" size={24} color="rgb(197, 41, 155)" />
                        <Text style={styles.rateText}>4.8</Text>
                    </View>
                </View>

                <View style={[styles.offer, {height: height / 1.7}]}>
                    <Image style={{flex: 1}} source={{uri: 'https://andaribalivillas.com/wp-content/uploads/2019/01/Andari-Bali-Villas-2-3-bedroom-private-vilas-Legian-Villa-Sayana-3-1030x687.jpg'}} />
                    <BlurView intensity={50} tint='dark' style={[styles.description, {height: height / 6}]}>
                        <Text style={styles.price}>$100,000</Text>
                        <Text style={styles.locationDetails}>456 Main St.Anytown, USA 12345</Text>
                    </BlurView>
                    <Text style={styles.type}>House</Text>
                    <View style={styles.rate}>
                        <FontAwesome name="star" size={24} color="rgb(197, 41, 155)" />
                        <Text style={styles.rateText}>4.8</Text>
                    </View>
                </View>

                <View style={[styles.offer, {height: height / 1.7}]}>
                    <Image style={{flex: 1}} source={{uri: 'https://www.conradmaldives.com/wp-content/uploads/2021/05/Grand-Water-Villa-Living-Room.jpg'}} />
                    <BlurView intensity={50} tint='dark' style={[styles.description, {height: height / 6}]}>
                        <Text style={styles.price}>$100,000</Text>
                        <Text style={styles.locationDetails}>456 Main St.Anytown, USA 12345</Text>
                    </BlurView>
                    <Text style={styles.type}>House</Text>
                    <View style={styles.rate}>
                        <FontAwesome name="star" size={24} color="rgb(197, 41, 155)" />
                        <Text style={styles.rateText}>4.8</Text>
                    </View>
                </View>

                <View style={[styles.offer, {height: height / 1.7}]}>
                    <Image style={{flex: 1}} source={{uri: 'https://www.hospitalitynet.org/picture/xxl_153107745.jpg?t=1572873778'}} />
                    <BlurView intensity={50} tint='dark' style={[styles.description, {height: height / 6}]}>
                        <Text style={styles.price}>$100,000</Text>
                        <Text style={styles.locationDetails}>456 Main St.Anytown, USA 12345</Text>
                    </BlurView>
                    <Text style={styles.type}>House</Text>
                    <View style={styles.rate}>
                        <FontAwesome name="star" size={24} color="rgb(197, 41, 155)" />
                        <Text style={styles.rateText}>4.8</Text>
                    </View>
                </View>

                <View style={[styles.offer, {height: height / 1.7}]}>
                    <Image style={{flex: 1}} source={{uri: 'https://www.nexinteriors.com/wp-content/uploads/2019/11/villa-interior-designs-in-hyderabad-1024x576.jpg'}} />
                    <BlurView intensity={50} tint='dark' style={[styles.description, {height: height / 6}]}>
                        <Text style={styles.price}>$100,000</Text>
                        <Text style={styles.locationDetails}>456 Main St.Anytown, USA 12345</Text>
                    </BlurView>
                    <Text style={styles.type}>House</Text>
                    <View style={styles.rate}>
                        <FontAwesome name="star" size={24} color="rgb(197, 41, 155)" />
                        <Text style={styles.rateText}>4.8</Text>
                    </View>
                </View>
            </ScrollView>
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
        backgroundColor: 'rgba(0, 0, 0, .7)',
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
        fontWeight: '500'
    },
    locationDetails: {
        color: '#fff'
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
        fontWeight: '700',
        fontSize: 15
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
        fontWeight: '700'
    }
});

export default Offers;