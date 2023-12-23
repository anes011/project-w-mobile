import { View, Text, StyleSheet, Dimensions, Animated, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

function BottomNav() {

    const { width, height } = Dimensions.get('window');

    const indicator = new Animated.Value(33);

    const home = new Animated.Value(-13);

    const carte = new Animated.Value(0);

    const favourites = new Animated.Value(0);

    const profile = new Animated.Value(0);

    const indicatorWidth = width / 20;

    const moveToHome = () => {
        Animated.timing(indicator, {
            toValue: 33,
            duration: 300,
            useNativeDriver: true
        }).start()

        Animated.timing(home, {
            toValue: -13,
            duration: 300,
            useNativeDriver: true
        }).start()

        Animated.timing(carte, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true
        }).start()

        Animated.timing(favourites, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true
        }).start()

        Animated.timing(profile, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true
        }).start()
    };

    const moveTocarte = () => {
        Animated.timing(indicator, {
            toValue: 104,
            duration: 300,
            useNativeDriver: true
        }).start()

        Animated.timing(home, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true
        }).start()

        Animated.timing(carte, {
            toValue: -13,
            duration: 300,
            useNativeDriver: true
        }).start()

        Animated.timing(favourites, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true
        }).start()

        Animated.timing(profile, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true
        }).start()
    };

    const moveToFavourites = () => {
        Animated.timing(indicator, {
            toValue: 175,
            duration: 300,
            useNativeDriver: true
        }).start()

        Animated.timing(favourites, {
            toValue: -13,
            duration: 300,
            useNativeDriver: true
        }).start()

        Animated.timing(home, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true
        }).start()

        Animated.timing(carte, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true
        }).start()

        Animated.timing(profile, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true
        }).start()
    };

    const moveToProfile = () => {
        Animated.timing(indicator, {
            toValue: 240,
            duration: 300,
            useNativeDriver: true
        }).start()

        Animated.timing(profile, {
            toValue: -13,
            duration: 300,
            useNativeDriver: true
        }).start()

        Animated.timing(home, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true
        }).start()

        Animated.timing(carte, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true
        }).start()

        Animated.timing(favourites, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true
        }).start()
    };

    return(
        <View style={[styles.bottomNav, {height: height / 10}]}>
            <TouchableOpacity onPress={moveToHome}>
                <Animated.View style={{transform: [{translateY: home}]}}>
                    <AntDesign name="home" size={30} color="black" />
                </Animated.View>
            </TouchableOpacity>
            <TouchableOpacity onPress={moveTocarte}>
                <Animated.View style={{transform: [{translateY: carte}]}}>
                    <Feather name="shopping-bag" size={30} color="black" />
                </Animated.View>
            </TouchableOpacity>
            <TouchableOpacity onPress={moveToFavourites}>
                <Animated.View style={{transform: [{translateY: favourites}]}}>
                    <MaterialCommunityIcons name="cards-heart-outline" size={30} color="black" />
                </Animated.View>
            </TouchableOpacity>
            <TouchableOpacity onPress={moveToProfile}>
                <Animated.View style={{transform: [{translateY: profile}]}}>
                    <Octicons name="person" size={30} color="black" />
                </Animated.View>
            </TouchableOpacity>

            <View style={[styles.bar, {height: height / 100}]}>
                <Animated.View style={[styles.indicator, {width: width / 20}, {transform: [{translateX: indicator}]}]}></Animated.View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    bottomNav: {
        width: 300,
        borderWidth: 2,
        borderRadius: 25,
        position: 'absolute',
        bottom: 5,
        left: 20,
        right: 20,
        backgroundColor: 'white',
        elevation: 50,
        shadowColor: 'rgb(197, 41, 155)',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30
    },
    bar: {
        borderWidth: 2,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 10
    },
    indicator: {
        height: '100%',
        backgroundColor: 'rgb(197, 41, 155)',
        borderRadius: 20,
        position: 'absolute'
    }
});

export default BottomNav;