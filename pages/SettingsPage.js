import { View, Text, FlatList, Dimensions, TouchableOpacity, Image, Animated, TextInput, Alert, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import BottomNav from '../component/BottomNav';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

function SettingsPage() {

    const navigation = useNavigation();

    const { width, height } = Dimensions.get('window');

    const [lightTheme, setLightTheme] = useState(true);
    const [language, setLanguage] = useState('english');

    const [userEmail, setUserEmail] = useState(null);
    const [userID, setUserID] = useState(null);

    const [currentPassword, setCurrentPassword] = useState(null);
    const [newPassword, setNewPassword] = useState(null);

    const [loading, setLoading] = useState(false);

    const passwordRegex = /^.{8,}$/;

    const themeToggle = new Animated.Value(0);

    useEffect(() => {
        if (lightTheme) {
            Animated.timing(themeToggle, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true
            }).start()
        } else {
            Animated.timing(themeToggle, {
                toValue: 39,
                duration: 300,
                useNativeDriver: true
            }).start()
        }
    });

    const changeTheme = () => {
        setLightTheme(!lightTheme);
    };

    const asyncStorage = async () => {
        try {
            const response = await AsyncStorage.getItem('userInfo');
            setUserEmail(JSON.parse(response).email);
            setUserID(JSON.parse(response)._id);
        } catch (err) {
            console.error(err);
        }
    };

    asyncStorage();

    const changePassword = () => {
        if (userEmail !== null && currentPassword !== null && 
            userID !== null && newPassword !== null) {
            setLoading(true);
            const checkPasswordApi = async () => {
                try {
                    const response = await fetch('http://192.168.1.2:4000/users/login', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: userEmail,
                            password: currentPassword
                        })
                    });

                    const data = await response.json();

                    //the below code is triggerd if current password is correct and the regex is met

                    if (data.userInfo && passwordRegex.test(newPassword)) {
                        const changePasswordApi = async () => {
                            try {
                                const response = await fetch(`http://192.168.1.2:4000/users/changePassword/${userID}`, {
                                    method: 'PATCH',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({
                                        password: newPassword
                                    })
                                });
        
                                const data = await response.json();
                                setLoading(false);
                                
                                navigation.reset({
                                    index: 0,
                                    routes: [{ name: 'Sign' }]
                                });
                            } catch (err) {
                                console.error(err);
                            }
                        };
        
                        changePasswordApi();

                        //end of change password code
                    } else {
                        Alert.alert('Oops! current password is wrong OR new password is less than 8 characters.');
                        setLoading(false);
                    }
                } catch (err) {
                    console.error(err);
                }
            };

            checkPasswordApi();
        } else {
            Alert.alert('No password was typed!');
        }
    };

    return(
        <View style={{flex: 1}}>
            <View style={[{height: height / 10}, {backgroundColor: 'rgb(197, 41, 155)'}, {flexDirection: 'row'}, {justifyContent: 'center'}, {alignItems: 'center'}, {gap: 20}]}>
                <AntDesign name="setting" size={27} color="#fff" />
                <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Medium'}]}>Settings</Text>
            </View>
            <View style={[{justifyContent: 'space-between'}, {alignItems: 'center'}, {flexDirection: 'row'}, {paddingHorizontal: 20}, {paddingVertical: 10}, {marginTop: 50}]}>
                <Text style={{fontFamily: 'Poppins-Medium'}}>Theme settings</Text>
                <View style={[{height: 41}, {width: 80}, {borderRadius: 30}, {flexDirection: 'row'}, {justifyContent: 'space-between'}, {alignItems: 'center'}, {paddingHorizontal: 6}, lightTheme ? {backgroundColor: '#000'} : {backgroundColor: 'rgb(197, 41, 155)'}]}>
                    <Ionicons name="sunny-outline" size={24} color="#fff" />
                    <Ionicons name="moon" size={24} color="yellow" />
                    <TouchableOpacity onPress={changeTheme} style={[{width: 37}, {height: 37}, {position: 'absolute'}, {borderRadius: 100 / 2}]}>
                        <Animated.View style={[{width: 37}, {height: 37}, {position: 'absolute'}, {borderRadius: 100 / 2}, {backgroundColor: lightTheme ? '#fff' : '#000'}, {transform: [{translateX: themeToggle}]}, {left: 2}]} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={[{paddingHorizontal: 20}, {paddingVertical: 10}]}>
                <Text style={[{fontFamily: 'Poppins-Medium'}, {marginBottom: 10}]}>Language settings</Text>
                <TouchableOpacity onPress={() => setLanguage('english')} style={[{flexDirection: 'row'}, {justifyContent: 'space-between'}, {paddingVertical: 10}]}>
                    <Text style={{fontFamily: 'Poppins-Medium'}}>English</Text>
                    <View style={[{height: 20}, {width: 20}, {borderWidth: 2}, {borderRadius: 100 / 2}, {justifyContent: 'center'}, {alignItems: 'center'}, {borderColor: 'rgb(197, 41, 155)'}]}>
                        {
                            language === 'english' && (
                                <View style={[{height: 10}, {width: 10}, {backgroundColor: 'rgb(197, 41, 155)'}, {borderRadius: 100 / 2}]}></View>
                            )
                        }
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setLanguage('arabic')} style={[{flexDirection: 'row'}, {justifyContent: 'space-between'}, {paddingVertical: 10}]}>
                    <Text>العربية</Text>
                    <View style={[{height: 20}, {width: 20}, {borderWidth: 2}, {borderRadius: 100 / 2}, {justifyContent: 'center'}, {alignItems: 'center'}, {borderColor: 'rgb(197, 41, 155)'}]}>
                        {
                            language === 'arabic' && (
                                <View style={[{height: 10}, {width: 10}, {backgroundColor: 'rgb(197, 41, 155)'}, {borderRadius: 100 / 2}]}></View>
                            )
                        }
                    </View>
                </TouchableOpacity>
            </View>

            <View style={[{paddingHorizontal: 20}, {paddingVertical: 10}, {gap: 40}]}>
                <Text style={[{fontFamily: 'Poppins-Medium'}]}>Password settings</Text>
                
                <View style={[{gap: 20}, {paddingHorizontal: 20}]}>
                    <TextInput onChangeText={(text) => setCurrentPassword(text)} style={[{borderBottomWidth: 3}, {borderColor: 'rgb(197, 41, 155)'}, {height: height / 17}, {paddingLeft: 20}, {fontFamily: 'Poppins-Regular'}]} placeholder='Current password...' secureTextEntry={true} />
                    <TextInput onChangeText={(text) => setNewPassword(text)} style={[{borderBottomWidth: 3}, {borderColor: 'rgb(197, 41, 155)'}, {height: height / 17}, {paddingLeft: 20}, {fontFamily: 'Poppins-Regular'}]} placeholder='New password...' secureTextEntry={true} />
                </View>

                <TouchableOpacity onPress={changePassword} style={[{justifyContent: 'center'}, {alignItems: 'center'}, {height: height / 17}, {borderRadius: 30}, {backgroundColor: 'rgb(197, 41, 155)'}]}>
                    {
                        loading ? (
                            <ActivityIndicator color='#fff' size={'large'} />
                        ) : (
                            <Text style={[{fontFamily: 'Poppins-Medium'}, {color: '#fff'}]}>Change password</Text>
                        )
                    }
                </TouchableOpacity>        
            </View>

            <BottomNav />
        </View>
    )
};

export default SettingsPage;