import { View, Text, ImageBackground, StyleSheet, Dimensions } from 'react-native';

function SignPage() {

    const { width, height } = Dimensions.get('window');

    return(
        <ImageBackground style={styles.background} source={{uri: 'https://www.luxxu.net/blog/wp-content/uploads/2022/06/LIVING_1-1-scaled.jpg'}}>
            <View style={[styles.logInBtn, {height: height / 12}]}>
                <Text style={styles.logInBtnText}>Log in</Text>
            </View>
            <View style={styles.signUp}>
                <Text style={styles.signUpText}>You don't have an account?</Text>
                <Text style={styles.signUpLink}>Sign up</Text>
            </View>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover'
    },
    logInBtn: {
        position: 'absolute',
        backgroundColor: 'rgb(197, 41, 155)',
        bottom: 200,
        left: 40,
        right: 40,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    logInBtnText: {
        color: '#fff',
        fontSize: 25,
        fontWeight: '500'
    },
    signUp: {
        position: 'absolute',
        bottom: 150,
        left: 40,
        right: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    },
    signUpText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '500'
    },
    signUpLink: {
        fontSize: 18,
        fontWeight: '500',
        color: 'rgb(197, 41, 155)'
    }
});

export default SignPage;