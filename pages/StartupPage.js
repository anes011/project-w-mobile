import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

function StartupPage() {

    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home');
        }, 3000);
    });

    return(
        <View style={styles.startUp}>
            <View style={styles.container}>
                <Text style={styles.wiziText}>Wizi</Text>
                <ActivityIndicator size={100} color={'rgb(197, 41, 155)'} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    startUp: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        alignItems: 'center',
        gap: 50
    },
    wiziText: {
        color: 'rgb(197, 41, 155)',
        fontSize: 40
    }
});

export default StartupPage;