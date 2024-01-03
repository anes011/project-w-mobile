import { View, Text, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function ProfileOptions() {

    const navigation = useNavigation();

    const { width, height } = Dimensions.get('window');

    const navigateToSign = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Sign' }]
        });
    };

    return(
        <View style={[{marginTop: 30}]}>
            <TouchableOpacity onPress={() => navigation.navigate('AcceptedReservations')} style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}, {backgroundColor: '#fff'}, {paddingHorizontal: 20}, {height: height / 10}, {marginBottom: 10}]}>
                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}]}>
                    <Ionicons name='checkmark-done' size={24} color='rgb(197, 41, 155)' />
                    <Text style={{fontFamily: 'Poppins-Medium'}}>Accepted Reservations</Text>
                </View>
                <MaterialIcons name='keyboard-arrow-right' size={24} color='#000' />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Myoffers')} style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}, {backgroundColor: '#fff'}, {paddingHorizontal: 20}, {height: height / 10}, {marginBottom: 10}]}>
                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}]}>
                    <Ionicons name='paper-plane' size={24} color='rgb(197, 41, 155)' />
                    <Text style={{fontFamily: 'Poppins-Medium'}}>My offers</Text>
                </View>
                <MaterialIcons name='keyboard-arrow-right' size={24} color='#000' />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Received')} style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}, {backgroundColor: '#fff'}, {paddingHorizontal: 20}, {height: height / 10}, {marginBottom: 10}]}>
                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}]}>
                    <Ionicons name='receipt-outline' size={24} color='rgb(197, 41, 155)' />
                    <Text style={{fontFamily: 'Poppins-Medium'}}>Received Reservations</Text>
                </View>
                <MaterialIcons name='keyboard-arrow-right' size={24} color='#000' />
            </TouchableOpacity>

            <TouchableOpacity onPress={navigateToSign} style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}, {backgroundColor: '#fff'}, {paddingHorizontal: 20}, {height: height / 10}, {marginBottom: 10}]}>
                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}]}>
                    <Ionicons name='log-out' size={24} color='rgb(197, 41, 155)' />
                    <Text style={{fontFamily: 'Poppins-Medium'}}>LOG OUT</Text>
                </View>
                <MaterialIcons name='keyboard-arrow-right' size={24} color='#000' />
            </TouchableOpacity>
        </View>
    )
};

export default ProfileOptions;