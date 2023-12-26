import { View, Text, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

function ProfileOptions() {

    const { width, height } = Dimensions.get('window');

    return(
        <View style={[{marginTop: 30}, {gap: 20}]}>
            <TouchableOpacity style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}, {borderRadius: 20}, {elevation: 50}, {backgroundColor: '#fff'}, {paddingHorizontal: 20}, {height: height / 10}]}>
                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}]}>
                    <Ionicons name="checkmark-done" size={30} color="rgb(197, 41, 155)" />
                    <Text style={{fontFamily: 'Poppins-Medium'}}>Accepted Reservations</Text>
                </View>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}, {borderRadius: 20}, {elevation: 50}, {backgroundColor: '#fff'}, {paddingHorizontal: 20}, {height: height / 10}]}>
                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}]}>
                    <FontAwesome5 name="paper-plane" size={30} color="rgb(197, 41, 155)" />
                    <Text style={{fontFamily: 'Poppins-Medium'}}>My offers</Text>
                </View>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}, {borderRadius: 20}, {elevation: 50}, {backgroundColor: '#fff'}, {paddingHorizontal: 20}, {height: height / 10}]}>
                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}]}>
                    <Ionicons name="receipt-outline" size={30} color="rgb(197, 41, 155)" />
                    <Text style={{fontFamily: 'Poppins-Medium'}}>Received Reservations</Text>
                </View>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}, {borderRadius: 20}, {elevation: 50}, {backgroundColor: '#fff'}, {paddingHorizontal: 20}, {height: height / 10}]}>
                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}]}>
                    <Feather name="log-out" size={30} color="rgb(197, 41, 155)" />
                    <Text style={{fontFamily: 'Poppins-Medium'}}>LOG OUT</Text>
                </View>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
};

export default ProfileOptions;