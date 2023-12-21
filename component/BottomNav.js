import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

function BottomNav() {

    const [pressedButton, setPressedButton] = useState('home');

    const navigation = useNavigation();

    const handleHome = () => {
        setPressedButton('home');
    };

    const handleFavourites = () => {
        setPressedButton('favourites')
    };

    const handleCarte = () => {
        setPressedButton('carte')
    };

    const handleAccount = () => {
        setPressedButton('account');
        navigation.navigate('Sign');
    };

    return(
        <View style={styles.bottomNav}>
            <TouchableOpacity onPress={handleHome}>
                <AntDesign name="appstore1" size={24} color={pressedButton === 'home' ? 'rgb(197, 41, 155)' : 'black'} />
            </TouchableOpacity>

            <TouchableOpacity onPress={handleFavourites}>
                <Ionicons name="heart" size={24} color={pressedButton === 'favourites' ? 'rgb(197, 41, 155)' : 'black'} />
            </TouchableOpacity>

            <TouchableOpacity onPress={handleCarte}>
                <FontAwesome5 name="shopping-bag" size={24} color={pressedButton === 'carte' ? 'rgb(197, 41, 155)' : 'black'} />
            </TouchableOpacity>

            <TouchableOpacity onPress={handleAccount}>
                <Ionicons name="person" size={24} color={pressedButton === 'account' ? 'rgb(197, 41, 155)' : 'black'} />
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    }
});

export default BottomNav;