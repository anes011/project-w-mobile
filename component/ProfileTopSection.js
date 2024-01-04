import { View, Text, Dimensions, TouchableOpacity, Image, Animated, TextInput, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as DocumentPicker from 'expo-document-picker';

function ProfileTopSection() {

    const navigation = useNavigation();

    const { width, height } = Dimensions.get('window');

    const [userInfo, setUserInfo] = useState(null);

    const asyncStorage = async () => {
        try {
            const response = await AsyncStorage.getItem('userInfo');
            setUserInfo(JSON.parse(response));
        } catch (err) {
            console.error(err);
        }
    };

    asyncStorage();

    const changeProfilePhoto = () => {

        const pickPhoto = async () => {
            try {
                const result = await DocumentPicker.getDocumentAsync({
                    type: '*/*'
                });
    
                if (result.canceled) {
                    Alert.alert('No photo was selected!');
                } else {

                    if (userInfo !== null) {
                        const file = {
                            uri: result.assets[0].uri,
                            type: result.assets[0].mimeType,
                            name: result.assets[0].name
                        }
                
                        const formData = new FormData();
                        formData.append('profilePhoto', file);
                
                        const changePhotoApi = async () => {
                            try {
                                const response = await fetch(`http://192.168.1.2:4000/users/changeProfilePhoto/${userInfo._id}`, {
                                    method: 'PATCH',
                                    body: formData
                                });
                
                                const data = await response.json();

                                Alert.alert('Photo changed successfully! you need to login again for changes to apply');

                                navigation.reset({
                                    index: 0,
                                    routes: [{ name: 'Sign' }]
                                });
                            } catch (err) {
                                console.error(err);
                            }
                        };
                
                        changePhotoApi();
                    }
                }
            } catch (err) {
                console.error(err);
            }
        };

        pickPhoto();
    };

    return(
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}  style={[{position: 'absolute'}, {right: 0}, {top: 10}]}>
                <AntDesign name="setting" size={30} color="rgb(197, 41, 155)" />
            </TouchableOpacity>

            {
                userInfo !== null && (
                    <View style={[{marginTop: 40}]}>
                        <View>
                            <Image style={[{height: 100}, {width: 100}, {borderRadius: 100 / 2}]} source={{uri: userInfo.profilePhoto}} />
                            <TouchableOpacity onPress={changeProfilePhoto} style={[{position: 'absolute'}, {backgroundColor: 'rgb(197, 41, 155)'}, {padding: 5}, {borderRadius: 100 / 2}, {right: 0}, {bottom: 0}]}>
                                <Feather name='edit-3' size={24} color='#fff' />
                            </TouchableOpacity>
                        </View>
                        <Text style={[{fontFamily: 'Poppins-Bold'}, {fontSize: 30}]}>{userInfo.fullName}</Text>
                        <Text style={{fontFamily: 'Poppins-Regular'}}>{userInfo.email}</Text>
                    </View>
                )
            }
        </View>
    )
};

export default ProfileTopSection;