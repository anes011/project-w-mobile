import { View, Text, FlatList, Dimensions, TouchableOpacity, Image, Animated, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function ProfileTopSection() {

    const navigation = useNavigation();

    const { width, height } = Dimensions.get('window');

    const dataProfile = [{
        id: '1',
        profilePhoto: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
        name: 'Esther Howard',
        email: 'Esther05@gmail.com',
        iconName: 'edit-3',
        iconSize: 24,
        iconColor: '#fff',
    }];

    return(
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}  style={[{position: 'absolute'}, {right: 0}, {top: 10}]}>
                <AntDesign name="setting" size={30} color="rgb(197, 41, 155)" />
            </TouchableOpacity>

            <FlatList style={{marginTop: 30}} data={dataProfile} keyExtractor={item => item.id} renderItem={({item}) => (
                <>
                    <View>
                        <Image style={[{height: 100}, {width: 100}, {borderRadius: 100 / 2}]} source={{uri: item.profilePhoto}} />
                        <TouchableOpacity style={[{position: 'absolute'}, {backgroundColor: 'rgb(197, 41, 155)'}, {padding: 5}, {borderRadius: 100 / 2}, {right: 0}, {bottom: 0}]}>
                            <Feather name={item.iconName} size={item.iconSize} color={item.iconColor} />
                        </TouchableOpacity>
                    </View>
                    <Text style={[{fontFamily: 'Poppins-Bold'}, {fontSize: 30}]}>{item.name}</Text>
                    <Text style={{fontFamily: 'Poppins-Regular'}}>{item.email}</Text>
                </>
            )} />
        </View>
    )
};

export default ProfileTopSection;