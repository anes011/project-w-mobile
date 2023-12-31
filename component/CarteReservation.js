import { View, Text, Dimensions, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const CarteReservation = () => {

    const {width, height} = Dimensions.get('window');

  return (
    <View>
        <View style={[{height: height / 8}, {backgroundColor: 'rgb(197, 41, 155)'}, {justifyContent: 'center'}, {alignItems: 'center'}, {flexDirection: 'row'}, {gap: 30}]}>
            <Text style={[{fontFamily: 'Poppins-Bold'}, {color: '#fff'}]}>My reservations</Text>
            <Feather name="shopping-bag" size={24} color="#fff" />
        </View>

        <View style={[{height: height / 1.3}, {padding: 20}]}>
            <ScrollView>
                <View style={[{height: height / 3}, {borderRadius: 30}, {backgroundColor: '#000'}, {marginBottom: 30}, {padding: 20}, {justifyContent: 'space-between'}]}>
                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                        <Ionicons name="time" size={24} color="#fff" />
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Regular'}]}>19 February 2020</Text>
                    </View>

                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                        <MaterialIcons name="location-on" size={24} color="#fff" />
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Regular'}]}>Name of the location</Text>
                    </View>

                    <View style={[{alignItems: 'center'}]}>
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Bold'}, {fontSize: 40}]}>7000 / DA</Text>
                    </View>

                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                        <MaterialIcons name="house-siding" size={24} color="#fff" />
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Regular'}]}>Reservation Name</Text>
                    </View>

                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 30}]}>
                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}]}>
                            <MaterialCommunityIcons name="dots-vertical" size={24} color="#fff" />
                            <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Regular'}]}>Status:</Text>
                        </View>

                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                            <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Regular'}]}>Pending</Text>
                            <MaterialCommunityIcons name="timer-sand" size={24} color="#fff" />
                        </View>
                    </View>
                </View>

                <View style={[{height: height / 3}, {borderRadius: 30}, {backgroundColor: '#000'}, {marginBottom: 30}, {padding: 20}, {justifyContent: 'space-between'}]}>
                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                        <Ionicons name="time" size={24} color="#fff" />
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Regular'}]}>19 February 2020</Text>
                    </View>

                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                        <MaterialIcons name="location-on" size={24} color="#fff" />
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Regular'}]}>Name of the location</Text>
                    </View>

                    <View style={[{alignItems: 'center'}]}>
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Bold'}, {fontSize: 40}]}>7000 / DA</Text>
                    </View>

                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                        <MaterialIcons name="house-siding" size={24} color="#fff" />
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Regular'}]}>Reservation Name</Text>
                    </View>

                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 30}]}>
                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}]}>
                            <MaterialCommunityIcons name="dots-vertical" size={24} color="#fff" />
                            <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Regular'}]}>Status:</Text>
                        </View>

                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                            <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Regular'}]}>Pending</Text>
                            <MaterialCommunityIcons name="timer-sand" size={24} color="#fff" />
                        </View>
                    </View>
                </View>

                <View style={[{height: height / 3}, {borderRadius: 30}, {backgroundColor: '#000'}, {marginBottom: 30}, {padding: 20}, {justifyContent: 'space-between'}]}>
                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                        <Ionicons name="time" size={24} color="#fff" />
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Regular'}]}>19 February 2020</Text>
                    </View>

                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                        <MaterialIcons name="location-on" size={24} color="#fff" />
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Regular'}]}>Name of the location</Text>
                    </View>

                    <View style={[{alignItems: 'center'}]}>
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Bold'}, {fontSize: 40}]}>7000 / DA</Text>
                    </View>

                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                        <MaterialIcons name="house-siding" size={24} color="#fff" />
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Regular'}]}>Reservation Name</Text>
                    </View>

                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 30}]}>
                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}]}>
                            <MaterialCommunityIcons name="dots-vertical" size={24} color="#fff" />
                            <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Regular'}]}>Status:</Text>
                        </View>

                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                            <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Regular'}]}>Pending</Text>
                            <MaterialCommunityIcons name="timer-sand" size={24} color="#fff" />
                        </View>
                    </View>
                </View>

                <View style={[{height: height / 3}, {borderRadius: 30}, {backgroundColor: '#000'}, {marginBottom: 30}, {padding: 20}, {justifyContent: 'space-between'}]}>
                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                        <Ionicons name="time" size={24} color="#fff" />
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Regular'}]}>19 February 2020</Text>
                    </View>

                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                        <MaterialIcons name="location-on" size={24} color="#fff" />
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Regular'}]}>Name of the location</Text>
                    </View>

                    <View style={[{alignItems: 'center'}]}>
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Bold'}, {fontSize: 40}]}>7000 / DA</Text>
                    </View>

                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                        <MaterialIcons name="house-siding" size={24} color="#fff" />
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Regular'}]}>Reservation Name</Text>
                    </View>

                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 30}]}>
                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}]}>
                            <MaterialCommunityIcons name="dots-vertical" size={24} color="#fff" />
                            <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Regular'}]}>Status:</Text>
                        </View>

                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                            <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Regular'}]}>Pending</Text>
                            <MaterialCommunityIcons name="timer-sand" size={24} color="#fff" />
                        </View>
                    </View>
                </View>

                <View style={[{height: height / 3}, {borderRadius: 30}, {backgroundColor: '#000'}, {marginBottom: 30}, {padding: 20}, {justifyContent: 'space-between'}]}>
                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                        <Ionicons name="time" size={24} color="#fff" />
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Regular'}]}>19 February 2020</Text>
                    </View>

                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                        <MaterialIcons name="location-on" size={24} color="#fff" />
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Regular'}]}>Name of the location</Text>
                    </View>

                    <View style={[{alignItems: 'center'}]}>
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Bold'}, {fontSize: 40}]}>7000 / DA</Text>
                    </View>

                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                        <MaterialIcons name="house-siding" size={24} color="#fff" />
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Regular'}]}>Reservation Name</Text>
                    </View>

                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 30}]}>
                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}]}>
                            <MaterialCommunityIcons name="dots-vertical" size={24} color="#fff" />
                            <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Regular'}]}>Status:</Text>
                        </View>

                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                            <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Regular'}]}>Pending</Text>
                            <MaterialCommunityIcons name="timer-sand" size={24} color="#fff" />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    </View>
  )
}

export default CarteReservation