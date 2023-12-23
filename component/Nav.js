import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity } from "react-native";
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useState } from "react";

function Nav() {

    const { width, height } = Dimensions.get('window');

    const [showPlaceholder, setShowPlaceholder] = useState(true);

    return(
        <View>
            <View style={styles.location}>
                <View style={styles.locationLeftSide}>
                    <SimpleLineIcons name="location-pin" size={24} color="black" />
                    <View>
                        <Text style={styles.locationTitleText}>Location</Text>
                        <Text style={styles.locationText}>Seattle, USA</Text>
                    </View>
                </View>
                <Ionicons name="notifications-outline" size={30} color="black" />
                <View style={styles.notificationDot}></View>
            </View>

            <View style={styles.search}>
                <TouchableOpacity onPress={() => setShowPlaceholder(false)} style={styles.searchContainer}>
                    <Feather style={styles.searchIcon} name="search" size={24} color="black" />
                    <TextInput style={styles.searchInput} />
                    {
                        showPlaceholder && (
                            <Text style={styles.placeHolder}>Address, city...</Text>
                        )
                    }
                </TouchableOpacity>
                <TouchableOpacity style={[styles.filterBtn, {height: height / 14}]}>
                    <Feather name="sliders" size={27} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    location: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    locationLeftSide: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    },
    locationTitleText: {
        color: 'gray'
    },
    locationText: {
        fontWeight: '800',
        fontSize: 18
    },
    notificationDot: {
        height: 10,
        width: 10,
        backgroundColor: 'red',
        position: 'absolute',
        borderRadius: 100 / 2,
        right: 4,
        top: 9
    },
    search: {
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    searchContainer: {
        position: 'relative',
        flex: 2.9,
        borderRadius: 20,
        overflow: 'hidden',
        justifyContent: 'center',
        backgroundColor: 'white',
        elevation: 50
    },
    searchInput: {
        paddingLeft: 40,
        fontSize: 17,
        flex: 1,
    },
    searchIcon: {
        position: 'absolute',
        left: 8
    },
    placeHolder: {
        position: 'absolute',
        left: 70,
        fontSize: 17,
        fontWeight: '500',
        color: 'gray'
    },
    filterBtn: {
        backgroundColor: 'rgb(197, 41, 155)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25
    }
});

export default Nav;