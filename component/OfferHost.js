import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

function OfferHost() {

    const { width, height } = Dimensions.get('window');

    return(
        <View>
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
        </View>
    )
};

const styles = StyleSheet.create({
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

export default OfferHost;