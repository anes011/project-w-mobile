import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useState } from 'react';

function BottomNav() {

    const [pressedButton, setPressedButton] = useState('home');

    return(
        <View style={styles.bottomNav}>
            <TouchableOpacity onPress={() => setPressedButton('home')}>
                <AntDesign name="appstore1" size={24} color={pressedButton === 'home' ? 'rgb(197, 41, 155)' : 'black'} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setPressedButton('favourites')}>
                <Ionicons name="heart" size={24} color={pressedButton === 'favourites' ? 'rgb(197, 41, 155)' : 'black'} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setPressedButton('carte')}>
                <FontAwesome5 name="shopping-bag" size={24} color={pressedButton === 'carte' ? 'rgb(197, 41, 155)' : 'black'} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setPressedButton('account')}>
                <Ionicons name="person" size={24} color={pressedButton === 'account' ? 'rgb(197, 41, 155)' : 'black'} />
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    bottomNav: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        left: 30,
        right: 30,
        justifyContent: 'space-between'
    }
});

export default BottomNav;