import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';

function Nav() {

    const [openSearch, setOpenSearch] = useState(false);

    return(
        <View>
            <View style={styles.greetingContainer}>
                <Text style={styles.greetingPart1}>Morning, </Text>
                <Text style={styles.greetingPart2}>User!</Text>
            </View>

            {
                openSearch ? (
                    <View style={styles.searchContainer}>
                        <TextInput style={styles.searchInput} />
                        <TouchableOpacity onPress={() => setOpenSearch(false)}>
                            <Feather name="search" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View style={styles.exploreContainer}>
                        <Text style={styles.exploreText}>Let's Explore!</Text>
                        <TouchableOpacity onPress={() => setOpenSearch(true)}>
                            <Feather name="search" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                )
            }
        </View>
    )
};

const styles = StyleSheet.create({
    greetingContainer: {
        flexDirection: 'row',
        paddingVertical: 10
    },
    greetingPart1: {
        fontSize: 20,
        color: 'gray'
    },
    greetingPart2: {
        fontSize: 20,
        color: 'rgb(197, 41, 155)'
    },
    exploreContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10
    },
    exploreText: {
        fontSize: 17
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgb(197, 41, 155)',
        borderRadius: 40,
        height: 45,
        paddingHorizontal: 15
    },
    searchInput: {
        flex: 1,
        height: '100%',
        fontSize: 22
    }
});

export default Nav;