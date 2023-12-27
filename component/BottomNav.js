import { View, Text, StyleSheet, Dimensions, Animated, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function BottomNav() {

    const navigation = useNavigation();

    const { width, height } = Dimensions.get('window');

    const indicator = new Animated.Value(36);

    const home = new Animated.Value(-13);

    const carte = new Animated.Value(0);

    const favourites = new Animated.Value(0);

    const profile = new Animated.Value(0);

    const moveToHome = () => {
        navigation.navigate('Home');
        Animated.timing(indicator, {
            toValue: 36,
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
            toValue: 125,
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
            toValue: 214.3,
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
        navigation.navigate('Profile');
        Animated.timing(indicator, {
            toValue: 298,
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
        <View style={[styles.bottomNavContainer, {height: height / 10}]}>
            <View style={styles.bottomNav}>
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
        position: 'absolute'
    }
});

export default BottomNav;