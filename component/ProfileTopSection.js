import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, Animated, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

function ProfileTopSection() {

    const { width, height } = Dimensions.get('window');

    const [openProfileSettings, setOpenProfileSettings] = useState(false);
    const [lightTheme, setLightTheme] = useState(true);
    const [language, setLanguage] = useState('english');

    const profileSettings = new Animated.Value(0);

    const themeToggle = new Animated.Value(0);

    useEffect(() => {
        if (openProfileSettings) {
            Animated.timing(profileSettings, {
                toValue: height / 3.5,
                duration: 300,
                useNativeDriver: true
            }).start()
        }

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

    return(
        <View>
            <TouchableOpacity onPress={() => setOpenProfileSettings(!openProfileSettings)} style={[{position: 'absolute'}, {right: 0}]}>
                <AntDesign name="setting" size={30} color="rgb(197, 41, 155)" />
            </TouchableOpacity>

            {
                openProfileSettings && (
                    <Animated.View style={[{height: height / 2}, {position: 'absolute'}, {zIndex: 1000}, {left: 0}, {right: 0}, {borderRadius: 20}, {elevation: 50}, {backgroundColor: '#fff'}, {transform: [{translateY: profileSettings}]}]}>
                        <View style={[{justifyContent: 'space-between'}, {alignItems: 'center'}, {flexDirection: 'row'}, {paddingHorizontal: 20}, {paddingVertical: 10}]}>
                            <Text style={{fontFamily: 'Poppins-Medium'}}>Theme settings</Text>
                            <View style={[{height: 41}, {width: 80}, {borderRadius: 30}, {flexDirection: 'row'}, {justifyContent: 'space-between'}, {alignItems: 'center'}, {paddingHorizontal: 6}, lightTheme ? {backgroundColor: 'cyan'} : {backgroundColor: 'darkblue'}]}>
                                <Ionicons name="sunny-outline" size={24} color="#fff" />
                                <Ionicons name="moon" size={24} color="yellow" />
                                <TouchableOpacity onPress={changeTheme} style={[{width: 37}, {height: 37}, {position: 'absolute'}, {borderRadius: 100 / 2}]}>
                                    <Animated.View style={[{width: 37}, {height: 37}, {position: 'absolute'}, {borderRadius: 100 / 2}, {backgroundColor: '#fff'}, {transform: [{translateX: themeToggle}]}, {left: 2}]} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={[{paddingHorizontal: 20}, {paddingVertical: 10}]}>
                            <Text style={[{fontFamily: 'Poppins-Medium'}, {marginBottom: 10}]}>Language settings:</Text>
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

                        <View style={[{paddingHorizontal: 20}, {paddingVertical: 10}, {flex: 1}, {justifyContent: 'space-between'}]}>
                            <Text style={[{fontFamily: 'Poppins-Medium'}, {marginBottom: 10}]}>Password Settings:</Text>
                            <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                                <Text style={{fontFamily: 'Poppins-Medium'}}>Current password:</Text>
                                <TextInput style={[{borderWidth: 2}, {flex: 1}, {height: height / 20}, {borderRadius: 30}, {paddingLeft: 20}, {fontFamily: 'Poppins-Regular'}]} />
                            </View>

                            <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                                <Text style={{fontFamily: 'Poppins-Medium'}}>New password:</Text>
                                <TextInput style={[{borderWidth: 2}, {flex: 1}, {height: height / 20}, {borderRadius: 30}, {paddingLeft: 20}, {fontFamily: 'Poppins-Regular'}]} />
                            </View>

                            <TouchableOpacity style={[{justifyContent: 'center'}, {alignItems: 'center'}, {height: height / 17}, {borderRadius: 30}, {backgroundColor: 'rgb(197, 41, 155)'}]}>
                                <Text style={[{fontFamily: 'Poppins-Medium'}, {color: '#fff'}]}>Change password</Text>
                            </TouchableOpacity>        
                        </View>
                    </Animated.View>
                )
            }

            <View style={[{marginTop: 40}, {alignItems: 'center'}]}>
                <View>
                    <Image style={[{height: 100}, {width: 100}, {borderRadius: 100 / 2}]} source={{uri: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D'}} />
                    <TouchableOpacity style={[{position: 'absolute'}, {backgroundColor: 'rgb(197, 41, 155)'}, {padding: 5}, {borderRadius: 100 / 2}, {right: 0}, {bottom: 0}]}>
                        <Feather name="edit-3" size={24} color="#fff" />
                    </TouchableOpacity>
                </View>
                <Text style={[{fontFamily: 'Poppins-Bold'}, {fontSize: 30}]}>Esther Howard</Text>
                <Text style={{fontFamily: 'Poppins-Regular'}}>Esther05@gmail.com</Text>
            </View>
        </View>
    )
};

export default ProfileTopSection;