import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function AcceptedReservation() {

    const navigation = useNavigation();

    const { width, height } = Dimensions.get('window');

    return(
        <View>
            <View style={[{height: height / 8}, {backgroundColor: 'rgb(197, 41, 155)'}, {justifyContent: 'center'}, {alignItems: 'center'}, {flexDirection: 'row'}, {gap: 30}]}>
                <Text style={[{fontFamily: 'Poppins-Bold'}, {color: '#fff'}]}>Accepted Reservations</Text>
                <AntDesign name="checkcircle" size={24} color="#fff" />
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Offer')} style={[{marginTop: 30}, {marginHorizontal: 20}, {height: height / 10}, {borderRadius: 30}, {elevation: 50}, {backgroundColor: '#fff'}, {marginBottom: 20}, {flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'center'}, {gap: 30}]}>
                <Text style={{fontFamily: 'Poppins-Medium'}}>Reservation Name</Text>
                <MaterialIcons name="house-siding" size={27} color="black" />
            </TouchableOpacity>

            <View style={[{marginTop: 30}, {marginHorizontal: 20}, {height: height / 10}, {borderRadius: 30}, {elevation: 50}, {backgroundColor: '#fff'}, {marginBottom: 20}, {flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'center'}, {gap: 30}]}>
                <Text style={{fontFamily: 'Poppins-Medium'}}>Reservation Name</Text>
                <MaterialIcons name="house-siding" size={27} color="black" />
            </View>

            <View style={[{marginTop: 30}, {marginHorizontal: 20}, {height: height / 10}, {borderRadius: 30}, {elevation: 50}, {backgroundColor: '#fff'}, {marginBottom: 20}, {flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'center'}, {gap: 30}]}>
                <Text style={{fontFamily: 'Poppins-Medium'}}>Reservation Name</Text>
                <MaterialIcons name="house-siding" size={27} color="black" />
            </View>

            <View style={[{marginTop: 30}, {marginHorizontal: 20}, {height: height / 10}, {borderRadius: 30}, {elevation: 50}, {backgroundColor: '#fff'}, {marginBottom: 20}, {flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'center'}, {gap: 30}]}>
                <Text style={{fontFamily: 'Poppins-Medium'}}>Reservation Name</Text>
                <MaterialIcons name="house-siding" size={27} color="black" />
            </View>
        </View>
    )
};

export default AcceptedReservation;