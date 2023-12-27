import { View, Text, Dimensions, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function ProfileOptions() {

    const navigation = useNavigation();

    const { width, height } = Dimensions.get('window');

    const data = [{
        id: '1',
        iconName: 'checkmark-done',
        iconSize: 30,
        iconColor: 'rgb(197, 41, 155)',
        btnTitle: 'Accepted Reservations',
        arrowName: 'keyboard-arrow-right',
        arrowSize: 24,
        arrowColor: '#000'
    },
    {
        id: '2',
        iconName: 'paper-plane',
        iconSize: 30,
        iconColor: 'rgb(197, 41, 155)',
        btnTitle: 'My offers',
        arrowName: 'keyboard-arrow-right',
        arrowSize: 24,
        arrowColor: '#000'
    },
    {
        id: '3',
        iconName: 'receipt-outline',
        iconSize: 30,
        iconColor: 'rgb(197, 41, 155)',
        btnTitle: 'Received Reservations',
        arrowName: 'keyboard-arrow-right',
        arrowSize: 24,
        arrowColor: '#000'
    },
    {
        id: '4',
        iconName: 'log-out',
        iconSize: 30,
        iconColor: 'rgb(197, 41, 155)',
        btnTitle: 'LOG OUT',
        arrowName: 'keyboard-arrow-right',
        arrowSize: 24,
        arrowColor: '#000'
    }];

    return(
        <FlatList style={{marginTop: 30}} data={data} keyExtractor={item => item.id} renderItem={({item}) => (
            <TouchableOpacity onPress={() => navigation.navigate('AcceptedReservations')} style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}, {backgroundColor: '#fff'}, {paddingHorizontal: 20}, {height: height / 10}, {marginBottom: 10}]}>
                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}]}>
                    <Ionicons name={item.iconName} size={item.iconSize} color={item.iconColor} />
                    <Text style={{fontFamily: 'Poppins-Medium'}}>{item.btnTitle}</Text>
                </View>
                <MaterialIcons name={item.arrowName} size={item.arrowSize} color={item.arrowColor} />
            </TouchableOpacity>
        )} />
    )
};

export default ProfileOptions;