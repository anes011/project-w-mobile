import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function BottomNav() {

    const navigation = useNavigation();

    const { width, height } = Dimensions.get('window');

    return(
        <View style={[styles.bottomNavContainer, {height: height / 10}]}>
            <View style={styles.bottomNav}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <AntDesign name="home" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Carte')}>
                    <Feather name="shopping-bag" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Favourites')}>
                    <MaterialCommunityIcons name="cards-heart-outline" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Octicons name="person" size={30} color="black" />
                </TouchableOpacity>

                <View style={[styles.bar, {height: height / 100}]}>
                    <View style={styles.indicator}></View>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    bottomNavContainer: {
        position: 'absolute',
        bottom: 5,
        left: 20,
        right: 20,
        backgroundColor: 'white',
        elevation: 50,
        shadowColor: 'rgb(197, 41, 155)',
        alignItems: 'center',
        borderRadius: 25
    },
    bottomNav: {
        width: 350,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30
    },
    bar: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 10
    },
    indicator: {
        height: '100%',
        backgroundColor: 'rgb(197, 41, 155)',
        borderRadius: 20,
        position: 'absolute',
        left: 36,
        right: 36
    }
});

export default BottomNav;