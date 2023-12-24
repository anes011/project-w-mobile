import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';

function OfferHost() {

    const { width, height } = Dimensions.get('window');

    return(
        <View style={[styles.offerHost, {height: height / 11}]}>
            <Image style={styles.hostImage} source={{uri: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D'}} />
            <View>
                <Text style={styles.hostName}>Esther Howard</Text>
                <Text>456 Main St.Anytown, USA</Text>
            </View>
            <TouchableOpacity style={[styles.reserveBtn, {height: height / 16}, {width: width / 4}]}>
                <Text style={styles.reserveText}>Reserve</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    offerHost: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    hostImage: {
        height: 50,
        width: 50,
        borderRadius: 100 / 2
    },
    hostName: {
        fontSize: 20,
        fontWeight: '700'
    },
    reserveBtn: {
        backgroundColor: 'rgb(197, 41, 155)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    reserveText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: '700'
    }
});

export default OfferHost;