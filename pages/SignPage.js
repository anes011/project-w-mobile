import { View, Text, ImageBackground, StyleSheet, Dimensions } from 'react-native';

function SignPage() {

    const { width, height } = Dimensions.get('window');

    return(
        <ImageBackground style={styles.background} source={{uri: 'https://i.pinimg.com/originals/a8/e7/06/a8e7064ac87b25c9197dca73dc345610.jpg'}}>
            <View style={[styles.logInBtn, {height: height / 12}]}>
                <Text style={styles.logInBtnText}>Log in</Text>
            </View>
            <View>
                <Text>You don't have an account?</Text>
                <Text>Sign up</Text>
            </View>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    background: {
        flex: 1
    },
    logInBtn: {
        position: 'absolute',
        backgroundColor: '#9a5a00',
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
    }
});

export default SignPage;