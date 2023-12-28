import { View, Text, FlatList, Dimensions, TouchableOpacity, Image, Animated, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import BottomNav from '../component/BottomNav';

function SettingsPage() {

    const { width, height } = Dimensions.get('window');

    const [lightTheme, setLightTheme] = useState(true);
    const [language, setLanguage] = useState('english');

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
                <Text style={[{fontFamily: 'Poppins-Medium'}, {marginBottom: 10}]}>Password settings</Text>
                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                    <Text style={{fontFamily: 'Poppins-Medium'}}>Current password</Text>
                    <TextInput style={[{borderWidth: 2}, {flex: 1}, {height: height / 20}, {borderRadius: 30}, {paddingLeft: 20}, {fontFamily: 'Poppins-Regular'}]} />
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                    <Text style={{fontFamily: 'Poppins-Medium'}}>New password</Text>
                    <TextInput style={[{borderWidth: 2}, {flex: 1}, {height: height / 20}, {borderRadius: 30}, {paddingLeft: 20}, {fontFamily: 'Poppins-Regular'}]} />
                </View>

                <TouchableOpacity style={[{justifyContent: 'center'}, {alignItems: 'center'}, {height: height / 17}, {borderRadius: 30}, {backgroundColor: 'rgb(197, 41, 155)'}]}>
                    <Text style={[{fontFamily: 'Poppins-Medium'}, {color: '#fff'}]}>Change password</Text>
                </TouchableOpacity>        
            </View>

            <BottomNav />
        </View>
    )
};

export default SettingsPage;